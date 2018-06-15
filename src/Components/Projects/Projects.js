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
            <h4 className="project-title">Majopon (Pictured):</h4>
            <p className="project-description">
            A pong-like game made for the <a href="https://itch.io/jam/makecutepong" target="_blank" rel="noopener noreferrer">Femicom make cute pong game jam. </a>
            Made in the <a href="https://godotengine.org/" target="_blank" rel="noopener noreferrer">Godot engine</a> over the course of about 2 weeks, 
            as a completely independent project. The rules of the game is similar to pong, 
            if the ball (or in this case magic spell) gets past you, the other player gets a point. Player with the most points wins. 
            However, in this game you control the spawning of "the ball" by casting as many spells as you want!
            Each spell you cast is color coded to match your character, 
            and if two opposing spells collide they cancel each other out.
            Grab a friend (or foe), pick a witch, and get spell casting!
            </p>
            <h5>links:</h5>
            <div className="link-list">
              <li><a href="https://raespark.itch.io/majopon" target="_blank" rel="noopener noreferrer">Download</a></li>
              <li><a href="https://github.com/raespark/Majopon" target="_blank" rel="noopener noreferrer">Source</a></li>
            </div>
          </div>
        </div>
        </div>
    );
  }
}

export default Projects;
