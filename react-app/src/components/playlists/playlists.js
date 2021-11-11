import React, { useEffect, useState }  from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { getPlaylists } from '../../store/playlists';
import { Link, NavLink } from 'react-router-dom';
import './playlists.css'



const Playlists = ({setPlaylistId}) => {
  const playlists = useSelector(state => state.playlists)
  const dispatch = useDispatch()

    useEffect(() => {
      dispatch(getPlaylists())
  }, [dispatch]);

  return (
    <>
        {Object.keys(playlists).map((key) => {
            return (
                <div key={playlists[key].id} className="playlist container">
                    <Link to={`/playlists/${playlists[key].id}`}><h2 id={playlists[key].id} className="sidebar-link playlist-name">{playlists[key].name}</h2></Link>
                </div>
            )
        })}
    </>

  );
}

export default Playlists;