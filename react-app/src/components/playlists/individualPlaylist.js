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
  const dispatch = useDispatch()
  const [settings, setSettings] = useState(false)
  const [songId, setSongId] = useState()
  const [editForm, openEditForm] = useState(false)
  const [loaded, setLoaded] = useState(false);

  const playlists = useSelector(state => state.playlists)
  const playlist = Object.keys(playlists).find(onePlaylist => +id === +onePlaylist)
  const playlistSongs = useSelector(state => state?.playlist_songs)
  const songsState = useSelector(state => state.songs)
  const albums = useSelector(state => state.album)
  const artists = useSelector(state => state.artist)
  const songs = [];
 useEffect(() => {
    (async() => {
      await dispatch(getPlaylists())
      await dispatch(getAlbums())
      await dispatch(getArtists())
      await dispatch(getSongsForPlaylist(id))
      setLoaded(true);
    })();
  }, [dispatch, id]);

    if (!loaded) {
    return null;
  }

  playlistSongs.forEach((songId) => {
    console.log('for each', songId)
    songId.forEach((song) => {
      console.log(song, 'nested array song')
      if(song.playlistId === +id) {
        const oneSong = Object.keys(songsState).find(aSong => song.songId === +aSong)
        songs.push(songsState[oneSong])
      }
    })
  })

  let trackNumber = 0;

  const editFormOpen = () => {
      if(!editForm) {
        openEditForm(true)
      } else {
        openEditForm(false)
      }
  }

  const deletePlaylist = async () => {
    dispatch(removePlaylist(id));
    history.push(`/main`)
  }


  const openSettings = async (e) => {
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

  const getRandomAlbumImg = () => {
    const images = []
    songs.forEach(song => {
      const thisAlbum = Object.keys(albums).find(oneAlbum => song.albumId === +oneAlbum)
      if(!images.includes(albums[thisAlbum].imageURL)) {
        images.push(albums[thisAlbum].imageURL)
      }
      
      

    })

    while(images.length < 5) {
    images.push('https://upload.wikimedia.org/wikipedia/commons/3/3c/No-album-art.png')
    }
    
    return images

  }



  return (
    <>
    <div className="playlist-page-container">
      <div className="image-container">
        {songs.length ? 
        
        
        <div className="image-collage">
          <img className="playlist-img" src={getRandomAlbumImg()[0]} alt={playlists[playlist].name}/>
          <img className="playlist-img" src={getRandomAlbumImg()[1]} alt={playlists[playlist].name}/>
          <img className="playlist-img" src={getRandomAlbumImg()[2]} alt={playlists[playlist].name}/>
          <img className="playlist-img" src={getRandomAlbumImg()[3]} alt={playlists[playlist].name}/> 
        </div>
      : <img className="default-playlist-img" src="https://upload.wikimedia.org/wikipedia/commons/3/3c/No-album-art.png" alt="default playlist"></img>}
        

        <div className="playlist-details">
          <h1>{playlists[playlist].name}</h1>
          <p>{playlists[playlist].description}</p>
        </div>
        
      </div>
        <div className="playlist-options">
          <h2 className="edit-button" onClick={editFormOpen}>Edit</h2>
          <h2 className="delete-button" onClick={deletePlaylist}>Delete</h2>

        </div>
        {editForm ? 
        <EditPlaylists editFormOpen={editFormOpen}/> :
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
                const thisAlbum = Object.keys(albums).find(oneAlbum => song.albumId === +oneAlbum)

                //get artist for song
                const thisArtist = Object.keys(artists).find(oneArtist => song.artistId === +oneArtist)

                return (
                  <tr className="table-row" key={song.id}>
                    <td className="cell track">{trackNumber}</td>
                    <td className="cell"><img className="album-thumbnail" src={albums[thisAlbum].imageURL} alt={albums[thisAlbum].name}></img></td>
                    <td className="cell"><div className="song-name-row">
                      <p>{song.name}</p>
                      <Link className="song-info-links" to={`/artist/${artists[thisArtist].id}`}>{artists[thisArtist].name}</Link></div></td>
                    <td className="cell"><Link className="song-info-links" to={`/albums/${albums[thisAlbum].id}`}>{albums[thisAlbum].title}</Link></td>
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