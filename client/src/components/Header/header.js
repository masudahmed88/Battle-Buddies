import React from "react";
import { Link } from "react-router-dom";

export default function Header({ loggedIn, setLoggedIn }) {
  return (
    <header className="jumbotron jumbotron-fluid">
      <h1 className="text-center">Battle Buddies! </h1>
      <h2 className="text-center"> Finding friends for the fight </h2>
      <div className="d-flex flex-row justify-content-end px-5">
        {loggedIn ? (
          <div>
            <Link to="/">
              <button
                type="button"
                className="btn btn-secondary"
                onClick={() => setLoggedIn(!loggedIn)}
              >
                {" "}
                Log out
              </button>
            </Link>
          </div>
        ) : (
          <div>
            <Link to="/login">
              <button
                type="button"
                className="btn btn-secondary"
                onClick={() => setLoggedIn(!loggedIn)}
              >
                Log in
              </button>
            </Link>
            <Link to="/signup">
              <button type="button" className="btn btn-secondary">
                Sign Up
              </button>
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}
