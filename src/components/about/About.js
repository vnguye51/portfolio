import React, { Component } from 'react';
import './About.css';

class About extends Component {
  render() {
    return (
      <div>
        <div className = 'header1'>About</div>
        <div className = 'bodyText'>
        <img src='/assets/images/self-photo.jpg' alt='selfphoto' id='selfphoto'></img>
        Hi, I am Vincent Nguyen and I am an aspiring web developer. I graduated from California Polytechnic, San Luis Obispo, in 2016 with a bachelor's in Physics. Since graduating I have been working as a part-time highschool tutor while learning how to program. To that end, I am currently attending the UC Berkeley Extension Bootcamp in order to jumpstart my career.
        My first experience with programming was with my college Physics Computing class. In that class I learned the basics of Python as well as the use of several libraries that were useful to science including scipy, numpy, and matplotlib. My final project for that class was a particle tracking algorithm that I used to estimate the value of Avogadro's Number. The code and its logic is available in the portfolio. That class was what made me fall in love with programming. Figuring out a way (without using particle tracking libraries) was like solving a puzzle. How can I define the position of a particle through the pixels? What is the best way to define its position? Once I define it, how can I track it through a set of images? Those questions excited me and I loved tackling those kinds of puzzles. For me, the best part about programming is the feeling that almost anything can be done using code I just have to figure out how to do it.

        Throughout the rest of college my programming took a backseat to getting my degree, but I was always excited to implement programming whenever possible. As part of my senior project I was the student lead in creating a Brewster's Angle Microscope for use in a upper-division physical-chemistry to image lipid monolayers.The microscope uses the unique polarization effects of Brewster's Angle to study single-layer thick films of lipids. The frame was created out of LEGOs(we determined it wouldn't affect precision and it would be fun) while the motors and image analysis was performed using LabVIEW. Image analysis involved solving problems including adapting a focus-stacking algorithm to work with a line-of-focus as opposed to a plane as well as creating a user interface to log and perform mathematics on the data. With me as the second author, the instrument was published in the American Journal of Physics, a peer reviewed scientifc journal for research in Physics Teaching.

        Although less coding focused I also attended a Research Experience for Undergraduates at University of Colorado, Boulder. There, I modified a microscope and used it to record data on the 2D-hydrodynamics of liquid crystals. I created some simple python code to parse through and analyze data and streamline my workflow.
        </div>
      </div>
    );
  }
}

export default About;
