
import React from 'react';
import { NavLink } from 'react-router-dom';
import LogoutButton from './auth/LogoutButton';
import { useSelector } from "react-redux";

const NavBar = () => {
  const sessionUser = useSelector((state) => state.session.user);
  if (sessionUser) {
    return (
      // Upper Nav Bar
      <nav style={{backgroundColor: 'black', height: '100px'}}>
        <ul>
          <li>
            <NavLink to='/' exact={true} activeClassName='active'>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to='/playlists' exact={true} activeClassName='active'>
              Playlists
            </NavLink>
          </li>
          <li>
            <LogoutButton />
          </li>
        </ul>
      </nav>
    );

  } else {
    return (
      <>
      <nav style={{backgroundColor: 'black', height: '100px'}}>
      <li style={{position: 'relative', left: '70%', top: '45px'}}>
            <NavLink to='/login' exact={true} activeClassName='active' style={{color: 'white', fontWeight: 'bold'}}>
              Login
            </NavLink>
          </li>
          <li style={{position: 'relative', left: '65%', top: '30px'}}>
            <NavLink to='/sign-up' exact={true} activeClassName='active' style={{textDecoration: 'none', color: 'white', fontWeight: 'bold'}}>
              Sign Up
            </NavLink>
          </li>
          </nav>
          </>
    )
  }
}

export default NavBar;
