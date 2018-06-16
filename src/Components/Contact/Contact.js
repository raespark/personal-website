import React, { Component } from 'react';
import SectionTitle from '../SectionTitle/SectionTitle';
import Link from '../Link/Link';
import GitHubIcon from '../../Assets/github.svg';
import linkedinIcon from '../../Assets/linkedin.png';
import emailIcon from '../../Assets/email.png';
import './Contact.css';

class Contact extends Component {

  render() {
    return (
        <div>
        <SectionTitle title="Contact"/>
            <div className="row">
                <div className="col-xs-12 col-sm-4">
                    <Link 
                        url="https://github.com/raespark" 
                        content={
                            <div className="contact-image-div">
                                <img className="contact-image" src={GitHubIcon} alt="Github icon"/>
                                <h4>Github</h4>
                            </div>
                        }
                    />
                </div>
                <div className="col-xs-12 col-sm-4">
                    <Link 
                        url="https://www.linkedin.com/in/rachael-metcalf-7b73248a/" 
                        content={
                            <div className="contact-image-div">
                                <img className="contact-image" src={linkedinIcon} alt="LinkedIn icon"/>
                                <h4>LinkedIn</h4>
                            </div>
                        }
                    />
                </div>
                <div className="col-xs-12 col-sm-4">
                    <Link 
                        url="mailto:rachael.metcalf@utexas.edu" 
                        content={
                            <div className="contact-image-div">
                                <img className="contact-image" src={emailIcon} alt="Email icon"/>
                                <h4>Email</h4>
                            </div>
                        }
                    />
                </div>
            </div>
        </div>
    );
  }
}

export default Contact;
