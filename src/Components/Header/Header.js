import React, { Component } from 'react';
import './Header.css';

class Header extends Component {

  render() {
    return (
        <header className="site-header">
          <h1 className="site-title shadowed-text">Rachael Metcalf</h1>
          <h3 className="shadowed-text">Software Developer</h3>
          <h4 className="shadowed-text">Full Stack</h4>
        </header>
    );
  }
}

export default Header;
