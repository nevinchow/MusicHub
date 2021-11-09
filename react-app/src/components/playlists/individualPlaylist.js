import React, { useEffect, useState }  from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { getAPlaylist, getPlaylists, removePlaylist } from '../../store/playlists';
import { Link, NavLink, useParams } from 'react-router-dom';
import EditPlaylists from './editPlaylist';
import { useHistory } from 'react-router';
import './playlists.css'



const PlaylistPage = () => {
  const {id} = useParams();
  const history = useHistory();
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

  const deletePlaylist = async () => {
    const deleted = await dispatch(removePlaylist(id));
            if(!deleted) {
              history.push(`/api/main`)

            }
  }


  return (
    <>
    <div className="playlist-page-container">
        <img src={playlist.imageURL} alt={playlist.name}/>
        <div className="playlist-options">
          <h2 className="edit-button" onClick={editFormOpen}>Edit</h2>
          <h2 className="delete-button" onClick={deletePlaylist}>Delete</h2>

        </div>
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