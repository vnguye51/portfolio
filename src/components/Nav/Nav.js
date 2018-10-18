import React, { Component } from 'react';
import './Nav.css';

class Nav extends Component {
  render() {
    return (
      <div id='navBar'>
        <i class="fas fa-bars"></i>
        <div className='navElement'>About</div>
        <div className='navElement'>Projects</div>
          <div className='subElement'>VGNexus</div>
          <div className='subElement'>Abyss</div>
          <div className='subElement'>ArtCollective</div>
        <div className='navElement'>Publications</div> 
          <div className='subElement'></div>
        <div className='navElement'>Assignments</div>  
        <div className='iconGroup'>
          <a href='https://www.linkedin.com/in/vincent-nguyen-342015164/' target='_blank' rel="noopener noreferrer"><img src='\assets\images\In-2CRev-34px-R.png' alt='linkedin'></img></a>
          <a href='https://github.com/vnguye51/' target='_blank' rel="noopener noreferrer"><img src='\assets\images\GitHub-Mark-32px.png' alt='github'></img></a>
          <span id='email'>vincenttsnguyen@gmail.com</span>
        </div>
      </div>
    );
  }
}

export default Nav;
