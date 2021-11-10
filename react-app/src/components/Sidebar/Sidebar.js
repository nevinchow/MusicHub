import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../NavBar';
import AddPlaylists from '../playlists/addPlaylist';
import Playlists from '../playlists/playlists';
import { useDispatch } from 'react-redux';
import { getPlaylists } from '../../store/playlists';


import './Sidebar.css'
import { getSongsForPlaylist } from '../../store/playlists_songs';

function Sidebar({artist}) {
    const [addForm, openAddForm] = useState(false)
    const [loaded, setLoaded] = useState(false);
    const [playlistId, setPlaylistId] = useState()




    const dispatch = useDispatch()
    
    useEffect(() => {
    (async() => {
      await dispatch(getPlaylists())
      dispatch(getSongsForPlaylist(playlistId))
      setLoaded(true);
    })();
    }, [dispatch, playlistId]);

      if (!loaded) {
      return null;
    }



    const openAddPlaylist = () => {
        if(!addForm) {
            openAddForm(true)
        } else {
            openAddForm(false)
            
        }
    }

   
    return (
        <>
        <div className="sidebar-container">
            <Link className="sidebar-link" to='/main' exact={true}>
            <h2 className="sidebar-link">Home</h2> </Link>
            <h2 className="sidebar-link" onClick={openAddPlaylist}>Create Playlist</h2>
            {addForm ? 
            <div className="add-playlist-container">
                <AddPlaylists openAddForm={openAddForm}/>
            </div> :
            <></>}
            <div className="playlist-list">
                <Playlists setPlaylistId={setPlaylistId}/>
            </div>
            
        </div>
        </>

    )
}


export default Sidebar