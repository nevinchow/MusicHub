import React, { useEffect, useState }  from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { getAPlaylist, getPlaylists } from '../../store/playlists';
import { Link, NavLink, useParams } from 'react-router-dom';
import EditPlaylists from './editPlaylist';
import './playlists.css'



const PlaylistPage = () => {
  const {id} = useParams();
  const playlists = useSelector(state => state.playlists)
  const eachPlaylist = []
  Object.values(playlists).map((playlist) => (eachPlaylist.push(playlist)))
  const playlist = eachPlaylist.find(onePlaylist => +id === onePlaylist.id)
  const [editForm, openEditForm] = useState(false)

  const dispatch = useDispatch()

    useEffect(() => {
      dispatch(getPlaylists())
  }, [dispatch]);

  const editFormOpen = () => {
      console.log(editForm)
      if(!editForm) {
        openEditForm(true)
      } else {
        openEditForm(false)
      }
  }


  return (
    <>
    <div className="playlist-page-container">
        <img src={playlist.imageURL} alt={playlist.name}/>
        <h2 className="edit-button" onClick={editFormOpen}>Edit</h2>
        {editForm ? 
        <EditPlaylists /> :
        <></>}
        <h1>{playlist.name}</h1>
        <p>{playlist.description}</p>
    </div>
        

    </>

  );
}

export default PlaylistPage;