import React from 'react';
import logo from '../logo.svg';

const Header = function() {
    return(
        <div>
            <nav className="navbar navbar-default">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <img src={logo} className="App-logo" alt="logo" />
                        <h1 className="navbar-brand">React Weather</h1>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Header;

