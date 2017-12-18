import React, { Component } from 'react';
import axios from 'axios';

class Newsletter extends Component{
    state = {
        email : '',
        invalidEmail : false,
        success : false
    }

    handleInput = (e)=> {
        let { value , name } = e.target;
        this.setState({
            [name] : value
        });
    }

    handleNewsletterSubmit = (e) => {
        e.preventDefault();
        // eslint-disable-next-line
        let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            formData = new FormData(),
            { email } = this.state;
        if(re.test(email)){
            formData.append('email', email);
            axios.post('http://dev3.apppartner.com/Reactors/scripts/add-email.php',formData).then(res => {
                console.log(res);
                if(res.status === 200){
                    this.setState({
                        success: true,
                        invalidEmail:false
                    }, () => {
                        setTimeout(() => {
                            this.setState({
                                success: false
                            });
                        },1500);
                    });
                } else {
                    console.log(res.data.message);
                }
            }).catch(err => console.log(err));
        } else {
            this.setState({
                invalidEmail : true
            });
        }

        
    }

    render(){
        let { email, success, invalidEmail } = this.state; 
        return(
            <div className="newsLetter">
                <h3 className="success" style={(!success) ? {display :'none'} : null}>Successfully Subscribed</h3>
                <h3 className="failure" style={(!invalidEmail) ? {display :'none'} : null}>Invalid Email</h3>
                <h2>SUBSCRIBE TO NEWSLETTER</h2>
                <form className="subForm" >
                    <input className="subInput" type="email" name="email" value={email} onChange={this.handleInput} placeholder=" Your Email"/>
                    <input className="subButton" onClick={this.handleNewsletterSubmit} type="button" value="Subscribe"/> 
                </form>
            </div>
        );
    }
}

export default Newsletter;