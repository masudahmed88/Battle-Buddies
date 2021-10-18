import React from "react";
// import { Link } from "react-router-dom";

function Game(item) {
  const { image, name, description } = item;

  return (
    <div className="col-3">
      <button className="btn {id}">
        <div className="card">
          <img className="card-img-top" src={image} alt="Card image cap" />
          <div className="card-body">
            <h3 className="text-center">{name}</h3>
            <p className="card-text">{description}</p>
          </div>
        </div>
      </button>
    </div>
  );
}

export default Game;
