import React, { Component } from 'react';
import './Publications.css';
import BAM from './BAM'
class Publications extends Component {
  render() {
    return (
      <div id='Publications'>
        <div className = 'header1'>Publications</div>
        <BAM />
      </div>
    );
  }
}

export default Publications;
