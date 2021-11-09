import React, { useEffect, useState }  from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { getAPlaylist, getPlaylists } from '../../store/playlists';
import { Link, NavLink, useParams } from 'react-router-dom';
import './playlists.css'



const PlaylistPage = () => {
  const {id} = useParams();
  const playlists = useSelector(state => state.playlists)
  const eachPlaylist = []
  Object.values(playlists).map((playlist) => (eachPlaylist.push(playlist)))
  const playlist = eachPlaylist.find(onePlaylist => +id === onePlaylist.id)

  const dispatch = useDispatch()

//     useEffect(() => {
//       dispatch(getAPlaylist(id))
//   }, [dispatch]);


  return (
    <>
        <h1>Playlist page</h1>
        <p>{playlist.name}</p>

    </>

  );
}

export default PlaylistPage;