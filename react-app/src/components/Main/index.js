import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect ,useHistory} from 'react-router-dom';
import ArtistTile from '../ArtistTile';
import { getArtists } from '../../store/artist';
import { getAlbums } from '../../store/album';
import AlbumTile from '../AlbumTile';
import MusicQueue from '../MusicQueue';
import Song from '../songs/Song'
import {removeSong, addOneSong, addNextSong} from "../../store/musicQueue"
import Sidebar from '../Sidebar/Sidebar';
import './main.css'

import { NavLink } from 'react-router-dom';


function MainPage() {
  const dispatch = useDispatch();
  const artists=useSelector((state)=>Object.values(state.artist))
  const albums=useSelector((state)=>Object.values(state.album))
  const user = useSelector((state) => state.session.user)

  useEffect(()=>{
      dispatch(getArtists())
      dispatch(getAlbums())
  },[dispatch])


  return (

      <>
        <div className="main-page">
          {!user ? <></> : <Sidebar/>}
          <div className='wrapper'>
            <div className='main-page-header'></div>
            <h2 className='welcome'>Welcome, {user.username}</h2>
          <div className="main-page-container">
            <h2 className='artists-header'>Popular Artists</h2>
            <div className='artists-container'>

            {artists.map((artist) => (
              <div className='artistTile-container'>
                <ArtistTile artist={artist} />
              </div>

            ))}
            </div>
              <h2 className='albums-header'>Popular Albums</h2>
            <div className='albums-container'>

            {albums.map((album) => (
              <>
              <div className='albumTile-container'>
              <AlbumTile album={album} />
              <div className='reviews-link-container'>
              <NavLink to={`/albums/${album.id}/reviews`} className='review-link'>☆ Reviews ☆</NavLink>
              </div>
              </div>
              </>
            ))}

            </div>
            <MusicQueue />
          </div>
          </div>
        </div>
      </>


  );



}



export default MainPage
