import React, { useEffect, useState }  from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { getPlaylists } from '../../store/playlists';
import { Link, NavLink } from 'react-router-dom';
import './playlists.css'



const Playlists = () => {
  const sessionUser = useSelector(state => state.session.user);
  const playlists = useSelector(state => state.playlists)
  const userId = sessionUser.id
  const [playlistId, setPlaylistId] = useState()
  const dispatch = useDispatch()

  const eachPlaylist = []
  Object.values(playlists).map((playlist) => (eachPlaylist.push(playlist)))


    useEffect(() => {
      dispatch(getPlaylists(userId))
  }, [dispatch]);

  const getId = (id) => {
    setPlaylistId(id)
  }

  return (
    <>
        <h1>Playlist page</h1>
        {/* <NavLink to='/playlists/add'>add</NavLink>
        <NavLink to='/playlists/1/edit'>edit 1</NavLink> */}

        {eachPlaylist.map((playlist) => {
            return (
                <div key={playlist.id} className="playlist container">
                    <Link to={`/playlists/${playlist.id}`}><h2 className="playlist-name">{playlist.name}</h2></Link>
                    {/* <img className="image" src={playlist.imageURL} alt={playlist.name}></img> */}
                    <p className="playlist-description">{playlist.description}</p>
                </div>
                

            )
        })}
    </>

  );
}

export default Playlists;