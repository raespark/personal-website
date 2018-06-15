import React, { Component } from 'react';
import Helmet from 'react-helmet';
import Navbar from './components/Navbar/Navbar'
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
          <h1 className="App-title shadowed-text">Rachael Metcalf</h1>
          <h3 className="shadowed-text">Software Developer</h3>
          <h4 className="shadowed-text">Full Stack</h4>
        </header>
      </div>
    );
  }
}

export default App;
