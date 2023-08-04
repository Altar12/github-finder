import React from 'react';
import {Link} from 'react-router-dom';

const Navbar = () => {
    
    return (
        <div className="navbar">
            <span className="fa fa-github logo"></span>
            <span>Github Finder</span>
            <ul>
                <li>
                    <Link to="/" className="navbar-link">Home</Link>
                </li>
                <li>
                    <Link to="/about" className="navbar-link">About</Link>
                </li>
            </ul>
        </div>
    );
};

export default Navbar;