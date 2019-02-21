import React, { Component } from 'react';
import Helmet from 'react-helmet';
import SideNav from './Components/SideNav/SideNav';
import Banner from './Components/Banner/Banner';
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
            <div className="top-banner">
              <Banner/>
            </div>
            <div className="body">
              {'EVENTUALLY SOMETHING WILL GO HERE'}
            </div>
            <div className="bottom-banner">
              <Banner/>
            </div>
        </div>
      </div>
    );
  }
}

export default App;
