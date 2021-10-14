import React from "react";
import GameProfile from "../../GameProfile";
import FriendsInCommon from "../../FriendsInCommon";
import BattleBuddyFinder from "../../BattleBuddyFinder";

const Profile = () => {
  return (
    <div className="container-fluid">
      <div className="row ">
        {/* Game Info */}
        <div className="col-6">
          <div>
            <h2 className="text-center">Game Info</h2>
          </div>
          <GameProfile />
        </div>
        {/* Friends Who Have This Game */}
        <div className="col-3">
          <div>
            <h2 className="text-center">Friends Who Have This Game </h2>
          </div>
          <ul className="list-group">
            <FriendsInCommon />
          </ul>
        </div>
        <div className="col-3">
          <BattleBuddyFinder />
        </div>
      </div>
    </div>
  );
};

export default Profile;
