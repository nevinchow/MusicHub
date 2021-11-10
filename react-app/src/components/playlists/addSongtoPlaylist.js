import { useParams } from "react-router"
import React, { useEffect, useState }  from 'react';
import { useDispatch } from "react-redux"
import { addSongToPlaylist } from "../../store/playlists_songs";


function AddToPlaylist({songId}) {
    const {id} = useParams()
    const dispatch = useDispatch()
    const [loaded, setLoaded] = useState(false);


  const addSong = async () => {
      const songToAdd = {
          playlistId: id,
          songId
      }

      
      dispatch(addSongToPlaylist(songToAdd))
  }
    return (
        <div> <p onClick={addSong}>Settings</p></div>
    )
}


export default AddToPlaylist