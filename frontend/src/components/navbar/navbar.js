import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {
    render() {
        return (
            <nav>
                <Link to="/">PourDecisions</Link>
                <div>
                <ul>
                    <li>
                        <Link to="/">PourDecisions</Link>
                    </li>
                    <li className="navbar-item">
                        <Link to="/drinks">Drinks</Link>
                    </li>
                    <li>
                        <Link to="/loginaccount">Log In</Link>
                    </li>
                </ul>
                </div>
            </nav>
        );
    }
}