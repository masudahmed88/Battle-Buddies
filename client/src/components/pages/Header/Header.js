import React from 'react';
import Navigation from '../Navigation/Navigation';

const Header = () => {
    return (
        <header className="jumbotron jumbotron-fluid">
            <h1 className="text-center">Battle Buddies! </h1>
            <h2 className="text-center"> Finding friends for the fight </h2>
            <Navigation /> 
        </header>
    );
}

export default Header;
