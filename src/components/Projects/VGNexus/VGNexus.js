import React, { Component } from 'react';
import './VGNexus.css';
import Carousel from '../../Carousel/Carousel'

class VGNexus extends Component {
  render() {
    return (
      <div id='VGNexus'>
        <div className = 'header2'>VGNexus <span class='tags'>(MySQL, Express, React, Node.js, Socket.io)</span></div>
        <div className = 'projectLink'><a href='https://vgnexus.com/' target='_blank' rel="noopener noreferrer">https://vgnexus.com/</a></div>
        <div className = 'projectLink'><a href='https://github.com/JackRa88it/VG-Nexus' target='_blank' rel="noopener noreferrer">https://github.com/JackRa88it/VG-Nexus</a></div>
        <br />
        <Carousel carouselId = '0' images = {['assets/images/VGNexus.png','assets/images/VGNexus2.png','assets/images/VGNexus3.png','assets/images/VGNexus4.png','assets/images/VGNexus5.png']}/>
        <br />
        <div className = 'bodyText'>
          A hub where browser games can be shared and deployed. Includes live-chat for each game, forums, upvote sysyem, and a customizable user profile.
          Deployment of HTML games is easy as long as games run inside a canvas Element. We have working examples of P5 and Phaser games. 
          Created as a final project for the UC Berkeley Extension Web Development course.
          <br /><br />
          If you just want to browse the site and test out its features use these fake credentials:
          <br /><br />
          email: PHASERTutorials@phaser.com
          <br />
          password: password
        </div>
      </div>
    );
  }
}

export default VGNexus;
