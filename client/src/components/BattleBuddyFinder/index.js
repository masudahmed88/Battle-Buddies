import React from "react";
import { Link } from "react-router-dom";

function BattleBuddyFinder(item) {
  const { name } = item;

  return <button className="btn btn-primary">Find your Battle Buddy for {name}</button>;
}

export default BattleBuddyFinder;
