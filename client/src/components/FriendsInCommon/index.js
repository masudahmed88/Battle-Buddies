import React from "react";
import { Link } from "react-router-dom";

function FriendsInCommon(item) {
  const { name, image, steamId } = item;

  return (
    <li className="list-group-item">
      <img className="" src={image} alt="friends image" />
      <h3 className="text-center">{name}</h3>
      <p className="text-center">{steamId}</p>
    </li>
  );
}

export default FriendsInCommon;
