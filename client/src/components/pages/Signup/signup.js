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
    const userGames = await fetch();
    const userFriends = await fetch();

    const mutationResponse = await addUser({
      variables: {
        email: formState.email,
        password: formState.password,
        firstName: formState.firstName,
        lastName: formState.lastName,
        steamID:formState.steamID,
        games:userGames,
        friends:userFriends,
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
          <form className="mx-auto p-5 w-50">
            <div className="form-group">
              <label htmlFor="firstName">First Name: </label>
              <input type="string" className="form-control" id="firstName" onChange={handleChange}></input>
            </div>
            <div className="form-group">
              <label for="lastName">Last Name: </label>
              <input type="string" className="form-control" id="lastName" onChange={handleChange}></input>
            </div>
            <div className="form-group">
              <label htmlFor="email">Email: </label>
              <input type="email" className="form-control" id="email" onChange={handleChange}></input>
            </div>
            <div className="form-group">
              <label htmlFor="steamId">Steam ID: </label>
              <input type="number" className="form-control" id="steamId" onChange={handleChange}></input>
            </div>
            <div className="form-group">
              <label htmlFor="password">Password: </label>
              <input type="password" className="form-control" id="password" onChange={handleChange}></input>
            </div>
            <button type="button" className="btn btn-success mt-3" type="submit">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Signup;
