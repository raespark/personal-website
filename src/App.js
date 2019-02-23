import React, { Component } from 'react';
import Helmet from 'react-helmet';
import SideNav from './Components/SideNav/SideNav';
import Banner from './Components/Banner/Banner';
import About from './Components/About/About';
import Skills from './Components/Skills/Skills';
import ContactInfo from './Components/ContactInfo/ContactInfo';
import NavBar from './Components/NavBar/NavBar';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Helmet title="Rachael Metcalf"/>
        <NavBar/>
        <SideNav/>
          <div className="main-content">
              <div className="top-banner">
                <Banner/>
              </div>
              <About/>
              <Skills/>
              <div className="bottom-banner">
                <Banner/>
              </div>
          </div>
          <div className="mobile-contact-info">
            <ContactInfo/>
          </div>
      </div>
    );
  }
}

export default App;
