import React from "react";
import FriendProfile from "../../FriendProfile";
import GamesInCommon from "../../FriendsInCommon";
import GameFinder from "../../GameFinder";
import GameResult from "../../GameResult";

const Profile = () => {
  return (
    <div className="container-fluid">
      <div className="row ">
        {/* Game Info */}
        <div className="col-6">
          <div>
            <h2 className="text-center">Friend Info</h2>
          </div>
          <FriendProfile />
        </div>
        {/* Friends Who Have This Game */}
        <div className="col-3">
          <div>
            <h2 className="text-center">Games You Have In Common </h2>
          </div>
          <ul className="list-group">
            <GamesInCommon />
          </ul>
        </div>
        <div className="col-3">
          <div>
            <h2>Find Game You Have In Common</h2>
            </div>
          <GameFinder />
          <GameResult />
        </div>
        
      </div>
    </div>
  );
};

export default Profile;
