import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect ,useHistory} from 'react-router-dom';
import { getArtists, getSingleArtist } from '../../store/artist';
import { getAlbums, getAlbumsByArtistId } from '../../store/album';
import { useParams } from 'react-router';
import './artistPage.css';
import { getSongs } from '../../store/songs';
import { Link } from 'react-router-dom';
import DisplaySong from '../playlists/DisplaySong';
import AlbumTile from '../AlbumTile';
import { NavLink } from 'react-router-dom';
import Sidebar from '../Sidebar/Sidebar';



function ArtistPage() {
    // const artist=useSelector((state)=>Object.values(state.artist))
    const {artistId}= useParams();
    const artist=useSelector(state=>state.artist[artistId]);
    const album=useSelector(state=>state.album[artistId])
    const user = useSelector((state) => state.session.user);
    const dispatch = useDispatch()
    const songs=useSelector(state=>Object.values(state.songs))
    const allsongsofsingleartist=songs.filter(song=>song.artistId== +artistId)
    let trackNumber = 0
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
            {!user ? <></> : <Sidebar />}
            <div className="artist-page-container">
              <div className="artist-page-header">
                <img
                  className="artist-header-img"
                  src={artist?.headerURL}
                ></img>
                <h2 className="artist-page-name">{artist?.name}</h2>
              </div>
              <div className="about-container">
                <div className="about-bio-container">
                  <h2 className="about">About</h2>
                  <img
                    className="artist-bio-image"
                    src={artist?.biopictureURL}
                  ></img>
                  <p className="artist-bio">{artist?.bio}</p>
                </div>
              </div>
              <div className="discography-container">
                <h2 className="discography">Discography</h2>
                <div className="disco">
                  <div className="albumTile-container">
                    <AlbumTile album={album} />
                    <NavLink
                      to={`/albums/${album.id}/reviews`}
                      className="review-link"
                    >
                      Reviews
                    </NavLink>
                  </div>
                </div>
              </div>

              <div className="song-display-container">
                <table className="song-table">
                  <thead>
                    <tr className="song-labels">
                      <th style={{ width: "10%" }} className="table-label">
                        #
                      </th>
                      <th style={{ width: "10%" }} className="table-label"></th>
                      <th style={{ width: "20%" }} className="table-label">
                        Title
                      </th>
                      <th style={{ width: "20%" }} className="table-label">
                        Album
                      </th>
                      <th style={{ width: "10%" }} className="table-label">
                        Duration
                      </th>
                      <th
                        style={{ width: "10%" }}
                        className="table-label settings"
                      ></th>
                    </tr>
                  </thead>
                  <tbody>
                    {songstorender.map((song) => {
                      trackNumber++;
                      return (
                        <DisplaySong
                          songId={song.id}
                          trackNumber={trackNumber}
                        />
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </>
        );
    }




export default ArtistPage
