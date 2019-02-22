import React, { Component } from 'react';
import './SectionTitle.css';

class SectionTitle extends Component {
  constructor(props) {
    super(props);
  }

  capitalizeFirstLetter(word) {
    return word[0].toUpperCase() + word.substr(1);
  }

  render() {
    let title = this.props.title ? this.capitalizeFirstLetter(this.props.title) : '';
    return (
        <div>
            <span className="anchor" id={this.props.title}/>
            <h1 className="section-title">{title}</h1>
            <hr className="section-title-hr"/>
        </div>
    );
  }
}

export default SectionTitle;
