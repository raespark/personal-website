import React, { Component } from 'react';
import Images from '../../utils/Images';
import './ContactInfo.css'

class ContactInfo extends Component {
  render() {
    return (
        <div className = "contact-info">
            <img className="contact contact-email" src={Images.email}/>
            <a target="_blank" rel="nofollow noopener noreferrer" href="https://github.com/raespark">
            <img className="contact contact-github" src={Images.github}/>
            </a>
            <a target="_blank" rel="nofollow noopener noreferrer" href="https://www.linkedin.com/in/rachael-metcalf-7b73248a/">
              <img className="contact contact-linkedin" src={Images.linkedin}/>
            </a>
        </div>
    );
  }
}

export default ContactInfo;
