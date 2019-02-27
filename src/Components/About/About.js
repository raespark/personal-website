import React, { Component } from 'react';
import SectionTitle from '../SectionTitle/SectionTitle';
import SubTitle from '../SubTitle/SubTitle';
import WhoAmI from './WhoAmI/WhoAmI';
import WorkExperience from './WorkExperience/WorkExperience';
import Accomplishments from './Accomplishments/Accomplishments';
import './About.css';

class About extends Component {
  render() {
  
    return (
      <div className="about">
        <SectionTitle title="about"/>
        <SubTitle title="Who am I?"/>
        <WhoAmI/>
        <SubTitle title="What have I done?"/>
        <div className="experience">
          <WorkExperience 
            jobTitle='Software Engineer'
            company='HomeAway'
            dates = {[
              {description: 'Full Time (Front End)', time: '2017 - Present'},
              {description: 'Intern (Front End)', time: 'Summer 2016'},
              {description: 'Intern (Back End)', time: 'Summer 2015'}
            ]}
          />
          <Accomplishments/>
        </div>
      </div>
    );
  }
}

export default About;