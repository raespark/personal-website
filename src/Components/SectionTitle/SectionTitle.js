import React, { Component } from 'react';
import Images from '../../utils/Images';
import capitalizeFirstLetter from '../../utils/CapitalizeFirstLetter';
import './SectionTitle.css';

class SectionTitle extends Component {
  render() {
    let title = this.props.title ? capitalizeFirstLetter(this.props.title) : '';
    return (
        <div className="section-title">
            <span className="anchor" id={this.props.title}/>
            <h1 className="section-title-text">{title}</h1>
            <div className="title-decoration vertical-align">
              <img className="title-decoration-image"src={Images.flower.image} alt={Images.flower.text}/>
            </div>
            <hr className="section-title-hr"/>
        </div>
    );
  }
}

export default SectionTitle;
