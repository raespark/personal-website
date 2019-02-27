import React, { Component } from 'react';
import Images from '../../utils/Images';
import './ContactInfo.css'

class ContactInfo extends Component {
  render() {
    return (
        <div className = "contact-info">
            <a href="mailto:rmetcalf.codes@gmail.com">
              <img className="contact contact-email" src={Images.email.image} alt={Images.email.text}/>
            </a>
            <a target="_blank" rel="nofollow noopener noreferrer" href="https://github.com/raespark">
            <img className="contact contact-github" src={Images.github.image} alt={Images.github.text}/>
            </a>
            <a target="_blank" rel="nofollow noopener noreferrer" href="https://www.linkedin.com/in/rachael-metcalf-7b73248a/">
              <img className="contact contact-linkedin" src={Images.linkedin.image} alt={Images.linkedin.text}/>
            </a>
        </div>
    );
  }
}

export default ContactInfo;
