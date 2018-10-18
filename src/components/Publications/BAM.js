import React, { Component } from 'react';

class BAM extends Component {
  render() {
    return (
      <div id='BAM'>
        <div className = 'header2'>A LEGO Mindstorms Brewster angle microscope <span class='tags'>(LabVIEW)</span></div>
        <div className = 'projectLink'><a href='https://aapt.scitation.org/doi/10.1119/1.4991387' target='_blank' rel="noopener noreferrer">https://aapt.scitation.org/doi/10.1119/1.4991387</a></div>
        <br />
        <div className = 'bodyText'>
          As a paid student researcher I assisted in building and programming a Brewster Angle Microscope(BAM). The BAM is a specialized microscope that is able to
          take images of films on a water interface as thin as 1nm thick. Below is a picture of a cholesterol monolayer imaged using the BAM. <br /><br />I created the user interface
          to control and calibrate the microscope, as well as an analysis program that parses through the images and determine properties such as phase transitions, adsorptivity, and reflectivity.
          I am the second author on a paper published to the American Journal of Physics, a peer-reviewed teaching journal. 
        </div>
        <div className = 'projectImgBox'><img className='projectImg' src='assets/images/BrewsterAngle.png' alt='BAM'></img></div>
        <br /><br />

      </div>
    );
  }
}

export default BAM;
