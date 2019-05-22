import React, { Component } from 'react';
import capitalizeFirstLetter from '../../utils/CapitalizeFirstLetter';
import './NavItem.css';

class NavItem extends Component {
  scrollToAnchor(id) {
    let section = document.getElementById(id);
    if(section) {
      section.scrollIntoView({behavior: "smooth", block: "start"});
    }
  }
  render() {
    let text = capitalizeFirstLetter(this.props.text);
    return (
      <div className="navigation-item">
        <a className="navigation-link mm" onClick={() => {this.scrollToAnchor(this.props.text)}}>
          <div className="navigation-text">
            <h4>{text}</h4>
          </div>
        </a>
        <hr/>
      </div>
    );
  }
}

export default NavItem;
