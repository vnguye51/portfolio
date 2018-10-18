import React, { Component } from 'react';
import './Projects.css';
import Abyss from './Abyss/Abyss'
import ArtCollective from './ArtCollective/ArtCollective'
import VGNexus from './VGNexus/VGNexus'

class Projects extends Component {
  render() {
    return (
      <div>
        <div className = 'header1'>Projects</div>
        <VGNexus />
        <Abyss />
        <ArtCollective />
      </div>
    );
  }
}

export default Projects;
