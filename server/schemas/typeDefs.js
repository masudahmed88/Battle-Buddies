const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Game {
    _id: ID
    name: String
    appid: Int
  }


  type User {
    _id: ID
    firstName: String
    lastName: String
    email: String
    steamID: String
  }

  type SteamAccount {
    _id: ID
    steamId: Number
    games :[Game]
  }

  type Auth {
    token: ID
    user: User
  }

  type Query {
    categories: [Category]
    products(category: ID, name: String): [Product]
    product(_id: ID!): Product
    user: User
    order(_id: ID!): Order
    checkout(products: [ID]!): Checkout
  }

  type Mutation {
    addUser(firstName: String!, lastName: String!, email: String!, password: String!): Auth
    addOrder(products: [ID]!): Order
    updateUser(firstName: String, lastName: String, email: String, password: String): User
    updateProduct(_id: ID!, quantity: Int!): Product
    login(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;
