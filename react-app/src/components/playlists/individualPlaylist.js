import React, { useEffect, useState }  from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { getAPlaylist, getPlaylists, removePlaylist } from '../../store/playlists';
import { getSongsForPlaylist } from '../../store/playlists_songs';
import { Link, NavLink, useParams } from 'react-router-dom';
import EditPlaylists from './editPlaylist';
import { useHistory } from 'react-router';
import './playlists.css'
import { getAlbums } from '../../store/album';
import { getArtists } from '../../store/artist';
import AddToPlaylist from './addSongtoPlaylist';



const PlaylistPage = () => {
  const {id} = useParams();
  const history = useHistory();
  const [settings, setSettings] = useState(false)
  const [songId, setSongId] = useState()
  const playlists = useSelector(state => state.playlists)
  const playlistSongs = useSelector(state => state.playlist_songs)
  const songsState = useSelector(state => state.songs)
  const albums = useSelector(state => state.album)
  const artists = useSelector(state => state.artist)
  const eachPlaylist = []
  const eachSongId = []
  const eachAlbum = []
  const eachArtist = []
  const allSongs = []
  Object.values(playlists).map((playlist) => (eachPlaylist.push(playlist)))
  Object.values(playlistSongs).map((songId) => (eachSongId.push(songId)))
  Object.values(songsState).map((song) => (allSongs.push(song)))
  Object.values(albums).map((album) => (eachAlbum.push(album)))
  Object.values(artists).map((artist) => (eachArtist.push(artist)))
  const playlist = eachPlaylist.find(onePlaylist => +id === onePlaylist.id)
  const [editForm, openEditForm] = useState(false)
  const [loaded, setLoaded] = useState(false);
  const songs = [];
  eachSongId.forEach((songId) => {
    songId.forEach((song) => {
      if(song.playlistId === +id) {
        const oneSong = allSongs.find(aSong => song.songId === aSong.id)
        songs.push(oneSong)
      }
    })
  })
  console.log(songs, "why is it duplicating")
  const dispatch = useDispatch()
  let trackNumber = 0;

 useEffect(() => {
    (async() => {
      await dispatch(getPlaylists())
      await dispatch(getAlbums())
      await dispatch(getArtists())
      dispatch(getSongsForPlaylist(id))
      setLoaded(true);
    })();
  }, [dispatch]);

    if (!loaded) {
    return null;
  }

  const editFormOpen = () => {
      if(!editForm) {
        openEditForm(true)
      } else {
        openEditForm(false)
      }
  }

  const deletePlaylist = async () => {
    const deleted = await dispatch(removePlaylist(id));
            if(!deleted) {
              history.push(`/main`)

            }
  }


  const openSettings = async (e) => {
    console.log("on click", songId)
    setSongId(e.target.value)
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


  return (
    <>
    <div className="playlist-page-container">
      <div className="image-container">
        <img className="playlist-img" src={playlist.imageURL} alt={playlist.name}/>
        <div className="playlist-details">
          <h1>{playlist.name}</h1>
          <p>{playlist.description}</p>
        </div>
        
      </div>
        <div className="playlist-options">
          <h2 className="edit-button" onClick={editFormOpen}>Edit</h2>
          <h2 className="delete-button" onClick={deletePlaylist}>Delete</h2>

        </div>
        {editForm ? 
        <EditPlaylists /> :
        <></>}
        

        <div className="song-display-container">
          <table className="song-table">
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
              <div className="settings-menu">{settings ? <AddToPlaylist songId={songId}/> : <></>}</div>

              {songs.map((song) => {
                console.log('mapping songs', song.name)
                //turn duration to string
                trackNumber++
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
                //get album for song
                const thisAlbum = eachAlbum.find(oneAlbum => song.albumId === oneAlbum.id)
                //get artist for song
                const thisArtist = eachArtist.find(oneArtist => song.artistId === oneArtist.id)

                return (
                  <tr className="table-row" key={song.id}>
                    <td className="cell track">{trackNumber}</td>
                    <td className="cell"><img className="album-thumbnail" src={thisAlbum.imageURL} alt={thisAlbum.name}></img></td>
                    <td className="cell"><div className="song-name-row">
                      <p>{song.name}</p>
                      <Link to={`/albums/${thisArtist.id}`}>{thisArtist.name}</Link></div></td>
                    <td className="cell"><Link to={`/albums/${thisAlbum.id}`}>{thisAlbum.title}</Link></td>
                    <td className="cell">{trackTime}</td>
                    <td><button value={song.id} onClick={openSettings}>edit</button></td>
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

export default PlaylistPage;