import React, { Component } from 'react';
import './SectionTitle.css';

class SectionTitle extends Component {

  render() {
    return (
        <div>
            <a class="anchor" id={this.props.title}/>
            <header className="section-header">
                <h2 className="section-title shadowed-text">{this.props.title}</h2>
            </header>
        </div>
    );
  }
}

export default SectionTitle;
