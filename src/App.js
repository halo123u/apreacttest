import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="Banner">
          <div className="Navbar">
            <ul>
              <li>Reactor</li>
              <li className="rightItem">Log In</li>
            </ul>
          </div>
          <h1>Hello, Welcome to Reactor</h1>
        </div>
        <div className="subBanner">
          <div className="container">
            <div className="subBanner_left">
              <h2>WHAT WE DO</h2>
            </div>
            <div className="textContainer">
              <h4>We do</h4>
              <p>The quick,brown fox jumps over a lazy dog. <br/>DJs flock by when MTV ax quiz prog.<br/> Junk MTV quiz graced by fox whelps.<br/> Bawds jog, flick quartz, vex nymphs.</p>
            </div>
          </div>
        </div>

      </div>
    );
  }
}

export default App;
