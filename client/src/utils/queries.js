import { gql } from "@apollo/client";

export const QUERY_USER_GAMES = gql`
{
  games{
      name
      appid
      image
    }
  }     
`;

export const QUERY_USER_FRIENDS = gql`
  {
    friends{
        name
        steamID
        games{
          name
          appId
          image
        }         
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
      games {
        name
        appid
        image
      }
      friends {
        name
        steamID
        image
        games {
          name
          appid
          image
        }
      }
    }
  }
`;
