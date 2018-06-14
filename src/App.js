import React, { Component } from 'react';
import Helmet from 'react-helmet';
import Navbar from './components/Navbar/Navbar'
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.links = [
      {
        url: '#AboutMe',
        text: 'About Me'
      },
      {
        url: '#Projects',
        text: 'Projects'
      },
      {
        url: '#Experience',
        text: 'Experience'
      },
      {
        url: '#Contact',
        text: 'Contact Me'
      }
    ]
  }

  render() {
    return (
      <div className="App">
        <Helmet title="Rachael Metcalf"/>
        <Navbar links={this.links}/>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
