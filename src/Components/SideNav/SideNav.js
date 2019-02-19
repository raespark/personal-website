import React, { Component } from 'react';
import EmailIcon from '../../Assets/email.png';
import GithubIcon from '../../Assets/github.png';
import LinkedInIcon from '../../Assets/linkedin.png';
import Photo from '../../Assets/me.jpg';
import NavItem from './NavItem/NavItem';
import './SideNav.css'

class SideNav extends Component {
  render() {
    return (
      <div className="side-nav">
        <div className="side-nav-body">
            <div className="side-nav-photo">
              <img className="photo" src={Photo}/>
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
            <img className="contact contact-email" src={EmailIcon}/>
            <a target="_blank" rel="nofollow noopener noreferrer" href="https://github.com/raespark">
            <img className="contact contact-github" src={GithubIcon}/>
            </a>
            <a target="_blank" rel="nofollow noopener noreferrer" href="https://www.linkedin.com/in/rachael-metcalf-7b73248a/">
              <img className="contact contact-linkedin" src={LinkedInIcon}/>
            </a>
        </div>
      </div>
    );
  }
}

export default SideNav;
