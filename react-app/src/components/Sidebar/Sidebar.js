import { useState } from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../NavBar';
import AddPlaylists from '../playlists/addPlaylist';
import './Sidebar.css'

function Sidebar({artist}) {
    const [addForm, openAddForm] = useState(false)

    const openAddPlaylist = () => {
        openAddForm(true)
    }
   
    return (
        <>
        <div className="sidebar-container">
            <Link className="sidebar-link" to='/' exact={true}>
            Home </Link>
            <h2 className="sidebar-link" onClick={openAddPlaylist}>Create Playlist</h2>
            {addForm ? 
            <AddPlaylists /> :
            <></>}
            
        </div>
        </>

    )
}


export default Sidebar