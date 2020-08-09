import React from 'react';
import './sign-in-and-sign-up.styles.scss';

import {SignIn, SignUp} from '../../components';

const SignInAndSignUpPage = () => (
    <div className="sign-in-and-sign-up">
        <SignIn className="sign-in"></SignIn>
        <SignUp className="sign-up"></SignUp>
    </div>
)

export default SignInAndSignUpPage;