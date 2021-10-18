import React from "react";
// import { Link } from "react-router-dom";

function BattleBuddy(item) {
  const { name, image, id } = item;

  return (
    <div class="card ml-5  mt-5 p-3 w-25">
      <img class="card-img-top" src={image} alt="Card image cap" />
      <div class="card-body">
        <h3 class="card-text text-center"> {name}</h3>
        <p class="card-text text-center">{id}</p>
      </div>
    </div>
  );
}

export default BattleBuddy;
np