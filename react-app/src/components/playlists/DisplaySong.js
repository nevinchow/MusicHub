import { useParams, Link } from "react-router-dom"
import React, { useEffect, useState }  from 'react';
import { useDispatch } from "react-redux"
import { addSongToPlaylist } from "../../store/playlists_songs";
import { useSelector } from "react-redux";
import Song from '../songs/Song'
import AddToPlaylist from "./addSongtoPlaylist";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function DisplaySong({songId}) {
  const albums = useSelector(state => state.album)
  const artists = useSelector(state => state.artist)
  const song = useSelector(state => state.songs[songId])
  const [play, showPlay] = useState(false);
  const [settings, setSettings] = useState(false)



    const openSettings = async (e) => {
    if(!settings) {
      setSettings(true)
    } else {
      setSettings(false)
    }
  }

  const closeSettings = async () => {
    
    if(settings) {
      setSettings(false)
    } 
  }

  const showPlayButton = () => {
    if(!play) {
      showPlay(true)
    } else {
      showPlay(false)
    }
  }

    const hidePlayButton = () => {
      showPlay(false)
  }

  const startPlay = () => {
    console.log('play')
  }

  let trackNumber = 0

  trackNumber++;
  const minutes = Math.floor(song.duration / 60);
  const seconds = song.duration % 60;
  let newSeconds;
  if (seconds < 10) {
    newSeconds = `0${seconds}`;
  } else {
    newSeconds = seconds;
  }
  let trackTime = ``;
  if (minutes === 0) {
    trackTime = `${minutes}: ${newSeconds}`;
  } else {
    trackTime = `${minutes} : ${newSeconds}`;
  }
  //get album for song
  const thisAlbum = Object.keys(albums).find(
    (oneAlbum) => song.albumId === +oneAlbum)
  
  //get artist for song
  const thisArtist = Object.keys(artists).find(
    (oneArtist) => song.artistId === +oneArtist
  );

        
    return (
        <> 
        <tr
            className="table-row"
            // key={song.id}
            onMouseEnter={showPlayButton}
            onMouseLeave={hidePlayButton}
          >
            {play ? (
              <td className="cell">
                {/* <Song songId={song.id} /> */}
              </td>
            ) : (
              <></>
            )}
            <td className="cell track">{trackNumber}</td>
            <td className="cell">
              <img
                className="album-thumbnail"
                src={albums[thisAlbum].imageURL}
                alt={albums[thisAlbum].name}
              ></img>
            </td>
            <td className="cell">
              <div className="song-name-row">
                <p>{song.name}</p>
                <Link
                  className="song-info-links"
                  to={`/artist/${artists[thisArtist].id}`}
                >
                  {artists[thisArtist].name}
                </Link>
              </div>
            </td>
            <td className="cell">
              <Link
                className="song-info-links"
                to={`/albums/${albums[thisAlbum].id}`}
              >
                {albums[thisAlbum].title}
              </Link>
            </td>
            <td className="cell">{trackTime}</td>
            <td><FontAwesomeIcon className="plus-button" id={song.id} onClick={openSettings} icon={faPlus} /> 
            {settings ? <AddToPlaylist songId={songId}/> : <></>}
            </td>
        
          </tr>
        </>
    )
}


export default DisplaySong

