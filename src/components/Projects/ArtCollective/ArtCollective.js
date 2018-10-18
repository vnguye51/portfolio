import React, { Component } from 'react';
import './ArtCollective.css';

class ArtCollective extends Component {
  render() {
    return (
      <div>
        <div className = 'header2'>ArtCollective</div>
        <div className = 'bodyText'>
            Art Collective, a website, allows users to upload images, audio, and documents.
            Users have a collective, where they can upload images, pictures, and audio. 
            Users can have more than one collective. Collectives are editable by other users who have permission from the owner of the collective. 
            The website is made with Bootstrap CSS, HTML, Javascript…
        </div>
      </div>
    );
  }
}

export default ArtCollective;
