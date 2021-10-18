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
      console.log(context);
      if (context.user) {
        const game = new Game({ gameID});

        await User.findByIdAndUpdate(context.user._id, { $push: { games: game } });

        return game;
      }

      throw new AuthenticationError('Not logged in');
    },
    // remove a game from `games`
    deleteGame: async (parent, gameID , context) => {
      console.log(context)
      if(context.user){
      const updatedUser = await User.findOneAndUpdate(context.user._id, { $pull: { games: gameID} });

      return updatedUser;
      }
      throw new AuthenticationError('not logged In');
    },
    saveFriend: async(parent, friendID , context) => {
      console.log(context);
      if (context.user) {
        const friend = new Friend({ friendID});

        await User.findByIdAndUpdate(context.user._id, { $push: { friends: friend } });

        return friend;
      }

      throw new AuthenticationError('Not logged in');
    },
    // remove a friend from `friends`
    deleteFriend: async (parent, friendID , context) => {
      console.log(context)
      if(context.user){
      const updatedUser = await User.findOneAndUpdate(context.user._id, { $pull: { friends: friendID} });

      return updatedUser;
      }
      throw new AuthenticationError('not logged In');
    },
    compareGames: async (parent,friendID, context) => {
      if(context.user){
            const user = await User.findById(context.user._id);
            const userGames = user.games;
            const friendsGames = user.friends[friendID].games;

            const gamesInCommon = [];

            //searches through the games of the user and the selected friend to find all games in common
            for (i=0; i<userGames.length; i++){
              for(z=0; z<friendsGames.length; z++){
                if(userGames[i].appId === friendsGames[z].appId){
                  gamesInCommon.push(userGames[i].gameID);
                };  
              };
            };
            
            return gamesInCommon;
      };
    },
    compareFriends: async (parent,appId, context) => {
      if(context.user){
            const user = await User.findById(context.user._id);
            const userFriends = user.friends;

            const friendsWithGame = [];

            //searches through the games of the user and the selected friend to find all games in common
            for (i=0; i<userFriends.length; i++){
              const friendsGames = user.friends[i].games;
              for(z=0; z<friendsGames.length; z++){
                if(appId === friendsGames[z].appId){
                  friendsWithGame.push(userFriends[i].friendID);
                };  
              };
            };
            
            return friendsWithGame;
      };
    },
  },
    };
module.exports = resolvers;
