const { AuthenticationError } = require('apollo-server-express');
const { User } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {        
        me: async (parent, args, context) => {
          if (context.user) {
            const user = await User.findById(context.user.id).populate({
              path: 'orders.products',
              populate: 'category',
            });

            user.friends.sort((a, b) => b.steamID - a.steamID);

            return user;
          }

          throw new AuthenticationError('Not logged in');
        },
        myGames: async (parent, {userId }, context) => {
            if (context.user) {
                const user = await User.findById(context.user._id).populate({
                  path: 'user.games',
                  populate: 'gameName'
                });
        
                return user.games;
        }
            throw new AuthenticationError('Not logged in');
        
        },
        myFriends: async (parent, {userId }, context) => {
          if (context.user) {
            const user = await User.findById(context.user._id).populate({
              path: 'steamId.friends',
              populate: 'steamId'
            });
    
            return user.friends.id(_id);
            };
        throw new AuthenticationError('Not logged in');
    
        },
        compareFriendOwnedGames: async(parent,friendsId,context) => {
          if(context.user){
            const user = await User.findById(context.user._id);
            const userGames = user.games;

            let friendsGameListUrl =`http://api.steampowered.com/IPlayerService/GetOwnedGames/v0001/?key=4C44FBDE2F2CC241516505D6E7C98887&steamid=${friendsId}&format=json`
            const friendsGameList = await fetch(friendsGameListUrl);
            const friendsGameListData = await friendsGameList.json();
            const gamesInCommon = [];

            //searches through the games of the user and the selected friend to find all games in common
            for (i=0; i<userGames.length; i++){
              for(z=0; z<friendsGameListData.length; z++){
                if(userGames[i].appid === friendsGameListData[z].appid){
                  gamesInCommon.push(userGames[i].appid);
                };  
              };
            };
            
            return gamesInCommon;
            
          };
        },
        findFriendsWithGame :async(parent,game,context) => {
          if(context.user){
            const user = await User.findById(context.user._id);
            const userFriends = user.friends;

            const friendsWithGame = [];

            //searches through all of the users friends to see who owns a specific game the user selected
            for(i=0; i<userFriends.length; i++){
              const friendsId = userFriends[i].steamID;
              let friendsGameListUrl =`http://api.steampowered.com/IPlayerService/GetOwnedGames/v0001/?key=4C44FBDE2F2CC241516505D6E7C98887&steamid=${friendsId}&format=json`
              const friendsGameList = await fetch(friendsGameListUrl);
              const friendsGameListData = await friendsGameList.json();
              for(z=0; z<friendsGameListData.length; z++){
                if(game.appid === friendsGameListData.games[z].appid){ 
                  friendsWithGame.push(friendsId);
                   };  
                 };
             };
             return friendsWithGame;
         };
        },
      },

    Mutation: {
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
        createUser: async (parent,args ) => {
          return User.create({ args });
        },
        updateUser: async(parent, userId , context) =>{
          if (context.user) {
            const user = await User.findById(context.user._id);

            //fetches the users friend list from Steam's Servers 
            let friendListUrl =`http://api.steampowered.com/ISteamUser/GetFriendList/v0001/?key=4C44FBDE2F2CC241516505D6E7C98887&steamid=${user.steamID}&relationship=friend`;
            const friendsList = await fetch(friendListUrl);
            const friendsListData = await friendsList.json();
            console.log(friendsListData);

            //fetches the users list of owned games from Steam's Servers
            let gameListUrl =`http://api.steampowered.com/IPlayerService/GetOwnedGames/v0001/?key=4C44FBDE2F2CC241516505D6E7C98887&steamid=${user.steamID}&format=json`;
            const gamesList = await fetch(gameListUrl);
            const gamesListData = await friendsList.json();
            console.log(gamesListData);

            //Assigns the data from the fetched objects to the users Model
            user.friends = friendsListData.friendslist.friends;
            user.games = gamesListData.response.games;

            console.log(user)
          return user;
        };
        },
        deleteUser: async (parent, { userId }) => {
          return User.findOneAndDelete({ _id: userId });
        },
      },
    };
  
module.exports = resolvers;
