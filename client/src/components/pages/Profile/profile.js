import React from "react";

const Profile = () => {
  return (
    <div className="container-fluid">
      <div className="row ">
        <div className="col-4">
          <div>
            <h2 className="text-center">My Friends</h2>
          </div>
          <div class="list-group">
            <a href="#" class="list-group-item list-group-item-action">
              Mike
            </a>
            <a href="#" class="list-group-item list-group-item-action">
              Masud
            </a>
            <a href="#" class="list-group-item list-group-item-action">
              Nick
            </a>
            <a href="#" class="list-group-item list-group-item-action">
              Adwait
            </a>
            <a href="#" class="list-group-item list-group-item-action">
              Kevin
            </a>
          </div>
        </div>
        <div className="col-8">
          <h2 className="text-center">My Games</h2>
          {/* First Row of Games */}
          <div className="row my-3">
            <div className="col-3">
              <div className="card">
                <img
                  className="card-img-top"
                  src={"https://media.giphy.com/media/y0NFayaBeiWEU/giphy.gif"}
                  alt="Card image cap"
                />
                <div className="card-body">
                  <h3 className="text-center">Title</h3>
                  <p className="card-text">
                    Some quick example text to build on the card title and make up the bulk of the
                    card's content.
                  </p>
                </div>
              </div>
            </div>
            {/* Game 2 */}
            <div className="col-3">
              <div className="card">
                <img
                  className="card-img-top"
                  src={"https://media.giphy.com/media/y0NFayaBeiWEU/giphy.gif"}
                  alt="Card image cap"
                />
                <div className="card-body">
                  <h3 className="text-center">Title</h3>
                  <p className="card-text">
                    Some quick example text to build on the card title and make up the bulk of the
                    card's content.
                  </p>
                </div>
              </div>
            </div>
            {/* Game 3 */}
            <div className="col-3">
              <div className="card">
                <img
                  className="card-img-top"
                  src={"https://media.giphy.com/media/y0NFayaBeiWEU/giphy.gif"}
                  alt="Card image cap"
                />
                <div className="card-body">
                  <h3 className="text-center">Title</h3>
                  <p className="card-text">
                    Some quick example text to build on the card title and make up the bulk of the
                    card's content.
                  </p>
                </div>
              </div>
            </div>
            {/* Game 4 */}
            <div className="col-3">
              <div className="card">
                <img
                  className="card-img-top"
                  src={"https://media.giphy.com/media/y0NFayaBeiWEU/giphy.gif"}
                  alt="Card image cap"
                />
                <div className="card-body">
                  <h3 className="text-center">Title</h3>
                  <p className="card-text">
                    Some quick example text to build on the card title and make up the bulk of the
                    card's content.
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* Second Row of Games */}
          <div className="row my-3">
            <div className="col-3">
              <div className="card">
                <img
                  className="card-img-top"
                  src={"https://media.giphy.com/media/y0NFayaBeiWEU/giphy.gif"}
                  alt="Card image cap"
                />
                <div className="card-body">
                  <h3 className="text-center">Title</h3>
                  <p className="card-text">
                    Some quick example text to build on the card title and make up the bulk of the
                    card's content.
                  </p>
                </div>
              </div>
            </div>
            {/* Game 2 */}
            <div className="col-3">
              <div className="card">
                <img
                  className="card-img-top"
                  src={"https://media.giphy.com/media/y0NFayaBeiWEU/giphy.gif"}
                  alt="Card image cap"
                />
                <div className="card-body">
                  <h3 className="text-center">Title</h3>
                  <p className="card-text">
                    Some quick example text to build on the card title and make up the bulk of the
                    card's content.
                  </p>
                </div>
              </div>
            </div>
            {/* Game 3 */}
            <div className="col-3">
              <div className="card">
                <img
                  className="card-img-top"
                  src={"https://media.giphy.com/media/y0NFayaBeiWEU/giphy.gif"}
                  alt="Card image cap"
                />
                <div className="card-body">
                  <h3 className="text-center">Title</h3>
                  <p className="card-text">
                    Some quick example text to build on the card title and make up the bulk of the
                    card's content.
                  </p>
                </div>
              </div>
            </div>
            {/* Game 4 */}
            <div className="col-3">
              <div className="card">
                <img
                  className="card-img-top"
                  src={"https://media.giphy.com/media/y0NFayaBeiWEU/giphy.gif"}
                  alt="Card image cap"
                />
                <div className="card-body">
                  <h3 className="text-center">Title</h3>
                  <p className="card-text">
                    Some quick example text to build on the card title and make up the bulk of the
                    card's content.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
