import React, { Component } from 'react';
import Helmet from 'react-helmet';
import SideNav from './Components/SideNav/SideNav';
import Banner from './Components/Banner/Banner';
import About from './Components/About/About';
import Skills from './Components/Skills/Skills';
import ContactInfo from './Components/ContactInfo/ContactInfo';
import NavBar from './Components/NavBar/NavBar';
import './App.css';
import Welcome from './Components/Welcome/Welcome';
import Projects from './Components/Projects/Projects';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Helmet title="Rachael Metcalf"/>
        <NavBar/>
        <SideNav/>
          <div className="main-content">
              <Banner/>
              <div className="body">
                <Welcome/>
                <About/>
                <Skills/>
                <Projects/>
              </div>
          </div>
          <div className="mobile-contact-info">
            <ContactInfo/>
          </div>
          <div className="mobile-copyright">
            <div className="copyright">
              {'© Rachael Metcalf'}
            </div>
          </div>
      </div>
    );
  }
}

export default App;
