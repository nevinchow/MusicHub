import React, { useState } from 'react';
import * as sessionActions from "../../store/session";
import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { Link } from 'react-router-dom'
import { login } from '../../store/session';
import logo from '../../images/spotifyLogo.png';
import './LoginForm.css'

const LoginForm = () => {
  const [errors, setErrors] = useState([]);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const user = useSelector(state => state.session.user);
  const dispatch = useDispatch();

  const onLogin = async (e) => {
    e.preventDefault();
    const data = await dispatch(login(email, password));
    if (data) {
      setErrors(data);
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    return dispatch(sessionActions.login("demo@aa.io", "password"));
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  if (user) {
    return <Redirect to='/main' />;
  }
  // const signup = () => {
  //   return <Redirect to='/sign-up' />;
  // }

  return (
    <>
      <div className="main-content">
        <div className="header-login">
          <img src={logo} className="spotifyLogo"></img>
          <h2> Music Hub </h2>
        </div>
        <div id="message-login"> Please login to continue to your music</div>
        <div id="login-form">
          {/* <div id="login-message"> </div> */}
          <form className="login-form" onSubmit={onLogin}>
            <div>
              {errors.map((error, ind) => (
                <div key={ind}>{error}</div>
              ))}
            </div>
            <div>
              <label htmlFor="email">Email</label>
              <input
                name="email"
                type="text"
                placeholder="Email"
                value={email}
                onChange={updateEmail}
              />
            </div>
            <div>
              <label htmlFor="password">Password</label>
              <input
                name="password"
                type="password"
                placeholder="Password"
                value={password}
                onChange={updatePassword}
              />
              <button className="login-btn" type="submit">LOG IN</button>
            </div>
          </form>
        </div>
        <button className="demoLoginButton" onClick={handleSubmit}>
          LOG IN AS A DEMO USER
        </button>
        <div className="sign-up-prompt">
          <div id="border-login"></div>
          <h2>Don't have an account? </h2>
          <Link to="/sign-up">
            <button className="Sign-up-styled"> SIGN UP FOR MUSIC HUB </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default LoginForm;
