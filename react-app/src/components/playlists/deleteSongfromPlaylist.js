import React  from 'react';
import { useDispatch } from "react-redux"
import { removePlaylistSong } from "../../store/playlists_songs";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinusCircle } from "@fortawesome/free-solid-svg-icons";

function RemoveFromPlaylist({songId, playlistId}) {
    const dispatch = useDispatch()

  const removeSong = async (e) => {
      const songToDelete = {
          playlistId,
          songId
      }
      dispatch(removePlaylistSong(songToDelete))
  }

    return (
        <div> 
            <FontAwesomeIcon className="plus-button" icon={faMinusCircle} onClick={removeSong}></FontAwesomeIcon>
        </div>
    )
}


export default RemoveFromPlaylist