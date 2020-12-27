import React from 'react';
import SignIn from '../../Components/SignIn';
import SignUp from '../../Components/SignUp';
import './sign-in-and-sign-up.styles.scss';

const SignInAndSignUpPage = () => {
  return (
    <div className="sign-in-and-sign-up">
      <SignIn />
      <SignUp />
    </div>
  );
};

export default SignInAndSignUpPage;
