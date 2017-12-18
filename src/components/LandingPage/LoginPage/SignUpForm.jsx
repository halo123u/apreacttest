import React, { Component } from 'react';
import axios from 'axios';

class RegisterForm extends Component{
    state = {
        email : '',
        password: '',
        username: '',
        data : null
    }
    handleInput = (e) => {
        let {name, value} = e.target;
        this.setState({
            [name] : value
        });
    }
    handleSignUp = (e) => {
        e.preventDefault();
        let { email, password, username} = this.state,
        formData = new FormData();
        formData.append('email', email);
        formData.append('password', password);
        formData.append('username' , username);
        axios.post('http://dev3.apppartner.com/Reactors/scripts/user-signup.php', formData).then((res) => {
            console.log(res);
            this.setState({
                data: res.data
            });
        }).catch(err => console.log(err));

    } 
    render(){
        let { email, password, username} = this.state;
        return(
            <form className="form">
                <input className="formInput username" onChange={this.handleInput} placeholder="Username" type="text" name="username" value={username} />
                <input className="formInput email" onChange={this.handleInput} type="email" placeholder="reactor@apppartner.com" name="email" value={email} />
                <input className="formInput password" onChange={this.handleInput} type="password" placeholder="Password"name="password" value={password}/>
                <input type="button" className="redButton" onClick={this.handleSignUp}value="SIGN UP" />        
            </form>
        )
    }
}

export default RegisterForm;