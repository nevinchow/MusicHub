import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../NavBar';
import AddPlaylists from '../playlists/addPlaylist';
import Playlists from '../playlists/playlists';
import { useDispatch } from 'react-redux';
import { getPlaylists } from '../../store/playlists';


import './Sidebar.css'

function Sidebar({artist}) {
    const [addForm, openAddForm] = useState(false)
    const [loaded, setLoaded] = useState(false);

    const dispatch = useDispatch()
    
    useEffect(() => {
    (async() => {
      await dispatch(getPlaylists())
      setLoaded(true);
    })();
    }, [dispatch]);

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
                <AddPlaylists />
            </div> :
            <></>}
            <div className="playlist-list">
                <Playlists />
            </div>
            
        </div>
        </>

    )
}


export default Sidebar