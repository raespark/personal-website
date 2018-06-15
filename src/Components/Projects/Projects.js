import React, { Component } from 'react';
import SectionTitle from '../SectionTitle/SectionTitle';
import majopon from '../../Assets/majopon.gif';
import './Projects.css';

class Projects extends Component {

  render() {
    return (
        <div>
        <SectionTitle title="Projects"/>
        <div className="row">
          <div className="col-sm-12 order-md-last col-md-6 project-image">
            <img className="projects-image" src={majopon}/>
          </div>
          <div className="col-sm-12 order-md-first col-md-6 projects-text">
            <h4 className="project-title">Majopon (Pictured)</h4>
            <p className="project-description">
            A pong-like game made for the <a href="https://itch.io/jam/makecutepong">Femicom make cute pong game jam.</a> 
            Made in the <a href="https://godotengine.org/">Godot engine</a> over the course of about 2 weeks, 
            as a completely independent project.
            </p>
            <h5>links:</h5>
            <div className="link-list">
              <li><a href="">Download</a></li>
              <li><a href="">Source</a></li>
            </div>
          </div>
        </div>
        </div>
    );
  }
}

export default Projects;
