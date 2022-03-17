import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {
    render() {

        if (window.localStorage.getItem('loggedUsername') === "admin")
        {
            return (
                <nav>
                <Link to="/">PourDecisions</Link>
                <div>
                <ul>
                    <li>
                    <li className="navbar-item">
                        <Link to="/drinks/tests">Test</Link>
                    </li>
                        <Link to="/">Home</Link>
                    </li>
                    <li className="navbar-item">
                        <Link to="/drinks/create">Drinks</Link>
                    </li>
                    <li className="navbar-item">
                        <Link to="/account/logout">Logout</Link>
                    </li>
                </ul>
                </div>
            </nav>
            );
        }

        if (window.localStorage.getItem('loggedUsername'))
        {
            return (
                <nav>
                <Link to="/">PourDecisions</Link>
                <div>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li className="navbar-item">
                        <Link to="/drinks/create">Drinks</Link>
                    </li>
                    <li className="navbar-item">
                        <Link to="/account/logout">Logout</Link>
                    </li>
                </ul>
                </div>
            </nav>
            );
        }

        else {
            return (
            <nav>
                <Link to="/">PourDecisions</Link>
                <div>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li className="navbar-item">
                        <Link to="/drinks/create">Drinks</Link>
                    </li>
                    <li className="navbar-item">
                        <Link to="/account/login">Login</Link>
                    </li>
                </ul>
                </div>
            </nav>
        );
        }

        
    }
}