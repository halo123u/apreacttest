import React, { Component } from 'react';

class Newsletter extends Component{

    render(){
        return(
            <div className="newsLetter">
                <h2>SUBSCRIBE TO NEWSLETTER</h2>
                <form className="subForm">
                    <input className="subInput" type="email" placeholder=" Your Email"/>
                    <input className="subButton" type="button" value="Subscribe"/> 
                </form>
            </div>
        );
    }
}

export default Newsletter;