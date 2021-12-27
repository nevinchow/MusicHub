
import React from 'react';
import { NavLink } from 'react-router-dom';
import LogoutButton from './auth/LogoutButton';
import { useSelector } from "react-redux";
// import logo from '/Users/yingjiazhuo/Desktop/python/SpotifyProject/react-app/src/images/spotifyLogo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpotify } from '@fortawesome/free-brands-svg-icons';

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
<<<<<<< HEAD
      <nav style={{backgroundColor: 'black', height: '100px'}}>
      <li style={{position: 'relative', left: '70%', top: '50px'}}>
            <NavLink to='/login' exact={true} activeClassName='active' style={{color: 'white', fontWeight: 'bold'}}>
=======
      <NavLink to='/'>

        <FontAwesomeIcon icon={faSpotify} className='spotifyLogo' style={{position: 'absolute', color: 'white', height: '99px', width:'99px', marginLeft: '10px'}}/>
      </NavLink>

      <nav style={{backgroundColor: 'black', height: '100px', display:'flex', justifyContent:'flex-end', marginRight:'300px', alignItems: 'center', width: '99vw'}}>
            <NavLink to='/login' exact={true} activeClassName='active' style={{color: 'white', fontWeight: 'bold', marginRight: '3%'}}>
>>>>>>> 6e5477c82c10bbdb031e6b7171df93d74c8c0e4e
              Login
            </NavLink>
            <NavLink to='/sign-up' exact={true} activeClassName='active' style={{textDecoration: 'none', color: 'white', fontWeight: 'bold', marginRight: '3%'}}>
              Sign Up
            </NavLink>
          </nav>
          </>
    )
  }
}

export default NavBar;
