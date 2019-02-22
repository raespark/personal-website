import React, { Component } from 'react';
import './NavItem.css';

class NavItem extends Component {
  render() {
    let text = this.props.text;
    return (
      <div>
        <div className="side-nav-item">
          <h4>{text}</h4>
        </div>
        <hr/>
      </div>
    );
  }
}

export default NavItem;
