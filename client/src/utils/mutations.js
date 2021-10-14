import { gql } from '@apollo/client';

export const ADD_USER = gql`
  mutation createUser($firstName: String!, $lastName: String!, $email: String!, $password: String!, $steamID: String!) {
    createUser(firstName: $firstName, lastName: $lastName, email: $email, password: $password, steamID: $steamID) {
      token
      user {
        _id
      }
    }
  }
`;

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
      }
    }
  }
`;

export const REMOVE_USER = gql`
  mutation removeUser($user: ID) {
    deleteUser(user: $user) {
 
    }
  }
`;
