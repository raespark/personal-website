import React, { Component } from 'react';
import './NavItem.css';

class NavItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let text = this.props.text;
    return (
      <div>
        <div className="side-nav-item">
          <h3>{text}</h3>
        </div>
        <hr/>
      </div>
    );
  }
}

export default NavItem;
