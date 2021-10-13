import React from "react";
import FriendList from "../../FriendsList";
import GameList from "../../GameList";

const Profile = () => {
  return (
    <div className="container-fluid">
      <div className="row ">
        <div className="col-4">
          <div>
            <h2 className="text-center">My Friends</h2>
          </div>
          <div class="list-group">
            <FriendList />
          </div>
        </div>
        <div className="col-8">
          <h2 className="text-center">My Games</h2>
          {/* First Row of Games */}
          <div className="row my-3">
          <GameList />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
