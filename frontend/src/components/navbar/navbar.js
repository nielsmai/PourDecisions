import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

export default class Navbar extends Component {
    render() {

        if (window.localStorage.getItem('loggedUsername') === "admin")
        {
            return (
                <nav>
                <div>
                <ul>
                    <li className="navbar-item-l">
                        <Link to="/">PourDecisions</Link>
                    </li>
                    <li className="navbar-item-r">
                        <Link to="/account/logout">Logout</Link>
                    </li>
                    <li className="navbar-item-c">
                        <Link to="/drinks/tests">Test</Link>
                    </li>
                    <li className="navbar-item-c">
                        <Link to="/drinks/create">Drinks</Link>
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
                <div>
                <ul className="navbar">
                    <li className="navbar-item-l">
                        <Link to="/">PourDecisions</Link>
                    </li>
                    <li className="navbar-item-r">
                        <Link to="/account/logout">Logout</Link>
                    </li>
                    <li className="navbar-item-c">
                        <Link to="/account/drinks">My Drinks</Link>
                    </li>
                    <li className="navbar-item-c">
                        <Link to="/drinks/create">Create</Link>
                    </li>
                    <li className="navbar-item-c">
                        <Link to="/drinks/">Search</Link>
                    </li>
                    <li className="navbar-item-c">
                        <Link to="/drinks/create">Drinks</Link>
                    </li>
                    <li className="navbar-item-c">
                        <Link to="/drinks/">Mix</Link>
                    </li>
                </ul>
                </div>
            </nav>
            );
        }

        else {
            return (
            <nav>
                <div>
                <ul className="navbar">
                    <li className="navbar-item-l">
                        <Link to="/">PourDecisions</Link>
                    </li>
                    <li className="navbar-item-r">
                        <Link to="/account/login">Login</Link>

                    </li>
                    <li className="navbar-item-c">
                        <Link to="/drinks/">Search</Link>
                    </li>
                    {/*CHANGE TO VIEW ALL DRINKS*/}
                    <li className="navbar-item-c">
                        <Link to="/drinks/create">Drinks</Link>
                    </li>
                    <li className="navbar-item-c">
                        <Link to="/drinks/">Mix</Link>
                    </li>
                </ul>
                <br></br>
                </div>
            </nav>
        );
        }

        
    }
}
