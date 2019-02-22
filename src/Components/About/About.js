import React, { Component } from 'react';
import SectionTitle from '../SectionTitle/SectionTitle';
import Images from '../../utils/Images';
import ParagraphImage from '../ParagraphImage/ParagraphImage';
import './About.css';

class About extends Component {
  render() {
    let aboutText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ac fringilla lectus, eu elementum eros.' +
    'Mauris at imperdiet ex. Maecenas lorem nulla, sodales in cursus vel, vestibulum in risus. Maecenas sit amet tempus metus,' + 
    'eget elementum leo. Integer rutrum orci erat, et ultrices quam facilisis nec. Phasellus at commodo leo. Pellentesque maximus erat nibh, non lobortis massa tristique vitae.'
    return (
      <div className="about">
        <SectionTitle title="about"/>
        <ParagraphImage text = {aboutText} image ={Images.icon}/>
      </div>
    );
  }
}

export default About;