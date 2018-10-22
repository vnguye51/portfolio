import React, { Component } from 'react';
import './About.css';

class About extends Component {
  render() {
    return (
      <div id='About'>
        <div className = 'header1'>About</div>
        <div className = 'bodyText'>
        {/* <img src='/assets/images/self-photo.jpg' alt='selfphoto' id='selfphoto'></img> */}
        Full-stack developer with experience using Javascript, CSS, HTML, node.js, React, mySQL, mongoDB, and more. I am also well-versed in Python and its numPy and sciPy libraries. I specialize in creating the logic and structure behind web development and I always keep an eye out for efficiency. I also like making video game mock-ups as a hobby.
        <br /><br />
        I earned my Physics Bachelor from California Polytechnic, San Luis Obispo As part of my courses and research I have created and utilized customized 2D line-of-focus stacking program written in LabVIEW as well as a particle tracking program written in Python. After graduating, I then went on to switch professions and earned my Web Development certificate from UC Berkeley Extension.
        <br /><br />
        The main reason I love programming is that with every new technology I learn I can imagine all the useful and novel ways I can leverage it. It makes me feel like I can do anything with code. Of course, I inevitably hit a wall but that’s part of the fun of learning.
        <br /><br />
        </div>
      </div>
    );
  }
}

export default About;
