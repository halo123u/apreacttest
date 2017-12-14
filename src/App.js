import React, { Component } from 'react';
import img1 from './assets/1.png';
import img2 from './assets/2.png';
import img3 from './assets/3.png';
import img4 from './assets/4.png';
import img5 from './assets/5.png';
import img6 from './assets/6.png';

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

        <div className="mainBottom"> 
          <h3>Maul By The Best Way Around The Island</h3>
          <div className="imageRow">
              <div className="singleImg">
                  <img className="image" src={img3}/>
                  <h5>East Josianefurt</h5>
                  <caption>085 Daron Via</caption>
              </div>
              <div className="singleImg">
                  <img className="image" src={img4}/>
                  <h5>South Cristopherport</h5>
                  <caption>162 Chandler Ville</caption>
              </div>
              <div className="singleImg">
                  <img className="image" src={img5}/>
                  <h5>Concepcionbury</h5>
                  <caption>7643 Kylie Burgs</caption>
              </div>
              <div className="singleImg">
                  <img className="image" src={img6}/>
                  <h5>Reychester</h5>
                  <caption>5590 Gabe Views Apt. 044</caption>
              </div>
          </div>
        </div>

        <div className="newsLetter">
          <h2>SUBSCRIBE TO NEWSLETTER</h2>
          <form className="subForm">
            <input className="subInput" type="email" placeholder=" Your Email"/>
            <input className="subButton" type="button" value="Subscribe"/> 
          </form>
        </div>

        <div className="footer">
            Footer
        </div>

      </div>
    );
  }
}

export default App;
