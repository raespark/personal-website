import React, { Component } from 'react';
import Helmet from 'react-helmet';
import Navbar from './Components/Navbar/Navbar'
import Header from './Components/Header/Header';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.links = [
      {
        url: '#About',
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
        text: 'Contact'
      }
    ]
  }

  render() {
    return (
      <div className="App">
        <Helmet title="Rachael Metcalf"/>
        <Navbar links={this.links}/>
        <Header/>
      </div>
    );
  }
}

export default App;
