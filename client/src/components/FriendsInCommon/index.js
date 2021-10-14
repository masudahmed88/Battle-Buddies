import React from "react";
import { Link } from "react-router-dom";

function FriendsInCommon(item) {
  const { name, image, steamId } = item;

  return (
    <li className="list-group-item">
      {image}
      {name}
      {steamId}
    </li>
  );
}

export default FriendsInCommon;
