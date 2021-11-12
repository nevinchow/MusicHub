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
import DisplaySong from '../playlists/DisplaySong';



function AlbumPage() {
  const dispatch = useDispatch()
    const {albumId}=useParams()
    const album=useSelector(state=>state.album[albumId])
    const currentArtistId=album?.artistId
    const currentArtist=useSelector(state=>state.artist[currentArtistId])
    const songs=useSelector(state=>state.songs)
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
                          trackNumber++
                          return (
                            <DisplaySong songId={song.id} trackNumber={trackNumber}/>

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
