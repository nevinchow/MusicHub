
import React from 'react';
import { NavLink } from 'react-router-dom';
import LogoutButton from './auth/LogoutButton';
import { useSelector } from "react-redux";
import logo from '/Users/yingjiazhuo/Desktop/python/SpotifyProject/react-app/src/images/spotifyLogo.png'


const NavBar = () => {
  const sessionUser = useSelector((state) => state.session.user);
  if (sessionUser) {
    return (
      // Upper Nav Bar
      <nav style={{backgroundColor: 'black', height: '100px', display: 'flex'}}>
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
      <NavLink to='/'>

        <img className='spotifyLogo'src={logo} style={{position: 'absolute', backgroundColor: 'black', height: '99px', width:'99px', marginLeft: '10px'}}></img>
      </NavLink>

      <nav style={{backgroundColor: 'black', height: '100px', display:'flex', justifyContent:'flex-end', marginRight:'300px', alignItems: 'center', width: '99vw'}}>
        <NavLink to='/' style={{marginRight: '84%'}}><h2 style={{color:'green'}}>Music Hub</h2></NavLink>
      <li >
            <NavLink to='/login' exact={true} activeClassName='active' style={{color: 'white', fontWeight: 'bold'}}>
              Login
            </NavLink>
          </li>
          <li>
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
