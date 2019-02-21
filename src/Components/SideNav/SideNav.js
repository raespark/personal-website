import React, { Component } from 'react';
import NavItem from './NavItem/NavItem';
import Images from '../../utils/Images';
import './SideNav.css'

class SideNav extends Component {
  render() {
    return (
      <div className="side-nav">
        <div className="side-nav-body">
            <div className="side-nav-photo">
              <img className="photo" src={Images.me}/>
            </div>
            <div className="side-nav-header">
              <div className="side-nav-title">
                <h1>{'Rachael Metcalf'}</h1>
              </div>
              <div className="side-nav-subtitle">
                <h4>{'Software Engineer - UI'}</h4>
              </div>
            </div>
            <hr/>
            <div className="side-nav-links">
              <NavItem text='About'/>
              <NavItem text='Experience'/>
              <NavItem text='Projects'/>
            </div>
        </div>
        <div className = "side-nav-contact">
            <img className="contact contact-email" src={Images.email}/>
            <a target="_blank" rel="nofollow noopener noreferrer" href="https://github.com/raespark">
            <img className="contact contact-github" src={Images.github}/>
            </a>
            <a target="_blank" rel="nofollow noopener noreferrer" href="https://www.linkedin.com/in/rachael-metcalf-7b73248a/">
              <img className="contact contact-linkedin" src={Images.linkedin}/>
            </a>
        </div>
      </div>
    );
  }
}

export default SideNav;
