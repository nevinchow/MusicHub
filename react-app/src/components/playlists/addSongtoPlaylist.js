import { useParams } from "react-router"
import React, { useEffect, useState }  from 'react';
import { useDispatch } from "react-redux"
import { addSongToPlaylist } from "../../store/playlists_songs";
import { useSelector } from "react-redux";


function AddToPlaylist({songId}) {
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

      console.log(songToAdd, 'added song')

      
      dispatch(addSongToPlaylist(songToAdd))
  }

    const findPlaylist = (playlistId) => {
    const playlist = Object.keys(playlists).find(onePlaylist => +playlistId === +onePlaylist)

    return playlists[playlist]

    }

        
    return (
        <div> 
            <form>
                <select name="playlists" id="playlists" onChange={addSong}>
                    {Object.keys(playlists).map((playlistId) => {
                        return (
                            <option 
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