import React, { Component } from 'react';
import Helmet from 'react-helmet';
import SideNav from './Components/SideNav/SideNav';
import Banner from './Components/Banner/Banner';
import Skills from './Components/Skills/Skills';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Helmet title="Rachael Metcalf"/>
        <SideNav/>
          <div className="main-content">
              <div className="top-banner">
                <Banner/>
              </div>
              <Skills/>
              <div className="bottom-banner">
                <Banner/>
              </div>
          </div>
      </div>
    );
  }
}

export default App;
