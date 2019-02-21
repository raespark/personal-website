import React, { Component } from 'react';
import './Skill.css';

class Skill extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let image = this.props.image;
    let label = this.props.label;
    let large = this.props.large ? this.props.large : false;
    let subLabel = this.props.subLabel;
    return (
      <div className={large ? 'skill-large skill' : 'skill'}>
        <div className="skill-icon">
          <img className={large ? 'icon-large' : 'icon'} src={image}/>
        </div>
        {large && <h4 className="label">{label}</h4>}
        {!large && <h5 className="label">{label}</h5>}
        {subLabel && <p className="sub-label">{subLabel}</p>}
      </div>
    );
  }
}

export default Skill;
