import { useReducer } from "react";
import {
  UPDATE_USER_FRIENDS,
  UPDATE_USER_GAMES,
  // UPDATE_CURRENT_CATEGORY
} from "./actions";

export const reducer = (state, action) => {
  switch (action.type) {
    case UPDATE_USER_FRIENDS:
      return {
        ...state,
        friends: [...action.friends],
      };

    case UPDATE_USER_GAMES:
      return {
        ...state,
        games: [...action.games],
      };

    // case UPDATE_CURRENT_CATEGORY:
    //   return {
    //     ...state,
    //     currentCategory: action.currentCategory
    //   }

    default:
      return state;
  }
};

export function useUserReducer(initialState) {
  return useReducer(reducer, initialState)
}