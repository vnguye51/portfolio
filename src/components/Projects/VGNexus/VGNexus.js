import React, { Component } from 'react';
import './VGNexus.css';
import { Certificate } from 'crypto';

class VGNexus extends Component {
  render() {
    return (
      <div id='VGNexus'>
        <div className = 'header2'>VGNexus <span class='tags'>(MySQL, Express, React, Node.js, Socket.io)</span></div>
        <div className = 'projectLink'><a href='https://vgnexus.com/' target='_blank' rel="noopener noreferrer">https://vgnexus.com/</a></div>
        <br />
        <div className = 'projectImgBox'><img img className='projectImg' src='assets/images/VGNexus.png' alt='VGNexus'></img></div>
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
