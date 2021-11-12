import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect ,useHistory} from 'react-router-dom';
import { getArtists, getSingleArtist } from '../../store/artist';
import { getAlbums, getAlbumsByArtistId } from '../../store/album';
import { useParams } from 'react-router';
import './artistPage.css';
import { getSongs } from '../../store/songs';
import { Link } from 'react-router-dom';




function ArtistPage() {
    // const artist=useSelector((state)=>Object.values(state.artist))
    const {artistId}= useParams();
    const artist=useSelector(state=>state.artist[artistId]);
    const albums=useSelector(state=>state.album[artistId])
    const dispatch = useDispatch()
    const songs=useSelector(state=>Object.values(state.songs))
    const allsongsofsingleartist=songs.filter(song=>song.artistId== +artistId)
    
    const songstorender=[]
    for (let i=0; i<=4; i++) {
         
        songstorender.push(allsongsofsingleartist[i])
    }

    useEffect(()=>{  
            dispatch(getSingleArtist(artistId))
            dispatch(getAlbumsByArtistId(artistId))
            dispatch(getSongs())

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
              <div>
                <table>
                <thead>
                    <tr>
                      <td className="table-label">#</td>
                     
                      <td className="table-label">Title</td>
                      
                      <td className="table-label">Duration</td>
                      <td className="table-label settings"></td>
                    </tr>
                  </thead>
                  <tbody>
                        {songstorender.map((song)=>{
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
                                </div></td>
                             
                              <td className="cell">{trackTime}</td>
                             
                            </tr>
                          )
                        
                        })}

                  </tbody>
                </table>
              </div>
            </div>
          </>
        );
    }
   



export default ArtistPage