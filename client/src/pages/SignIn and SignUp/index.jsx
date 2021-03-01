import React from 'react';
import SignIn from '../../Components/SignIn';
import SignUp from '../../Components/SignUp';

import { SignInAndSignUpContainer } from './signInAndSignUpElements';

const SignInAndSignUpPage = () => (
  <SignInAndSignUpContainer>
    <SignIn />
    <SignUp />
  </SignInAndSignUpContainer>
);

export default SignInAndSignUpPage;
