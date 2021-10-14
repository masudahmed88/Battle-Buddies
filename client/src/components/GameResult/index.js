import React from "react";
import { Link } from "react-router-dom";

function GameResult(item) {
  const { name, image } = item;

  return (
    <div class="card ml-5  mt-5 p-3 w-25">
      <img class="card-img-top" src={image} alt="Card image cap" />
      <div class="card-body">
        <h3 class="card-text text-center"> {name}</h3>
      </div>
    </div>
  );
}

export default GameResult;
