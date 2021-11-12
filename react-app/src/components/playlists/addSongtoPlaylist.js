import { useParams } from "react-router"
import React, { useEffect, useState }  from 'react';
import { useDispatch } from "react-redux"
import { addSongToPlaylist } from "../../store/playlists_songs";
import { useSelector } from "react-redux";


function AddToPlaylist({songId}) {
    const {id} = useParams()
    const dispatch = useDispatch()
    const [loaded, setLoaded] = useState(false);
    const [playlistId, setPlaylistId] = useState();
    const playlists = useSelector(state => state.playlists)



  const addSong = async () => {
      const songToAdd = {
          playlistId: id,
          songId
      }

      
      dispatch(addSongToPlaylist(songToAdd))
  }

    const findPlaylist = (playlistId) => {
        console.log(playlists, 'trying to find')
    const playlist = Object.keys(playlists).find(onePlaylist => playlistId === +onePlaylist.id)
    return playlist

    }

        
    return (
        <div> 
            <p onClick={addSong}>Settings</p>
            <form>
                <select name="playlists" id="playlists">
                    {Object.keys(playlists).map((playlistId) => {
                        <option value={findPlaylist(playlistId).id}>{findPlaylist(playlistId).name}</option>
                    })}
                    
                </select>
            </form>
        </div>
    )
}


export default AddToPlaylist