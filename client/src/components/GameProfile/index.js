import React from "react";
import { Link } from "react-router-dom";
import Game from "../Game";

function GameProfile(item) {
  const { name, image, category, rating, dateReleased } = item;

  return (
    <div class="card ml-5  mt-5 p-3" style="width: 18rem;">
      <div class="card-header rounded-top">
        <h2 class="text-center">{name}</h2>
      </div>
      <img class="card-img-top" src={image} alt="Card image cap" />
      <div class="card-body">
        <p class="card-text text-center"> Game Category: {category}</p>
        <p class="card-text text-center">Game Rating: {rating}</p>
        <p class="card-text text-center">Release Date: {dateReleased}</p>
      </div>
    </div>
  );
}

export default GameProfile;
