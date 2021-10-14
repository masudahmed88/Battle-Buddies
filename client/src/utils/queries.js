import { gql } from "@apollo/client";

export const QUERY_GAMES = gql`
{
  query myGames($user: _ID) {
    myGames(userId: $user) {
        [Game]
      }
    }
  }
`;

export const QUERY_FRIENDS = gql`
  {
    query myFriends($user: _ID) {
        myFriends(userId: $user){
        friends  
      }
    }
  }
`;

export const QUERY_CATEGORIES = gql`
  {
    categories {
      _id
      name
    }
  }
`;

export const QUERY_USER = gql`
  {
    user {
      firstName
      lastName
      email
      steamID
      isPremium
      }
    }
  }
`;
