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
          title: 'MyGamesCollection',
          description: '[Work In Progress] A website to track a game collection across multiple platforms ' + 
          'to be able to search and view all the games that you own in one place, kind of like a digital game bookcase! ' + 
          'You can view game information, and take notes on the games in your collection. The front end is created using the React and Node frameworks, ' + 
          'and the back end is in Java with a SQLite DB.',
          image: Images.myGamesCollection,
          links: [
            {text: 'Front End Source', url: 'https://github.com/raespark/node-my-game-collection'},
            {text: 'Back End Source', url: 'https://github.com/raespark/my-games-collection-api'}
          ]
        },
        {
          title: 'Grow',
          description: 'An interactive experience made over the course of 4 days for the ExtraCredits Holiday 2018 Game Jam, ' + 
          'and was chosen to be featured on the ExtraCredits YouTube channel for interesting design.  ' + 
          'Levels are procedurely laid out adhering to specific rules to create an immersive and relaxing simulation of a walk in the forest.  ' + 
          'Made in the Godot engine.',
          image: Images.grow,
          links: [
            {text: 'Download', url: 'https://raespark.itch.io/grow'},
            {text: 'ExtraCredits Video', url: 'https://youtu.be/Gs8lQFh7Ghk'}
          ]
        },
        {
          title: 'Tilted',
          description: 'A puzzle platformer that challenges the player by having the world around them shift as they move. ' + 
          'Created for the very first ExtraCredits Game jam over a single weekend. Features one of the first songs I\'ve ever written!',
          image: Images.tilted,
          links: [
            {text: 'Play', url: 'https://raespark.itch.io/tilted'},
            {text: 'Source', url: 'https://github.com/raespark/Tilted'}
          ]
        },
        {
          title: 'Majopon',
          description: 'A 2-player pong-like game where the players create the "ball" using a magic spell and try to block their opponent\'s spells from getting past them into the "goal."  ' + 
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
          'using Node, React and lots of trial-and-error with CSS. This site uses icons from Icons8, ' + 
          'except for the icon of myself (featured in the about section) which was made by me, ' +  
          'and the custom font of my handwriting was created using Caligraphr',
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
            <div key={key}>
              <SubTitle title={project.title}/>
              <ParagraphImage text={project.description} image={project.image} links={project.links} inverse={(key%2 === 0)}/>
            </div>
          )})}
      </div>
    );
  }
}

export default Projects;