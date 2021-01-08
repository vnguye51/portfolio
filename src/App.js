import React, { Component } from 'react';
import './App.css';
import Nav from './components/Nav/Nav'
import About from './components/about/About'
import Projects from './components/Projects/Projects'
import Homeworks from './components/homeworks/Homeworks'
import Publications from './components/Publications/Publications'
import WorkExperience from './components/Work Experience/WorkExperience'


class App extends Component {
  render() {
    return (
      <div className="App">
        <div id='nav'>
         <Nav />
        </div>
        <div id='main'>
          <About />
          <WorkExperience />
          <Projects />
          <Publications />
          <Homeworks />
        </div>
      </div>
    );
  }
}

export default App;
