import React, { Component } from 'react';
import './About.css';

class About extends Component {
  render() {
    return (
      <div id='About'>
        <div className = 'header1'>About</div>
        <div className = 'bodyText'>
        {/* <img src='/assets/images/self-photo.jpg' alt='selfphoto' id='selfphoto'></img> */}
        I am a full-stack web developer with a strong focus on the back-end. I am especially proficient in 
        building routes and designing the logic for real-time elements. I recently graduated from the 
        UC Berkeley Extension Web Development course where I learned the MERN stack. Prior to learning web development I 
        studied and graduated with a BS in Physics from California Polytechnic State University, San Luis Obispo. My physics
        background gives me a strong algorithm and math based approach to programming.
        <br /><br />
        </div>
      </div>
    );
  }
}

export default About;
