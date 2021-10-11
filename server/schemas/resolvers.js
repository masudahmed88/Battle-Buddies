const { AuthenticationError } = require('apollo-server-express');
const { User, SteamAccount, Game } = require('../models');
const { signToken } = require('../utils/auth');
const stripe = require('stripe')('sk_test_4eC39HqLyjWDarjtT1zdp7dc');

const resolvers = {
    Query: {
    
        profile: async (parent, { userId }) => {
          return User.findOne({ _id: userId });
        },

        games: async (parent, {userId }, context) => {
            if (context.user) {
                const user = await User.findById(context.user._id).populate({
                  path: 'steamId.games',
                  populate: 'gameName'
                });
        
                return user.games.id(_id);
        }
            throw new AuthenticationError('Not logged in');
        
      },

      friends: async (parent, {userId }, context) => {
        if (context.user) {
            const user = await User.findById(context.user._id).populate({
              path: 'steamId.friends',
              populate: 'steamId'
            });
    
            return user.friends.id(_id);
            }
        throw new AuthenticationError('Not logged in');
    
        },

    },
    
      Mutation: {
        addUser: async (parent, { name }) => {
          return User.create({ name });
        },
        addGame: async (parent, { userId, game }) => {
          return User.findOneAndUpdate(
            { _id: userId },
            {
              $addToSet: { games: game },
            },
            {
              new: true,
              runValidators: true,
            }
          );
        },
        removeUser: async (parent, { userId }) => {
          return User.findOneAndDelete({ _id: userId });
        },
        removeGame: async (parent, { userId, game }) => {
          return User.findOneAndUpdate(
            { _id: userId },
            { $pull: { games: game } },
            { new: true }
          );
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
          }
      },
    };
  
module.exports = resolvers;
