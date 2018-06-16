import React, { Component } from 'react';
import SectionTitle from '../SectionTitle/SectionTitle';
import majopon from '../../Assets/majopon.gif';
import Link from '../Link/Link';
import './Projects.css';

class Projects extends Component {

  render() {
    return (
        <div>
        <SectionTitle title="Projects"/>
        <div className="row">
          <div className="col-xs-12 projects-image-div">
            <img className="projects-image" src={majopon} alt="Majopon screenshot"/>
          </div>
          <div className="col-sm-12 col-lg-6 projects-text">
            <h4 className="project-title">Majopon:</h4>
            <p className="project-description">
            A pong-like game made for the <Link url="https://itch.io/jam/makecutepong" content="Femicom make cute pong game jam."/>
            Made in the <Link url="https://godotengine.org/" content="Godot engine"/> over the course of about 2 weeks, 
            as a completely independent project. The rules of the game is similar to pong, 
            if the ball (or in this case magic spell) gets past you, the other player gets a point. Player with the most points wins. 
            However, in this game you control the spawning of "the ball" by casting as many spells as you want!
            Each spell you cast is color coded to match your character, 
            and if two opposing spells collide they cancel each other out.
            Grab a friend (or foe), pick a witch, and get spell casting!
            </p>
            <h5>links:</h5>
            <div className="link-list">
              <li><Link url="https://raespark.itch.io/majopon" content="Download"/></li>
              <li><Link url="https://github.com/raespark/Majopon" content="Source"/></li>
            </div>
          </div>
          <div className="col-sm-12 col-lg-6 projects-text">
            <h4 className="project-title">Personal Website:</h4>
            <p className="project-description">
            The site you're currently using! Made in react and node, using Bootstrap for some styling and components.
            </p>
            <h5>links:</h5>
            <div className="link-list">
              <li><Link url="https://github.com/raespark/personal-website" content="Source"/></li>
            </div>
          </div>
        </div>
        </div>
    );
  }
}

export default Projects;
