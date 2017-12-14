import React, { Component } from 'react';
import img1 from './assets/1.png';
import img2 from './assets/2.png';
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

        <div className="mainBody">
          <div className="bodyContainer">
            <div className="innerBody">
              <img className="image" src={img1}/>
              <div className="textContainer">
                <h4>Regional Cuisine Down Home <br/> Southern Cooking</h4>
                <p>The quick,brown fox jumps over a lazy dog. <br/>DJs flock by when MTV ax quiz prog.<br/> Junk MTV quiz graced by fox whelps.<br/> Bawds jog, flick quartz, vex nymphs.</p>
              </div>
            </div>

            <div className="innerBody">
              <img className="image" src={img2}/>
              <div className="textContainer">
                <h4>Pos Hardware More Options In <br/> Less Space</h4>
                <p>The quick,brown fox jumps over a lazy dog. <br/>DJs flock by when MTV ax quiz prog.<br/> Junk MTV quiz graced by fox whelps.<br/> Bawds jog, flick quartz, vex nymphs.</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    );
  }
}

export default App;
