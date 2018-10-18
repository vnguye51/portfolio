import React, { Component } from 'react';
import './Abyss.css';

class Abyss extends Component {
  render() {
    return (
      <div id='Abyss'>
        <div className = 'header2'>Abyss <span class='tags'>(Express, Node.js, Socket.io, Phaser)</span></div>
        <div className = 'projectLink'><a href='https://journeyabyss.com' target='_blank' rel="noopener noreferrer">https://journeyabyss.com</a></div>
        <br />
        <div className = 'projectImgBox'><img img className='projectImg' src='assets/images/Abyss.png' alt='Abyss'></img></div>
        <br />
        <div className = 'bodyText'>
            Abyss is a multiplayer game where progress is persistent between all players around the world. 
            No enemies respawn or heal until the final boss is defeated. Open the game in two browsers to see the multiplayer aspects.
            <br /><br />
            Projectiles, enemy AI, and some collisions is handled server-side through socket.io
            Client-side rendering and inputs is handled through a combination of socket.io and Phaser
            <br /><br />
            This was a solo project on creating the framework for a massively multiplayer game and handling interaction between clients.
            <br /><br />
        </div>
      </div>
    );
  }
}

export default Abyss;
