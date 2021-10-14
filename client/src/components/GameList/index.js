import React, { useEffect } from "react";
import { useQuery } from "@apollo/client";

import Game from "../Game/index";
import { useStoreContext } from "../../utils/GlobalState";
import { UPDATE_USER_GAMES } from "../../utils/actions";
import { QUERY_USER_GAMES} from "../../utils/queries";
import spinner from '../../assets/spinner.gif';

function GameList() {
  const [state, dispatch] = useStoreContext();

  const { loading, data } = useQuery(QUERY_USER_GAMES);

  useEffect(() => {
    if (data) {
      dispatch({
        type: UPDATE_USER_GAMES,
        games: data.game,
      });
    }
  }, [data, dispatch]);

  return (
    <div className="my-2">
      <h2>Games:</h2>
      {state.GameList.length ? (
        <div className="flex-row">
          {GameList.map((game) => (
            <Game
              key={game._id}
              _id={game._id}
              image={game.image}
              name={game.name}
            />
          ))}
        </div>
      ) : (
        <h3>You don't have any games yet!</h3>
      )}
      {loading ? <img src={spinner} alt="loading" /> : null}
    </div>
  );
}

export default GameList;
