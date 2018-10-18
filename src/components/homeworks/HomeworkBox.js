import React, { Component } from 'react';
import './HomeworkBox.css'
class HomeworkBox extends Component {
  render() {
    return (
      <div class='box'>
        <a href={this.props.url} target='_blank' rel="noopener noreferrer">
            <div class='label'>{this.props.name}</div>
            <img src={this.props.img} width ='240' height='200' alt={this.props.img} />
        </a>
      </div>
    );
  }
}

export default HomeworkBox;


