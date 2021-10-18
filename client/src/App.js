import React, { useState } from "react";
import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { UserProvider } from './utils/GlobalState';

import Home from "./components/pages/Home/home";
import Profile from "./components/pages/Profile/profile";
import Signup from "./components/pages/Signup/signup";
import Login from "./components/pages/Login/login";
import Header from "./components/Header/header";
import Footer from "./components/Footer/footer";

const httpLink = createHttpLink({
  uri: "/graphql",
});

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem("id_token");
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  return (
    <ApolloProvider client={client}>
      <Router>
        <div>
        <UserProvider>
        <div className="flex-column justify-flex-start min-100-vh">
          <Header loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
          <div className="container">
            <Switch>
              <Route exact path="/" component = {Home}/>
          
              <Route exact path="/login" component={Login}/>
              
              <Route exact path="/signup" component ={Signup} />
          
              <Route exact path="/me" component = {Profile} />
          
              <Route exact path="/profiles/:profileId" component= {Profile} />
            
            </Switch>
          </div>
          <Footer />
        </div>
        </UserProvider>
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
