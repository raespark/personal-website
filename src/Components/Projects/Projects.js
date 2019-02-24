import React, { Component } from 'react';
import SectionTitle from '../SectionTitle/SectionTitle';
import Images from '../../utils/Images';
import './Projects.css';
import SubTitle from '../SubTitle/SubTitle';
import ParagraphImage from '../ParagraphImage/ParagraphImage';

class Projects extends Component {
  render() {
    let projects = [
        {
          title: 'Grow',
          description: 'An interactive experience made over the course of 4 days for the ExtraCredits Holiday 2018 Game Jam, ' + 
          'and was chosen to be featured on the ExtraCredits YouTube channel for interesting design.' + 
          'Levels are procedurely laid out adheering to specific rules to creat an immersive and relaxing simulation of a walk in the forest.  ' + 
          'Made in the Godot engine',
          image: Images.grow,
          links: [
            {text: 'Download', url: 'https://raespark.itch.io/grow'},
            {text: 'ExtraCredits Video', url: 'https://youtu.be/Gs8lQFh7Ghk'}
          ]
        },
        {
          title: 'Tilted',
          description: 'A puzzle platformer that challenges the player by having the world around them shift as they move. ' + 
          'Created for the very first ExtraCredits Game jam, over a weekend. Features one of the first songs I\'ve ever written!',
          image: Images.tilted,
          links: [
            {text: 'Play', url: 'https://raespark.itch.io/tilted'},
            {text: 'Source', url: 'https://github.com/raespark/Tilted'}
          ]
        },
        {
          title: 'Majopon',
          description: 'A 2 player pong-like game where the players create the \"ball\" using a magic spell and try to block their opponent\'s spells from getting past them into the \"goal\"' + 
          'Created over the course of about 2 weeks off and on between work for the 4th FEMICOM game jam in the Godot engine. Features some of my first animations, and my first experience with the Godot game engine.' ,
          image: Images.majopon,
          links: [
            {text: 'Download', url: 'https://raespark.itch.io/majopon'},
            {text: 'Source', url: 'https://github.com/raespark/Majopon'}
          ]
        },
        {
          title: 'Personal Website',
          description: 'This very site you\'re using! All the styling and components are written and created by me, ' + 
          'using Node, React and lots of trial-and-error with CSS. Created over the course of about a week, and using icons from ' + 
          'Icons8, except for the icon of myself which was made by me. The custom font featured was created using Caligraphr, and is a font of my handwriting.',
          image: Images.here,
          links: [
            {text: 'Source', url: 'https://github.com/raespark/personal-website'}
          ]
        }
    ];
    return (
      <div className="projects">
        <SectionTitle title="projects"/> 
        {projects.map((project, key) => {
          return (
            <div>
              <SubTitle title={project.title}/>
              <ParagraphImage text={project.description} image={project.image} links={project.links} inverse={(key%2 === 0)}/>
            </div>
          )})}
      </div>
    );
  }
}

export default Projects;