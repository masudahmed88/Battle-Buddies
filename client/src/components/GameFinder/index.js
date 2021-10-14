import React from "react";
import { Link } from "react-router-dom";

function GameFinder(item) {
  const { name } = item;

  return (
    <div>
      <button className="btn btn-primary">Find a random game you and {name} have in common</button>
    </div>
  );
}

export default GameFinder;
