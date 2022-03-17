import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {
    render() {
        return (
            <nav>
                <div>
                <ul className="navbar">
                    <li className="navbar-item-l">
                        <Link to="/">PourDecisions</Link>
                    </li>
                    <li className="navbar-item-r">
                        <Link to="/account/login">Log In</Link>
                    </li>
                    <li className="navbar-item-c">
                        <Link to="/drinks/create">Create</Link>
                    </li>
                    <li className="navbar-item-c">
                        <Link to="/drinks/">Search</Link>
                    </li>
                    <li className="navbar-item-c">
                        <Link to="/drinks/">Drinks</Link>
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