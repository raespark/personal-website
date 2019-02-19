import React, { Component } from 'react';
import Helmet from 'react-helmet';
import SideNav from './Components/SideNav/SideNav';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="app">
        <Helmet title="Rachael Metcalf"/>
        <SideNav/>
        <div className="main-content">
          TEST :D
        </div>
      </div>
    );
  }
}

export default App;
