import React from "react";
import GameProfile from "../../GameProfile";
import GameList from "../../GameList";
import FriendsInCommon from "../../FriendsInCommon";

const Profile = () => {
  return (
    <div className="container-fluid">
      <div className="row ">
        {/* Game Info */}
        <div className="col-4">
          <div>
            <h2 className="text-center">Game Info</h2>
          </div>
          <GameProfile />
        </div>
        {/* Friends Who Have This Game */}
        <div className="col-4">
          <div>
            <h2 className="text-center">Friends Who Have This Game </h2>
          </div>
          <ul className="list-group">
            <FriendsInCommon />
          </ul>
          <GameList />
        </div>
        <div className="col-4"></div>
      </div>
    </div>
  );
};

export default Profile;
