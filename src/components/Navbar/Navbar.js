import React from 'react';
import './Navbar.css';

export default class Navigation extends React.Component {
    scrollToAnchor(id) {
       let section = document.getElementById(id);
        section.scrollIntoView({behavior: "smooth", block: "start"});
    }

    render() {
        return (
            <div className="nav">
                <nav className="navbar navbar-expand-sm navbar-dark navbar-fixed">
                    <button className="navbar-toggler float-xs-right" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            {this.props.links.map((link) => (   
                                <li className="nav-item">
                                    <a className="nav-link" onClick={() => {this.scrollToAnchor(link)}}>{link}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </nav>
            </div>
        );
    }
}