import { useState } from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../NavBar';
import AddPlaylists from '../playlists/addPlaylist';
import Playlists from '../playlists/playlists';
import './Sidebar.css'

function Sidebar({artist}) {
    const [addForm, openAddForm] = useState(false)

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
            <Link className="sidebar-link" to='/' exact={true}>
            Home </Link>
            <h2 className="sidebar-link" onClick={openAddPlaylist}>Create Playlist</h2>
            {addForm ? 
            <div className="add-playlist-container">
                <AddPlaylists />
            </div> :
            <></>}
            <Playlists />
            
        </div>
        </>

    )
}


export default Sidebar