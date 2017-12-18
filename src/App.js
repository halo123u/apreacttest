import React, { Component } from 'react';

import { BrowserRouter as Router, Route} from "react-router-dom";

import Navbar from './components/Navbar';
import Landing from './components/LandingPage/Landing';
import Login from './components/LandingPage/LoginPage/Login';


import './App.css';

class App extends Component {
    state={
      loginClicked : false
    }

    handleLoginClicked = () =>{
        let {loginClicked} = this.state;
        this.setState({
          loginClicked: !loginClicked
          });
    }
  render() {
    let { loginClicked } = this.state;
    return (
      <Router>
        <div className="App">
          <Navbar loginClicked={this.handleLoginClicked} clicked={loginClicked}/>
            <Route exact path="/" component={Landing} />
            <Route exact path="/login" component={Login}/>
        </div>
      </Router>
    );
  }
}

export default App;
