import React, { useState } from 'react';
import * as sessionActions from "../../store/session";
import { useSelector, useDispatch } from 'react-redux'
import { Redirect } from 'react-router-dom';
import { signUp } from '../../store/session';
import logo from "../../images/spotifyLogo.png";
import {Link} from 'react-router-dom'

// import './LoginForm.css';
import './SignUpForm.css'

const SignUpForm = () => {
  const [errors, setErrors] = useState([]);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const user = useSelector(state => state.session.user);
  const dispatch = useDispatch();

  const onSignUp = async (e) => {
    e.preventDefault();
    if (password === repeatPassword) {
      const data = await dispatch(signUp(username, email, password));
      if (data) {
        setErrors(data)
      }
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    return dispatch(sessionActions.login("demo@aa.io", "password"));
  };

  const updateUsername = (e) => {
    setUsername(e.target.value);
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  const updateRepeatPassword = (e) => {
    setRepeatPassword(e.target.value);
  };

  if (user) {
    return <Redirect to='/main' />;
  }
    

  return (
    <>
      <div className="main-sign-up-content">
        <div className="header-login">
          <img src={logo} className="spotifyLogo"></img>
          <h2> Music Hub </h2>
        </div>
        <div id="message-login"> Please sign up to continue to Music Hub</div>
        <div id="sign-up-form">
          <div id="login-message"> </div>
          <form classname="sign-up-form" onSubmit={onSignUp}>
            <div>
              {errors.map((error, ind) => (
                <div key={ind}>{error}</div>
              ))}
            </div>
            <div>
              <label>User Name</label>
              <input
                type="text"
                name="username"
                onChange={updateUsername}
                value={username}
              ></input>
            </div>
            <div>
              <label>Email</label>
              <input
                type="text"
                name="email"
                onChange={updateEmail}
                value={email}
              ></input>
            </div>
            <div>
              <label>Password</label>
              <input
                type="password"
                name="password"
                onChange={updatePassword}
                value={password}
              ></input>
            </div>
            <div>
              <label>Repeat Password</label>
              <input
                type="password"
                name="repeat_password"
                onChange={updateRepeatPassword}
                value={repeatPassword}
                required={true}
              ></input>
            </div>
            <button className="sign-up-btn" type="submit">
              Sign Up
            </button>
          </form>
        </div>
        <button className="demoLoginButton" onClick={handleSubmit}>
          LOG IN AS A DEMO USER
        </button>
        <div className="login-prompt"></div>
          <div id="border-login"></div>
          <h2>Already have an account?</h2>
          <Link to="/login">
            <button className="Sign-up-styled"> Log In to Music Hub </button>
          </Link>
      </div>
    </>
  );
};

export default SignUpForm;
