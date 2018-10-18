import React, { Component } from 'react';
import './Nav.css';

class Nav extends Component {
  state= {
    hidden: true
  }
  hidenav = () => {
    this.setState({hidden: true})
    // this.refs.navbar.add('hide')
  }
  shownav = () =>{
    this.setState({hidden: false})
  }
  render() {
    return (
      <div id='wrapper'>
        <i className="fas fa-bars fixed" onClick={this.shownav}></i>
        <div id='navBar' class = {this.state.hidden ? "hide" : "show"}>
          <i className="fas fa-bars" onClick={this.hidenav}></i>
          <a href='#About' className='navlink'><div  className='navElement'>About</div></a>
          <a href='#Projects' className='navlink'><div className='navElement'>Projects</div></a>
            <a href='#VGNexus' className='navlink'><div className='subElement'><i class="fas fa-circle"></i> VGNexus</div></a>
            <a href='#Abyss' className='navlink'><div className='subElement'><i class="fas fa-circle"></i> Abyss</div></a>
            <a href='#ArtCollective' className='navlink'><div className='subElement'><i class="fas fa-circle"></i> ArtCollective</div></a>
            <a href='#Particle' className='navlink'><div className='subElement'><i class="fas fa-circle"></i> Particle Tracking</div></a>
          <a href='#Publications' className='navlink'><div className='navElement'>Publications</div> </a>
            <div className='subElement'></div>
          <a href='#Miscellania' className='navlink'><div className='navElement'>Miscellania</div></a>
          <div className='iconGroup'>
            <a href='https://www.linkedin.com/in/vincent-nguyen-342015164/' target='_blank' rel="noopener noreferrer"><img src='assets\images\In-2CRev-34px-R.png' alt='linkedin'></img></a>
            <a href='https://github.com/vnguye51/' target='_blank' rel="noopener noreferrer"><img src='assets\images\GitHub-Mark-32px.png' alt='github'></img></a>
            <span id='email'>vincenttsnguyen@gmail.com</span>
          </div>
        </div>
      </div>
    );
  }
}

export default Nav;
