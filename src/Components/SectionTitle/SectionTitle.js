import React, { Component } from 'react';
import './SectionTitle.css';

class SectionTitle extends Component {

  render() {
    return (
        <div className="section-header">
            <h2 className="section-title shadowed-text">{this.props.title}</h2>
        </div>
    );
  }
}

export default SectionTitle;
