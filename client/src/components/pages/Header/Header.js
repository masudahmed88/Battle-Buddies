import React from 'react';

const Header = () => {
    return (
        <header className="jumbotron jumbotron-fluid">
            <h1 className="text-center">Battle Buddies! </h1>
            <h2 className="text-center"> Finding friends for the fight </h2>
            <div>
                {
                    loggedIn ? (
                        <div>
                            <button type="button" onClick={() => setLoggedIn(!loggedIn)}>
                                Log out
                            </button>
                        </div>
                    ) : (
                        <div>
                            <button type="button" onClick={() => setLoggedIn(!loggedIn)}>
                                Log in
                            </button>
                        </div>
                    )}
            </div>

        </header>
    );
}

export default Header;
