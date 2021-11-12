import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import LoginForm from './components/auth/LoginForm';
import SignUpForm from './components/auth/SignUpForm';
import MainPage from'./components/Main/index'
import NavBar from './components/NavBar';
import ProtectedRoute from './components/auth/ProtectedRoute';
import UsersList from './components/UsersList';
import User from './components/User';
import { authenticate } from './store/session';
import Player from './components/MusicPlayer/index'


import ArtistPage from './components/ArtistPage';
import AlbumPage from './components/AlbumPage'

import { getSongs } from './store/songs';
import { getPlaylists } from './store/playlists';
import { useSelector } from 'react-redux';
import Playlists from './components/playlists/playlists';
import AddPlaylists from './components/playlists/addPlaylist';
import EditPlaylists from './components/playlists/editPlaylist';
import Sidebar from './components/Sidebar/Sidebar';
import PlaylistPage from './components/playlists/individualPlaylist';
import ReviewsPage from './components/ReviewsPage'
import SearchResults from './components/SearchPage/SearchResults';
import SearchBar from './components/SearchPage/SearchBar';

function App() {
  const [loaded, setLoaded] = useState(false);
  const dispatch = useDispatch();
  const user = useSelector(state => state.session.user)


  useEffect(() => {
    (async() => {
      await dispatch(authenticate());
      await dispatch(getSongs())
      await dispatch(getPlaylists())
      setLoaded(true);
      
    })();
  }, [dispatch]);

  if (!loaded) {
    return null;
  }

  return (
    <BrowserRouter>
      {/* <NavBar /> */}
      {!user ? <Redirect to='/login'/> : <Sidebar />}

      <Switch>

        <Route path='/search' >
          <SearchBar/>
          
        </Route>
       

        <ProtectedRoute path='/albums/:albumId/reviews' >

          <ReviewsPage />
        </ProtectedRoute>
        <ProtectedRoute path='/albums/:albumId' >
          <AlbumPage />
        </ProtectedRoute>
        <ProtectedRoute path='/artist/:artistId' >
          <ArtistPage />
        </ProtectedRoute>
        <ProtectedRoute path='/main' exact={true}>
          <MainPage />
        </ProtectedRoute>
        <Route path='/login' exact={true}>
          <LoginForm />
        </Route>
        <Route path='/sign-up' exact={true}>
          <SignUpForm />
        </Route>
        <ProtectedRoute path='/users' exact={true} >
          <UsersList/>
        </ProtectedRoute>
        <ProtectedRoute path='/users/:userId' exact={true} >
          <User />
        </ProtectedRoute>
        <ProtectedRoute path='/' exact={true} >
          <h1>Home Page</h1>
        </ProtectedRoute>
        <ProtectedRoute path='/playlists' exact={true} >
          <Playlists/>
        </ProtectedRoute>
        <ProtectedRoute path='/playlists/add' exact={true} >
          <AddPlaylists/>
        </ProtectedRoute>
        <ProtectedRoute path='/playlists/:id/edit' exact={true} >
          <EditPlaylists/>
        </ProtectedRoute>
        <ProtectedRoute path='/playlists/:id' loaded={loaded}>
          <PlaylistPage/>
        </ProtectedRoute>
      </Switch>
      {!user ? <></> : <Player />}

        
    </BrowserRouter>
  );
}

export default App;
