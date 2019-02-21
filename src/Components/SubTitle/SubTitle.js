import React, { Component } from 'react';
import './SubTitle.css';

class SubTitle extends Component {
  constructor(props) {
    super(props);
  }

  capitalizeFirstLetter(word) {
    return word[0].toUpperCase() + word.substr(1);
  }

  render() {
    let title = this.props.title ? this.capitalizeFirstLetter(this.props.title) : '';
    return (
        <div className="sub-title">
            <h3 className="sub-title-text">{title}</h3>
            <hr className="sub-title-hr"/>
        </div>
    );
  }
}

export default SubTitle;
