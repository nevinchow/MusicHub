import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect ,useHistory} from 'react-router-dom';
import { getArtists, getSingleArtist } from '../../store/artist';
import { getAlbums, getAlbumsByArtistId } from '../../store/album';
import { useParams } from 'react-router';
import './artistPage.css';




function ArtistPage() {
    // const artist=useSelector((state)=>Object.values(state.artist))
    const {artistId}= useParams();
    console.log(artistId)
    const artist=useSelector(state=>state.artist[artistId]);
    const albums=useSelector(state=>state.album[artistId])
    const dispatch = useDispatch()
 

    useEffect(()=>{  
            dispatch(getSingleArtist(artistId))
            dispatch(getAlbumsByArtistId(artistId))

    },[dispatch, artistId])

        return (
          <>
            <div className="artist-page">
              <div className="artist-page-container">
                <div className="artist-page-header">
                  <img
                    className="artist-header-img"
                    src={artist?.headerURL}
                  ></img>
                  <h2>{artist?.name}</h2>
                  <h2> {albums?.title}</h2>
                  <p> {albums?.year}</p>
                  Album
                </div>
                <div className="artist-page-middle">
                  <div className="artist-info">
                    <img className="album-art" src={albums?.imageURL}></img>
                    <p>{artist?.bio}</p>
                  </div>
                </div>
              </div>
            </div>
          </>
        );
    }
   



export default ArtistPage