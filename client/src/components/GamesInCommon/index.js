import React from "react";
import { Link } from "react-router-dom";

function GamesInCommon(item) {
  const { name, image } = item;

  return (
    <li className="list-group-item">
      <img className="" src={image} alt="friends image" />
      <h3 className="text-center">{name}</h3>
    </li>
  );
}

export default GamesInCommon;
