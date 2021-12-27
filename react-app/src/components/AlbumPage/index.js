import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, Redirect ,useHistory} from 'react-router-dom';
import { getArtists, getSingleArtist } from '../../store/artist';
import { getAlbums, getAlbumsByArtistId, getSingleAlbum } from '../../store/album';
import { useParams } from 'react-router';
import './album-page.css';
import '../playlists/playlists.css'
import SongTile from '../songs/Song';
import { getSongs } from '../../store/songs';
import { Link } from 'react-router-dom';
import DisplaySong from '../playlists/DisplaySong';
import Sidebar from '../Sidebar/Sidebar';



function AlbumPage() {
  const dispatch = useDispatch()
    const {albumId}=useParams()
    const album=useSelector(state=>state.album[albumId])
    const currentArtistId=album?.artistId
    const currentArtist=useSelector(state=>state.artist[currentArtistId])
    const songs=useSelector(state=>state.songs)
    const user = useSelector((state) => state.session.user);
    const songsArray=Object.values(songs)
    const filteredSongArray=[]
    let trackNumber = 0


    useEffect(()=>{
        dispatch(getSingleAlbum(albumId))
        dispatch(getArtists())
        dispatch(getSongs())

    },[dispatch])

    for (let i=0; i<songsArray.length; i++) {
      let song=songsArray[i]

      if (song.albumId== +albumId) {
        filteredSongArray.push(song)
      }

    }
    return (
      <>
        {!user ? <></> : <Sidebar/>}
        <div className="album-page-container">
            <div className='album-page-header'>
            <img className="album-art2" src={album?.imageURL}></img>
            <div className='album-details-header'>
            <p className='album-tag'>ALBUM</p>
            <h2 className="albumTitle">{album?.title}</h2>
            <div className='album-image-year'>
                <img className='album-artist-photo' src={currentArtist.profileURL}></img>
              <NavLink to={`/artist/${currentArtistId}`}>
                <h2 className='album-artist-name'>{currentArtist?.name}</h2>
              </NavLink>

              <p className='album-year2'>- {album?.year}</p>
            </div>
            </div>
            </div>
            <div className='song-display-container'>
              <table className="song-table">
            <thead>
              <tr className="song-labels">
                <th style={{width:'5%'}} className="table-label">#</th>
                <th style={{width:'5%'}} className="table-label"></th>
                <th style={{width:'20%'}} className="table-label">Title</th>
                <th style={{width:'20%'}} className="table-label">Album</th>
                <th style={{width:'10%'}} className="table-label">Duration</th>
                <th style={{width:'10%'}} className="table-label settings"></th>
                    </tr>
                  </thead>
                  <tbody>
                        {filteredSongArray.map((song)=>{
                          trackNumber++
                          return (
                            <DisplaySong songId={song.id} trackNumber={trackNumber}/>

                          )

                        })}
                  </tbody>
                </table>
            </div>
            <div className='spacing'>

            </div>
          </div>
      </>
    );
}

export default AlbumPage
