import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, Redirect ,useHistory} from 'react-router-dom';
import { getArtists, getSingleArtist } from '../../store/artist';
import { getAlbums, getAlbumsByArtistId, getSingleAlbum } from '../../store/album';
import { useParams } from 'react-router';
import './album-page.css';


function AlbumPage() {
    const {albumId}=useParams()
    const album=useSelector(state=>state.album[albumId])
    const currentArtistId=album?.artistId
    console.log('!!!!!!!!!!!!!!!!!!!',currentArtistId)
    const currentArtist=useSelector(state=>state.artist[currentArtistId])
    const dispatch = useDispatch()


    useEffect(()=>{
        dispatch(getSingleAlbum(albumId))
        dispatch(getArtists())

    },[dispatch])

    return (
      <>
        <div className="album-page-container">
          <div className="album-page-middle">
            <h2 id="albumTitle">{album?.title}</h2>
            <p>{album?.year}</p>
            <NavLink to={`/artist/${currentArtistId}`}>
              <h2>{currentArtist?.name}</h2>
            </NavLink>
            <img className="album-art" src={album?.imageURL}></img>
          </div>
        </div>
      </>
    );
}

export default AlbumPage