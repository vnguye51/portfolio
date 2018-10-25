import React, { Component } from 'react';
import './ArtCollective.css';
import Carousel from '../../Carousel/Carousel'


class ArtCollective extends Component {
  render() {
    return (
      <div id='ArtCollective'>
        <div className = 'header2'>ArtCollective <span class='tags'>(Express, Node.js, Handlebars, MySQL)</span></div>
        <div className = 'projectLink'><a href='https://stormy-brushlands-10294.herokuapp.com/' target='_blank' rel="noopener noreferrer">https://stormy-brushlands-10294.herokuapp.com/</a></div>
        <div className = 'projectLink'><a href='https://github.com/DinhDo2312/ArtCollective' target='_blank' rel="noopener noreferrer">https://github.com/DinhDo2312/ArtCollective</a></div>
        <br />
        <Carousel carouselId = '3' images = {['assets/images/Art1.png','assets/images/Art2.png']}/>
        <br />
        <div className = 'bodyText'>
            ArtCollective is a website where users can join collectives, where they can upload images, pictures, and audio based on common interests.
            This is sort of a deviantart clone. Users can also comment and discuss submissions.
            <br /><br />
            This project showcases the power of relational databases by linking together the many-to-many relationships between users and their collectives.
        </div>
        
        <br /><br />

      </div>
    );
  }
}

export default ArtCollective;
