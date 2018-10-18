import React, { Component } from 'react';

class ParticleTracking extends Component {
  render() {
    return (
      <div id='Particle'>
        <div className = 'header2'>Particle Tracking <span class='tags'>(Python, numPy, Machine Vision)</span></div>
        <div className = 'projectLink'><a href='assets/docs/ParticleTracking.html' target='_blank' rel="noopener noreferrer">HTML Document</a></div>
        <br />
        <div className = 'projectImgBox'><img className='projectImg' src='assets/images/Unfiltered.png' alt='ParticleTracking'></img></div>
        <br />
        <div className = 'bodyText'>
          As a class project at California Polytechnic I created a basic particle-tracking program. The program can be summarized as:
          <ol>
              <li>Pre-process the images and threshold the grayscale values to black(particles) or white</li>
              <li>Perform a flood-fill algorithm to flag all connected black pixels</li>
              <li>For each connected black blob check to see if they are massive enough to be a particle</li>
              <li>For each particle find their center of mass</li>
              <li>Repeat for each frame and record the difference between each particles center of mass</li>
              <li>For each frame check for the nearest particle in the previous frame and consider these as the same particle if they moved within a reasonable distance</li>
              <li>If no previous particle is found then flag it as a new particle that just entered the view</li>
              <li>Record the velocities between each frame</li>
          </ol> 
          The program was validated against Avogadro's number derived from the Brownian Motion of milk globules.
        </div>
        <br /><br />
      </div>
    );
  }
}

export default ParticleTracking;
