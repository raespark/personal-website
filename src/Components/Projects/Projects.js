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
          <div className="col-sm-12 order-lg-last col-lg-8 project-image">
            <img className="projects-image" src={majopon} alt="Majopon screenshot"/>
          </div>
          <div className="col-sm-12 order-lg-first col-lg-4 projects-text">
            <h4 className="project-title">Majopon (Pictured):</h4>
            <p className="project-description">
            A pong-like game made for the <Link url="https://itch.io/jam/makecutepong" text="Femicom make cute pong game jam."/>
            Made in the <Link url="https://godotengine.org/" text="Godot engine"/> over the course of about 2 weeks, 
            as a completely independent project. The rules of the game is similar to pong, 
            if the ball (or in this case magic spell) gets past you, the other player gets a point. Player with the most points wins. 
            However, in this game you control the spawning of "the ball" by casting as many spells as you want!
            Each spell you cast is color coded to match your character, 
            and if two opposing spells collide they cancel each other out.
            Grab a friend (or foe), pick a witch, and get spell casting!
            </p>
            <h5>links:</h5>
            <div className="link-list">
              <li><Link url="https://raespark.itch.io/majopon" text="Download"/></li>
              <li><Link url="https://github.com/raespark/Majopon" text="Source"/></li>
            </div>
          </div>
        </div>
        </div>
    );
  }
}

export default Projects;
