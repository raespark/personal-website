import React from 'react';
import './Navbar.css';

export default class Navigation extends React.Component {
    render() {
        return (
            <div className="nav">
                <nav className="navbar navbar-expand-sm navbar-light bg-light navbar-fixed">
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            {this.props.links.map((link) => (   
                                <li className="nav-item">
                                    <a className="nav-link" href={link.url}>{link.text}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </nav>
            </div>
        );
    }
}