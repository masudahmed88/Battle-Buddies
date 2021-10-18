const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Game {
    _id: ID
    appid: String
    gameName: String
    description: String
    imgUrl: String
    rating: String  
  }

  type Friend {
    _id: ID
    steamID: String!
    profileName:String
    name: String
    games: [Game]
  }

  type User {
    _id: ID
    firstName: String!
    lastName: String!
    email: String
    games: [Game]
    friends: [Friend]
    isPremium: Boolean
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    user: User
    game(appid: String!): Game
    games:[Game]
    friend(steamID: String!): Friend
    friends:[Friend]
  }

  type Mutation {
    addUser(
      firstName: String!
      lastName: String! 
      email: String!
      password: String!
      steamID: String!
      ): Auth
    updateUser(
      firstName: String 
      lastName: String
      email: String
      password: String 
      isPremium: Boolean): User
    saveGame(gameID:String):User
    deleteGame(gameID:String):User
    saveFriend(friendID:String):User
    deleteFriend(friendID:String):User
    deleteUser: User
    login(
      email: String! 
      password: String!
      ): Auth
  }
`;

module.exports = typeDefs;
