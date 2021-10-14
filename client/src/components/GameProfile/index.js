import React from "react";
import { Link } from "react-router-dom";

function GameProfile(item) {
  const { name, image, category, rating, dateReleased } = item;

  return (
    <div className="card ml-5  mt-5 p-3">
      <div className="card-header rounded-top">
        <h2 className="text-center">{name}</h2>
      </div>
      <img className="card-img-top" src={image} alt="Card image cap" />
      <div className="card-body">
        <p className="card-text text-center"> Game Category: {category}</p>
        <p className="card-text text-center">Game Rating: {rating}</p>
        <p className="card-text text-center">Release Date: {dateReleased}</p>
      </div>
    </div>
  );
}

export default GameProfile;
