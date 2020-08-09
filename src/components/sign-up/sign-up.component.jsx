import React from 'react';

import './sign-up.styles.scss';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';

export default class SignUp extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
            confirmPassword: '',
            displayName: ''
        };
    }

    handleSubmit = async (event) => {
        event.preventDefault();

        const { displayName, email, password, confirmPassword } = this.state;

        if(password !== confirmPassword) {
            alert("Passwords don't match!");
            return;
        }

        try {
            const { user } = await auth.createUserWithEmailAndPassword(email, password);

            await createUserProfileDocument(user, { displayName });
            this.setState({
                email: '',
                password: '',
                confirmPassword: '',
                displayName: ''
            });
        } catch (error) {
            console.error(error);
        }

        this.setState({ email: '', password: '', confirmPassword: '', displayName: ''});
    }

    handleChange = (event) => {
        const { value, name } = event.target;
        this.setState({[name]: value})
    }

    render() {
        return (
            <div className="sign-up">
                <h2 className="title">I don't have an account</h2>
                <span>Sign up with your email and password</span>

                <form className="sign-up-form" onSubmit={this.handleSubmit}>
                    <FormInput 
                        name="displayName" 
                        type="text" 
                        value={this.state.displayName} 
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