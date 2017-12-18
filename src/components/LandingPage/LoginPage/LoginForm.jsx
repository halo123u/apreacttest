import React, { Component } from 'react';
import axios from 'axios';

class LoginForm extends Component{
    state = {
        email : '',
        password: '',
        data : null
    }
    handleInput = (e) => {
        let {name, value} = e.target;
        this.setState({
            [name] : value
        });
    }
    handleLogin = (e) => {
        e.preventDefault();
        let { email, password} = this.state,
        formData = new FormData();
        formData.append('email', email);
        formData.append('password', password);

        axios.post('http://dev3.apppartner.com/Reactors/scripts/user-login.php', formData).then((res) => {
            console.log(res);
            this.setState({
                data: res.data
            });
        }).catch(err => console.log(err));

    } 
    render(){
        let { email, password} = this.state;
        return(
            <form className="form">
                <input type="email" className="formInput email" onChange={this.handleInput} placeholder="reactor@apppartner.com" name="email" value= {email} />
                <input type="password" className="formInput password" onChange={this.handleInput} placeholder="Password" name="password" value= {password}/>
                <input type="button" className="redButton" onClick={this.handleLogin} value="LOGIN" />    
            </form>
        )
    }
}

export default LoginForm;