import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navar-dark bg-dark navbar-expand-lg">
                <Link to="/">PourDecisions</Link>
                <div className="collapse navbar-collapse">
                <ul className="navbar-nav mr-auto">
                    <li className="navbar-item">
                        <Link to="/" className="nav-link">PourDecisions</Link>
                    </li>
                    <li className="navbar-item">
                        <Link to="/drinks" className="nav-link">Drinks</Link>
                    </li>
                </ul>
                </div>
            </nav>
        );
    }
}