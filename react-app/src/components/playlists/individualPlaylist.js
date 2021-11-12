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
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay } from '@fortawesome/free-solid-svg-icons'
import DisplaySong from './DisplaySong';

const PlaylistPage = () => {
  const {id} = useParams();
  const history = useHistory();
  const dispatch = useDispatch()
  const [editForm, openEditForm] = useState(false)
  const [loaded, setLoaded] = useState(false);

  const playlists = useSelector(state => state.playlists)
  const playlist = Object.keys(playlists).find(onePlaylist => +id === +onePlaylist)
  const playlistSongs = useSelector(state => state.playlist_songs)
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
    songId.forEach((song) => {
      if(song.playlistId === +id) {
        const oneSong = Object.keys(songsState).find(aSong => song.songId === +aSong)
        songs.push(songsState[oneSong])
      }
    })
  })


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
              {songs.map((song) => {
                return (
                  <DisplaySong songId={song.id}/>
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