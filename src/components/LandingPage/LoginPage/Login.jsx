import React, { Component } from 'react';

import LoginForm from './LoginForm';
import SignUpForm from './SignUpForm';

class Login extends Component {
    state ={
        selectedForm : 'signup'
    }
    handleFormSelect = () => {
        let { selectedForm } = this.state;
        console.log(selectedForm);
        switch(selectedForm){
            case 'login':
                return <LoginForm />;
            case 'signup':
                return <SignUpForm />
            default:
                return <h1>Failed to load the form.</h1>
        }
    }

    
    render(){
        let { selectedForm } = this.state;
        return (
            <div className="login">
                <div>
                    <div className="loginHeader">
                        <h3 className={'loginText'+ (selectedForm === 'signup' ? ' selected' : '')}  onClick={() => this.setState({selectedForm :'signup'})}>SIGN UP</h3>
                        <h3 className={'loginText'+ (selectedForm === 'login' ? ' selected' : '')} onClick={() => this.setState({selectedForm :'login'})}>LOGIN</h3>
                    </div>
                    {this.handleFormSelect()}
                </div>
                

            </div>
        )
    }
}

export default Login;