import { useParams } from "react-router"
import React, { useState }  from 'react';
import { useDispatch } from "react-redux"
import { removePlaylistSong } from "../../store/playlists_songs";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinusCircle } from "@fortawesome/free-solid-svg-icons";

function RemoveFromPlaylist({songId, playlistId}) {
    const {id} = useParams()
    const dispatch = useDispatch()

  const removeSong = async (e) => {
      const songToDelete = {
          playlistId,
          songId
      }
      dispatch(removePlaylistSong(songToDelete))
    //   dispatch(getSongsForPlaylist(id))
  }

    return (
        <div> 
            <FontAwesomeIcon className="plus-button" icon={faMinusCircle} onClick={removeSong}></FontAwesomeIcon>
        </div>
    )
}


export default RemoveFromPlaylist