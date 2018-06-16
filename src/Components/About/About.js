import React, { Component } from 'react';
import SectionTitle from '../SectionTitle/SectionTitle';
import Link from '../Link/Link';
import me from '../../Assets/me.jpg';
import './About.css';

class About extends Component {

  render() {
    return (
        <div>
          <SectionTitle title="About"/>
          <div className="row">
            <div className="about-image col-xs-12">
              <img className="picture-of-me" src={me} alt="Me"/>
            </div>
            <div className="about-body col-xs-12">
              <p>
                I graduated from the University of Texas at Austin in May, 2017 with a degree in Computer Science. 
                Outside of work, I enjoy working on personal projects primarily involving Game Development, 
                and am currently developing projects under the title <Link url="http://discorgigames.com/" content="Discorgi Games"/>.
                I also enjoy drawing and animating, which I also put to work in my games. 
                The experience from making games has given me a strong appreciation for the importance of good UX and good design. 
                
              </p>
            </div>
          </div>
        </div>
    );
  }
}

export default About;
