import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import LoginForm from '../auth/LoginForm';
import SignUpForm from '../auth/SignUpForm';
import './SplashPage.css'

const SplashPage = () => {
    const [loginForm, openLoginForm] = useState(false)
    const [signupForm, openSignupForm] = useState(false)


    const login = () => {
        if (!loginForm) {
            openLoginForm(true)
        } else {
            openLoginForm(false)
        }
    }

    const signUp = () => {
        if (!signupForm) {
            openSignupForm(true)
        } else {
            openSignupForm(false)
        }
    }


  return (
    <>
        <div className="splash-container">
            <h1>Splash Page</h1>
            <h2 onClick={login} className="login-button">Log In</h2>
            {loginForm ? <LoginForm /> : <></>}
            <h2 onClick={signUp} className="signup-button">Sign Up</h2>
            {signupForm ? <SignUpForm /> : <></>}
        </div>
        
    </>
  )
};

export default SplashPage;
