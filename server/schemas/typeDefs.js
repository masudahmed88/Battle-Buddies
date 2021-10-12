const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Game {
    _id: ID
    name: String
    appid: Int
  }

  type User {
    _id: ID
    firstName: String!
    lastName: String!
    email: String!
    password: String!
    steamID: String!
    games: [Game]
    friends: [Friend]
    isPremium: Boolean!
  }

  type Friend {
    _id: ID
    steamID: String!
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    me: User
    myGames: [Game] 
    myFriends: [Friend]
    compareFriendOwnedGames(friend: ID): [Game] 
    findFriendsWithGame(game: ID): [Friend]

  }

  type Mutation {
    createUser(firstName: String!, lastName: String!, email: String!, password: String!, steamID: String!): Auth
    updateUser(firstName: String!, lastName: String!, email: String!, password: String!, isPremium: Boolean!): User
    deleteUser: User
    login(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;
