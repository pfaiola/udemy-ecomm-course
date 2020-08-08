import React from 'react';

import './sign-up.styles.scss';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';


export default class SignUp extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
            confirmPassword: '',
            name: ''
        };
    }

    handleSubmit = (event) => {
        event.preventDefault();

        this.setState({ email: '', password: '', confirmPassword: '', name: ''});
    }

    handleChange = (event) => {
        const { value, name } = event.target;
        this.setState({[name]: value})
    }

    render() {
        return (
            <div className="sign-up">
                <h2>Sign up for an account</h2>
                <span>Sign in with your email and password</span>

                <form>
                    <FormInput 
                        name="name" 
                        type="text" 
                        value={this.state.name} 
                        handleChange={this.handleChange}
                        label="Name"
                        required />
                    <FormInput 
                        name="email" 
                        type="email" 
                        value={this.state.email} 
                        handleChange={this.handleChange}
                        label="Email"
                        required />
                    <FormInput 
                        name="password" 
                        type="password" 
                        value={this.state.password} 
                        handleChange={this.handleChange}
                        required
                        label="Password" />
                    <FormInput 
                        name="confirmPassword" 
                        type="password" 
                        value={this.state.confirmPassword} 
                        handleChange={this.handleChange}
                        required
                        label="Confirm Password" />

                    <CustomButton type="submit">Sign Up</CustomButton>
                </form>
            </div>
        );
    }
}