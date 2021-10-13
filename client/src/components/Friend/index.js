import React from "react";
import { Link } from "react-router-dom";

function Friend(item) {
  const { image, name, _id } = item;

  return (
    <a href="#" class="list-group-item list-group-item-action">
      Mike
    </a>
  );
}

export default Friend;
