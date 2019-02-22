import React, { Component } from 'react';
import Images from '../../utils/Images';
import './SectionTitle.css';

class SectionTitle extends Component {
  capitalizeFirstLetter(word) {
    return word[0].toUpperCase() + word.substr(1);
  }

  render() {
    let title = this.props.title ? this.capitalizeFirstLetter(this.props.title) : '';
    return (
        <div className="section-title">
            <span className="anchor" id={this.props.title}/>
            <h1 className="section-title-text">{title}</h1>
            <div className="title-decoration vertical-align">
              <img className="title-decoration-image"src={Images.flower}/>
            </div>
            <hr className="section-title-hr"/>
        </div>
    );
  }
}

export default SectionTitle;
