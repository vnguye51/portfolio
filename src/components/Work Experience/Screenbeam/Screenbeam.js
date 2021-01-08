import React, { Component } from 'react';

class Screenbeam extends Component {
  render() {
    return (
      <div id='Screenbeam'>
        <div className = 'header2'>Web Developer at Screenbeam <span class='tags'>(SQL, C#, .NET Core, React, SignalR, Websocket)</span></div>
        <div className = 'bodyText'>2/11/ 2019 - Present</div>
        <br />
        <div className = 'projectLink'><a href='https://www.screenbeam.com/' target='_blank' rel="noopener noreferrer">https://www.screenbeam.com/</a></div>
        <div className = 'bodyText'>
            Assisted in design and development of a webapp that manages and communicates with thousands of physical video conferencing equipment. My work includes
            assisting in the design of new React UI components and working with a constant feedback and request loop from marketing and design teams.
            My work also included migrating legacy javascript UI into React and implementing the backend REST API and Websocket channels. Lastly, I created internal tooling to simulate traffic towards the web server for stress testing.
        </div>
      </div>
    );
  }
}

export default Screenbeam;
