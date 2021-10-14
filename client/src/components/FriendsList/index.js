import React, { useEffect } from "react";
import { useQuery } from "@apollo/client";

import Friend from "../Friend";
import { useStoreContext } from "../../utils/GlobalState";
import { UPDATE_USER_FRIENDS } from "../../utils/actions";
import { QUERY_USER_FRIENDS } from "../../utils/queries";
import spinner from '../../assets/spinner.gif';

function FriendsList() {
  const [state, dispatch] = useStoreContext();

  const { loading, data } = useQuery(QUERY_USER_FRIENDS);

  useEffect(() => {
    if (data) {
      dispatch({
        type: UPDATE_USER_FRIENDS,
        friend: data.friend,
      });
    }
  }, [data, dispatch]);

  return (
    <div>
      {state.FriendsList.length ? (
        <div className="flex-row">
          {FriendsList.map((friend) => (
            <Friend
              key={friend._id}
              _id={friend._id}
              image={friend.image}
              name={friend.name}
            />
          ))}
        </div>
      ) : (
        <h3>You don't have any friends yet!</h3>
      )}
      {loading ? <img src={spinner} alt="loading" /> : null}
    </div>
  );
}

export default FriendsList;
