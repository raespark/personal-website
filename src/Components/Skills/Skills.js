import React, { Component } from 'react';
import SectionTitle from '../SectionTitle/SectionTitle';
import SubTitle from '../SubTitle/SubTitle';
import Skill from './Skill/Skill';
import Images from '../../utils/Images';
import './Skills.css';

class Skills extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="skills">
        <SectionTitle title='skills'/>
        <SubTitle title={'Languages'}/>
        <div className='skill-row skills-languages skills-section'>
            <Skill image={Images.javascript} label={'Javascript'} subLabel={'4 Years - Expert'} large/>
            <Skill image={Images.java} label={'Java'} subLabel={'6 Years - Expert'} large/>
            <Skill image={Images.python} label={'Python'} subLabel={'3 Years - Competent'} large/>
        </div>
        <SubTitle title={'Tools'}/>
        <div className='skills-tools skills-section'>
          <div className = 'skill-row'>
            <Skill image={Images.react} label={'React'}/>
            <Skill image={Images.redux} label={'Redux'}/>
            <Skill image={Images.node} label={'Node'}/>
            <Skill image={Images.mocha} label={'Mocha'}/>
          </div>
          <div className = 'skill-row'>
            <Skill image={Images.git} label={'Git'}/>
            <Skill image={Images.css} label={'CSS'}/>
            <Skill image={Images.bootstrap} label={'Bootstrap'}/>
          </div>
        </div>
        <SubTitle title={'Soft Skills'}/>
        <div className="skill-row skills-soft skills-section">
            <Skill image={Images.communication} label={'Communication'} subLabel={'Skilled at breaking down and explaining complex ideas in simple ways'} large/>
            <Skill image={Images.mentorship} label={'Mentorship'} subLabel={'Experienced in guiding others through problems to solutions on large projects'} large/>
            <Skill image={Images.leadership} label={'Leadership'} subLabel={'Experienced in leading projects, organizations, meetings and initiatives'} large/>
        </div>
      </div>
    );
  }
}

export default Skills;
