import React, { Component } from 'react';
import './Homeworks.css';
import HomeworkBox from './HomeworkBox.js'
class Homeworks extends Component {
  render() {
    return (
      <div id='Miscellania'>
        <div className = 'header1'>Miscellania</div>
            Here is a collection of random practice exercises and homework assignments.
        <div className = 'homeworkContainer'>
          <HomeworkBox name='SRPG' url='https://vnguye51.github.io/SRPG/' img='assets/images/SRPG.png'/>
          <HomeworkBox name='Name that Character' url='https://vnguye51.github.io/Word-Guess-Game/' img='assets/images/Chihiro.jpg'/>
          <HomeworkBox name='RPS Multiplayer' url='https://vnguye51.github.io/RPS-Multiplayer/' img='https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Rock-paper-scissors.svg/300px-Rock-paper-scissors.svg.png'/>
          <HomeworkBox name='Scraping Practice' url='https://dashboard.heroku.com/apps/scraper-hw12/settings/' img='https://cdn-images-1.medium.com/max/1200/1*BrUAg3-OqIHkoTz_CRIzTA.png'/>
          <HomeworkBox name='Liquid Crystal REU' url='REU%20Pair%20Hydrodynamics.pdf' img='assets/images/Liquid%20Crystal.jpg'/>
          <HomeworkBox name='Trivia Game' url='https://vnguye51.github.io/TriviaGame/' img='https://www.zelda.com/assets/img/home/games/354x198_ZeldaBreathofWild_v01.jpg'/>
          <HomeworkBox name='Friend Finder' url='https://friend-finder-bootcamp-hw.herokuapp.com/' img='assets/images/FriendFinder.png'/>
          <HomeworkBox name='React NYT API' url='https://nyt-react-practice.herokuapp.com/' img='http://theievoice.com/wp-content/uploads/2017/10/o-NEWSPAPERS-facebook.jpg'/>

        </div>
      </div>
    );
  }
}

export default Homeworks;
