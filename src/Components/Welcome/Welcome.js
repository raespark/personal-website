import React, { Component } from 'react';
import './Welcome.css'

class Welcome extends Component {
  render() {
    return (
      <div className="welcome">
        <h1 className="brand-color">{'Welcome!'}</h1>
        <h5>
          {'This is the personal website of '} 
          <span className="brand-color">{'Rachael Metcalf. '}</span>
          {'Thanks for taking the time to stop by!'}</h5>
      </div>
    );
  }
}

export default Welcome;
