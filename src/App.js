import React, { Component } from 'react';
import Helmet from 'react-helmet';
import Navbar from './Components/Navbar/Navbar'
import Header from './Components/Header/Header';
import About from './Components/About/About';
import Projects from './Components/Projects/Projects';
import Experience from './Components/Experience/Experience';
import Contact from './Components/Contact/Contact';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.links = [
      'About',
      'Projects',
      'Experience',
      'Contact'
    ]
  }

  render() {
    return (
      <div className="App">
        <Helmet title="Rachael Metcalf"/>
        <Navbar links={this.links}/>
        <Header/>
        <About/>
        <Projects/>
        <Experience/>
        <Contact/>
      </div>
    );
  }
}

export default App;
