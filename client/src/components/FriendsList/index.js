import React, { useEffect } from "react";
import { useQuery } from "@apollo/client";

import friend from "../friend/index";
import { useStoreContext } from "../../utils/GlobalState";
import { UPDATE_PRODUCTS } from "../../utils/actions";
import { QUERY_PRODUCTS } from "../../utils/queries";
// import spinner from '../../assets/spinner.gif';

function FriendsList() {
  const [state, dispatch] = useStoreContext();

  const { loading, data } = useQuery(QUERY_FRIEND);

  useEffect(() => {
    if (data) {
      dispatch({
        type: UPDATE_FRIEND,
        friend: data.friend,
      });
    }
  }, [data, dispatch]);

  return (
    <div>
      {state.friend.length ? (
        <div className="flex-row">
          {friends.map((friend) => (
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
      {/* {loading ? <img src={spinner} alt="loading" /> : null} */}
    </div>
  );
}

export default friendList;
