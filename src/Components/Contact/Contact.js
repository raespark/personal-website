import React, { Component } from 'react';
import SectionTitle from '../SectionTitle/SectionTitle';
import GitHubIcon from '../../Assets/github.svg';
import './Contact.css';

class Contact extends Component {

  render() {
    return (
        <div>
        <SectionTitle title="Contact"/>
            <div className="row">
                <div className="col-xs-12 col-sm-4">
                    <a href="https://github.com/raespark" target="_blank" rel="noopener noreferrer">
                        <img className="contact-image" src={GitHubIcon} alt="Github icon"/>
                        <h4>Github</h4>
                    </a>
                </div>
            </div>
        </div>
    );
  }
}

export default Contact;
