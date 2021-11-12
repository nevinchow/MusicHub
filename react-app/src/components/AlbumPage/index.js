import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, Redirect ,useHistory} from 'react-router-dom';
import { getArtists, getSingleArtist } from '../../store/artist';
import { getAlbums, getAlbumsByArtistId, getSingleAlbum } from '../../store/album';
import { useParams } from 'react-router';
import './album-page.css';
import SongTile from '../songs/Song';
import { getSongs } from '../../store/songs';
import { Link } from 'react-router-dom';



function AlbumPage() {
  const dispatch = useDispatch()
    const {albumId}=useParams()
    const album=useSelector(state=>state.album[albumId])
    const currentArtistId=album?.artistId
    const currentArtist=useSelector(state=>state.artist[currentArtistId])
    const songs=useSelector(state=>state.songs)
    const songsArray=Object.values(songs)
    const filteredSongArray=[]


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
        <div className="album-page-container">
          <div className="album-page-middle">
            <h2 id="albumTitle">{album?.title}</h2>
            <p>{album?.year}</p>
            <NavLink to={`/artist/${currentArtistId}`}>
              <h2>{currentArtist?.name}</h2>
            </NavLink>
            <img className="album-art" src={album?.imageURL}></img>
              <div>
                <table>
                <thead>
                    <tr>
                      <td className="table-label">#</td>
                      <td className="table-label"></td>
                      <td className="table-label">Title</td>
                      <td className="table-label">Album</td>
                      <td className="table-label">Duration</td>
                      <td className="table-label settings"></td>
                    </tr>
                  </thead>
                  <tbody>
                        {filteredSongArray.map((song)=>{
                          const minutes = Math.floor(song.duration / 60)
                          const seconds = (song.duration % 60)
                          let newSeconds;
                          if (seconds < 10) {
                            newSeconds = `0${seconds}`
                          } else {
                            newSeconds = seconds
                          }
                          let trackTime = ``
                          if (minutes === 0 ) {
                            trackTime = `${minutes}: ${newSeconds}`
                          } else {
                            trackTime = `${minutes} : ${newSeconds}`
          
                          }

                          return (
                            <tr className="table-row" key={song.id}>
                              <td className="cell track">{song.id}</td>
                             
                              <td className="cell"><div className="song-name-row">
                                <p>{song.name}</p>
                                <Link className="song-info-links" to={`/artist/${currentArtist.id}`}>{currentArtist.name}</Link></div></td>
                              <td className="cell"><Link className="song-info-links" to={`/albums/${album.id}`}>{album.title}</Link></td>
                              <td className="cell">{trackTime}</td>
                             
                            </tr>
                          )
                        
                        })}

                  </tbody>
                </table>
              </div>
          </div>
        </div>
      </>
    );
}

export default AlbumPage