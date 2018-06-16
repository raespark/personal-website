import React, { Component } from 'react';
import SectionTitle from '../SectionTitle/SectionTitle';
import './Experience.css';

class Experience extends Component {

  render() {
    return (
      <div>
        <SectionTitle title="Experience" />
        <div className="row">
          <div className="col-xs-12 col-sm-6">
            <h3>Skills</h3>
            <div className="row">
              <div className="col-xs-12 col-md-4 experience-section">
                <h5>Languages</h5>
                <div className="skill-list">
                  <li>Javascript - Expert</li>
                  <li>Java - Intermediate</li>
                  <li>Python - Competent</li>
                  <li>C - Competent</li>
                  <li>C++ - Competent</li>
                  <li>SQL - Competent</li>
                </div>
              </div>
              <div className="col-xs-12 col-md-4 experience-section">
                <h5>Frameworks/Tools</h5>
                <div className="skill-list">
                  <li>React - Expert</li>
                  <li>Git - Expert</li>
                  <li>Redux- Competent</li>
                  <li>Node JS - Competent </li>
                  <li>Dropwizard - Competent</li>
                  <li>Maven - Competent</li>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xs-12 col-sm-4">
            <h3>Work Experience</h3>
            <div className="experience-section">
              <h5>HomeAway (2017 - Present)</h5>
              <h6>Full Stack Software Engineer.</h6>
              <p className="work-experience-description">
                Started by working on internal tools and applications for the company as a primarily Front End role,
                and currently work as a part of the Identity Team,
                helping to build applications to build trust within our marketplace, 
                working on both Front End and Back End.</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Experience;
