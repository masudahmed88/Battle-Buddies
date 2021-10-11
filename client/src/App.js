import React, { useState } from 'react';
import Header from './components/pages/Header/Header';

function App() {
  // Here we declare a state boolean variable "loggedIn" and a function to update it.
  const [loggedIn, setLoggedIn] = useState(false);

  // We return the Welcome component and pass loggedIn and setLoggedIn as props.
  return <Header loggedIn={loggedIn} setLoggedIn={setLoggedIn} />;
}

export default App;
