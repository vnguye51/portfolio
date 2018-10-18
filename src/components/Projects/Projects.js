import React, { Component } from 'react';
import './Projects.css';
import Abyss from './Abyss/Abyss'
import ArtCollective from './ArtCollective/ArtCollective'
import VGNexus from './VGNexus/VGNexus'
import ParticleTracking from './ParticleTracking/ParticleTracking'
class Projects extends Component {
  render() {
    return (
      <div id='Projects'>
        <div className = 'header1'>Projects</div>
        <VGNexus />
        <Abyss />
        <ArtCollective />
        <ParticleTracking />
      </div>
    );
  }
}

export default Projects;
