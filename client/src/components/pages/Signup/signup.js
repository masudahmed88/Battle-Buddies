import React from "react";

const Signup = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-12">
          <form className="mx-auto p-5 w-50">
            <div className="form-group">
              <label for="firstName">First Name: </label>
              <input type="string" className="form-control" id="firstName"></input>
            </div>
            <div className="form-group">
              <label for="lastName">Last Name: </label>
              <input type="string" className="form-control" id="lastName"></input>
            </div>
            <div className="form-group">
              <label for="email">Email: </label>
              <input type="email" className="form-control" id="email"></input>
            </div>
            <div className="form-group">
              <label for="steamId">Steam ID: </label>
              <input type="number" className="form-control" id="steamId"></input>
            </div>
            <div className="form-group">
              <label for="password">Password: </label>
              <input type="password" className="form-control" id="password"></input>
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
