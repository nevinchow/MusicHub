import { useParams } from "react-router"
import React, { useState }  from 'react';
import { useDispatch } from "react-redux"
import { removePlaylistSong } from "../../store/playlists_songs";
import { useSelector } from "react-redux";
import { getSongsForPlaylist } from "../../store/playlists_songs";


function RemoveFromPlaylist({songId, playlistId}) {
    const {id} = useParams()
    const dispatch = useDispatch()

  const removeSong = async (e) => {
      const songToDelete = {
          playlistId,
          songId
      }
      console.log('dispatched')
      dispatch(removePlaylistSong(songToDelete))
    //   dispatch(getSongsForPlaylist(id))
  }

    return (
        <div> 
            <button onClick={removeSong}>Remove</button>
        </div>
    )
}


export default RemoveFromPlaylist