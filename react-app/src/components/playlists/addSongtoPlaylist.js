import { useParams } from "react-router"
import React, { useEffect, useState }  from 'react';
import { useDispatch } from "react-redux"
import { addSongToPlaylist } from "../../store/playlists_songs";
import { useSelector } from "react-redux";
import { getSongsForPlaylist } from "../../store/playlists_songs";


function AddToPlaylist({songId, setSettings}) {
    const {id} = useParams()
    const dispatch = useDispatch()
    const [loaded, setLoaded] = useState(false);
    const playlists = useSelector(state => state.playlists)



  const addSong = async (e) => {
      const playlistId = e.target.value
      const songToAdd = {
          playlistId,
          songId
      }

      dispatch(addSongToPlaylist(songToAdd))
      await dispatch(getSongsForPlaylist(id))

      setSettings(false)
  }

    const findPlaylist = (playlistId) => {
    const playlist = Object.keys(playlists).find(onePlaylist => +playlistId === +onePlaylist)

    return playlists[playlist]

    }

        
    return (
        <div> 
            <form>
                <select className="select-playlist" name="playlists" id="playlists" onChange={addSong}>
                    <option value="" selected disabled hidden>Choose A Playlist</option>
                    {Object.keys(playlists).map((playlistId) => {
                        return (
                            <option 
                            key={findPlaylist(playlistId).id}
                            value={findPlaylist(playlistId).id}>
                                {findPlaylist(playlistId).name}
                            </option>
                        )
                    })}
                    
                </select>
            </form>
        </div>
    )
}


export default AddToPlaylist