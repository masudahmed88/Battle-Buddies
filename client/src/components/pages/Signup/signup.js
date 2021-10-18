import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import Auth from '../../../utils/auth';
import { ADD_USER } from '../../../utils/mutations';


function Signup(props) {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [addUser] = useMutation(ADD_USER);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
  
      let userGamesUrl =`http://api.steampowered.com/IPlayerService/GetOwnedGames/v0001/?key=4C44FBDE2F2CC241516505D6E7C98887&steamid=76561197964056658`;
      const userGames = await fetch(userGamesUrl);
      const userGamesData = await userGames.json();
      const gameIDS = [];
    
      for( var i=0; i<userGamesData.response.games.length; i++){
        gameIDS.push(userGamesData.response.games[i].appid);
      };
      // let userFriendsUrl =`http://api.steampowered.com/ISteamUser/GetFriendList/v0001/?key=4C44FBDE2F2CC241516505D6E7C98887&steamid=76561197964056658&relationship=friend`;
      // const userFriends = await fetch(userFriendsUrl);
      // const userFriendsData = await userFriends.json();
      console.log(gameIDS);
      const mutationResponse = await addUser({
        variables: {
          email: formState.email,
          password: formState.password,
          firstName: formState.firstName,
          lastName: formState.lastName,
          steamID:formState.steamID,
           games:gameIDS,
          // friends:userFriendsData
        },
      });
    const token = mutationResponse.data.addUser.token;
    Auth.login(token);
    
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-12">
          <form className="mx-auto p-5 w-50" onSubmit={handleFormSubmit}>
            <div className="form-group">
              <label htmlFor="firstName">First Name: </label>
              <input type="firstName" className="form-control" id="firstName" name='firstName' onChange={handleChange}></input>
            </div>
            <div className="form-group">
              <label htmlFor="lastName">Last Name: </label>
              <input type="lastName" className="form-control" id="lastName" name="lastName" onChange={handleChange}></input>
            </div>
            <div className="form-group">
              <label htmlFor="email">Email: </label>
              <input type="email" className="form-control" id="email" name="email" onChange={handleChange}></input>
            </div>
            <div className="form-group">
              <label htmlFor="steamId">Steam ID: </label>
              <input type="steamID" className="form-control" id="steamID" name="steamID" onChange={handleChange}></input>
            </div>
            <div className="form-group">
              <label htmlFor="password">Password: </label>
              <input type="password" className="form-control" id="password" name="password" onChange={handleChange}></input>
            </div>
            {/* {error ? (
                  <div>
                    <p className="error-text">The Sign Up was Unsuccessful</p>
                  </div>
                ) : null} */}
            <button className="btn btn-success mt-3" type="submit">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Signup;
