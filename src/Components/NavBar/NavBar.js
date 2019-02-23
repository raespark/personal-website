import React, { Component } from 'react';
import NavItem from '../NavItem/NavItem';
import Images from '../../utils/Images';
import './NavBar.css'

class NavBar extends Component {
  render() {
    return (
      <div className="nav-bar">
        <div className="nav-bar-links">
          <NavItem text='about'/>
          <NavItem text='skills'/>
          <NavItem text='projects'/>
        </div>
      </div>
    );
  }
}

export default NavBar;
