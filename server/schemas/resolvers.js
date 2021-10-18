const { AuthenticationError } = require('apollo-server-express');
const { User } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {        
        user: async (parent, args, context) => {
          if (context.user) {
            const user = await User.findById(context.user.id);

            user.friends.sort((a, b) => a.steamID - b.steamID);
            user.games.sort((a, b) => a.appID - b.appID);

            return user;
          }

          throw new AuthenticationError('Not logged in');
        },

        game: async (parent, { id }, context) => {
            if (context.user) {
                const user = await User.findById(context.user._id).populate({
                  path: 'user.games',
                  populate:'appid'
                });
        
                return user.games.appid(id);
        }
            throw new AuthenticationError('Not logged in');
        
        },
        games: async (parent , {id}, context) => {
          if (context.user) {
              const user = await User.findById(context.user._id).populate({
                path:'games.'
              })
             
              return user.games
      }
          throw new AuthenticationError('Not logged in');
      
      },
        friend: async (parent, {id }, context) => {
          if (context.user) {
            const user = await User.findById(context.user._id).populate({
              path: 'user.friends',
              populate: 'steamId'
            });
    
            return user.friends.id(_id);
            };
        throw new AuthenticationError('Not logged in');
    
        },
        friends: async (parent, { id }, context) => {
          if (context.user) {
              const user = await User.findById(context.user._id)
      
              return user.friends
      }
          throw new AuthenticationError('Not logged in');
      
      },
    },

        // compareFriendOwnedGames: async(parent,friendsId,context) => {
        //   if(context.user){
        //     const user = await User.findById(context.user._id);
        //     const userGames = user.games;

        //     let friendsGameListUrl =`http://api.steampowered.com/IPlayerService/GetOwnedGames/v0001/?key=4C44FBDE2F2CC241516505D6E7C98887&steamid=${friendsId}&format=json`
        //     const friendsGameList = await fetch(friendsGameListUrl);
        //     const friendsGameListData = await friendsGameList.json();
        //     const gamesInCommon = [];

        //     //searches through the games of the user and the selected friend to find all games in common
        //     for (i=0; i<userGames.length; i++){
        //       for(z=0; z<friendsGameListData.length; z++){
        //         if(userGames[i].appid === friendsGameListData[z].appid){
        //           gamesInCommon.push(userGames[i].appid);
        //         };  
        //       };
        //     };
            
        //     return gamesInCommon;
            
        //   };
        // },
      //   findFriendsWithGame :async(parent,game,context) => {
      //     if(context.user){
      //       const user = await User.findById(context.user._id);
      //       const userFriends = user.friends;

      //       const friendsWithGame = [];

      //       //searches through all of the users friends to see who owns a specific game the user selected
      //       for(i=0; i<userFriends.length; i++){
      //         const friendsId = userFriends[i].steamID;
      //         let friendsGameListUrl =`http://api.steampowered.com/IPlayerService/GetOwnedGames/v0001/?key=4C44FBDE2F2CC241516505D6E7C98887&steamid=${friendsId}&format=json`
      //         const friendsGameList = await fetch(friendsGameListUrl);
      //         const friendsGameListData = await friendsGameList.json();
      //         for(z=0; z<friendsGameListData.length; z++){
      //           if(game.appid === friendsGameListData.games[z].appid){ 
      //             friendsWithGame.push(friendsId);
      //              };  
      //            };
      //        };
      //        return friendsWithGame;
      //    };
      //   },
      // },

    Mutation: { 

        addUser: async (parent, args ) => {
          const user = await User.create(args);
          const token = signToken(user);

          return { token, user };
        }, 
        updateUser: async(parent, args , context) =>{
          if (context.user) {
            return User.findByIdAndUpdate(context.user.id, args, {
              new: true,
            });
          }
    
          throw new AuthenticationError('Not logged in');
        },
        login: async (parent, { email, password }) => {
          const user = await User.findOne({ email });
    
          if (!user) {
            throw new AuthenticationError('Incorrect credentials');
          }
    
          const correctPw = await user.isCorrectPassword(password);
    
          if (!correctPw) {
            throw new AuthenticationError('Incorrect credentials');
          }
    
          const token = signToken(user);
    
          return { token, user };
        },
      
        deleteUser: async (parent, { userId }) => {
          return User.findOneAndDelete({ _id: userId });
        },
        
    
    saveGame: async(parent, gameID , context) => {
      console.log(context.user);
      try {
        const updatedUser = await User.findOneAndUpdate(
          { _id: context.user._id },
          { $addToSet: { games: args } },
          { new: true, runValidators: true }
        );
        return updatedUser;
      } catch (err) {
        console.log(err);
        return res.status(400).json(err);
      }
    },
    // remove a game from `games`
    deleteGame: async ({ user, params }, res) => {
      const updatedUser = await User.findOneAndUpdate(
        { _id: user._id },
        { $pull: { games: { gameId: params.gameId } } },
        { new: true }
      );
      if (!updatedUser) {
        return res.status(404).json({ message: "Couldn't find user with this id!" });
      }
      return res.json(updatedUser);
    },
    saveFriend: async ({ user, body }, res) => {
      console.log(user);
      try {
        const updatedUser = await User.findOneAndUpdate(
          { _id: user._id },
          { $addToSet: { friends: body } },
          { new: true, runValidators: true }
        );
        return res.json(updatedUser);
      } catch (err) {
        console.log(err);
        return res.status(400).json(err);
      }
    },
    // remove a friend from `friends`
    deleteFriend: async ({ user, params }, res) => {
      const updatedUser = await User.findOneAndUpdate(
        { _id: user._id },
        { $pull: { friends: { friendId: params.friendId } } },
        { new: true }
      );
      if (!updatedUser) {
        return res.status(404).json({ message: "Couldn't find user with this id!" });
      }
      return res.json(updatedUser);
    },
  }
  };
module.exports = resolvers;
