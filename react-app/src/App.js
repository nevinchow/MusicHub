import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import LoginForm from './components/auth/LoginForm';
import SignUpForm from './components/auth/SignUpForm';
import MainPage from'./components/Main/index'
import NavBar from './components/NavBar';
import ProtectedRoute from './components/auth/ProtectedRoute';
import UsersList from './components/UsersList';
import User from './components/User';
import { authenticate } from './store/session';

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

function App() {
  const [loaded, setLoaded] = useState(false);
  const dispatch = useDispatch();


  useEffect(() => {
    (async() => {
      await dispatch(authenticate());
      setLoaded(true);
      dispatch(getSongs())
      // dispatch(getPlaylists())
    })();
  }, [dispatch]);

  if (!loaded) {
    return null;
  }

  return (
    <BrowserRouter>
      <NavBar />
      <Sidebar />

      <Switch>
        <Route path='/albums/:albumId/reviews' >
          <ReviewsPage />
        </Route>
        <Route path='/albums/:albumId' >
          <AlbumPage />
        </Route>
        <Route path='/artist/:artistId' >
          <ArtistPage />
        </Route>
        <Route path='/main' exact={true}>
          <MainPage />
        </Route>
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
        <Route path='/playlists' exact={true} >
          <Playlists/>
        </Route>
        <Route path='/playlists/add' exact={true} >
          <AddPlaylists/>
        </Route>
        <Route path='/playlists/:id/edit' exact={true} >
          <EditPlaylists/>
        </Route>
        <Route path='/playlists/:id' loaded={loaded}>
          <PlaylistPage/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
