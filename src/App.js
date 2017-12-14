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

      </div>
    );
  }
}

export default App;
