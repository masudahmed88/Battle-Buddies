import React, { useState } from "react";
// import { Link } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { LOGIN_USER } from "../../../utils/mutations";

import Auth from "../../../utils/auth";

function Login(props){
  const [formState, setFormState] = useState({ email: '', password: ''});
  const [login, { error }] = useMutation(LOGIN_USER);

  // update state based on form input changes
 const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const mutationResponse = await login({
        variables: { email: formState.email, password: formState.password },
      });
      const token = mutationResponse.data.login.token;
      Auth.login(token);
    } catch (e) {
      console.log(e);
    }
  };
    

 const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  // submit form
  
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-12">
            <form className="mx-auto p-5 w-50" onSubmit={handleFormSubmit}>
              <div className="form-group">
                <label htmlFor="email">Email: </label>
                <input
                  className="form-control"
                  placeholder="Your email"
                  name="email"
                  type="email"
                  id="email"
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password </label>
                <input
                  className="form-control"
                  placeholder="******"
                  name="password"
                  type="password"
                  id="password"
                  onChange={handleChange}
                />
              </div>
              {error ? (
                  <div>
                    <p className="error-text">The provided credentials are incorrect</p>
                  </div>
                ) : null}
              <button className="btn btn-success mt-3" type="submit">Submit</button>
            </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
