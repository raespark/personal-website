import React, { Component } from 'react';
import SectionTitle from '../SectionTitle/SectionTitle';
import me from '../../Assets/me.jpg';
import './About.css';

class About extends Component {

  render() {
    return (
        <div>
          <SectionTitle title="About"/>
          <div className="row">
            <div className="about-image col-xs-12 col-sm-4">
              <img className="picture-of-me" src={me} alt="Picture of me"/>
            </div>
            <div className="about-body col-xs-12 col-sm-8">
              <p>
                I graduated from the University of Texas at Austin in May, 2017 with a degree in Computer Science. 
              </p>
            </div>
          </div>
        </div>
    );
  }
}

export default About;
