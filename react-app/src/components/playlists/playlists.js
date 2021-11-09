import React, { useEffect }  from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { getPlaylists } from '../../store/playlists';
import { NavLink } from 'react-router-dom';



const Playlists = () => {
  const sessionUser = useSelector(state => state.session.user);
  const playlists = useSelector(state => state.playlists)
  const userId = sessionUser.id
  const dispatch = useDispatch()

  const eachPlaylist = []
  Object.values(playlists).map((playlist) => (eachPlaylist.push(playlist)))


    useEffect(() => {
      dispatch(getPlaylists(userId))
  }, [dispatch]);

  return (
    <>
        <h1>Playlist page</h1>
        <NavLink to='/playlists/add'>add</NavLink>
        <NavLink to='/playlists/1/edit'>edit 1</NavLink>

        {eachPlaylist.map((playlist) => {
            return (
                <div className="playlist container">
                    <h2>{playlist.name}</h2>
                    <img src={playlist.imageURL} alt={playlist.name}></img>
                    <p>{playlist.description}</p>
                </div>
                

            )
        })}
    </>

  );
}

export default Playlists;