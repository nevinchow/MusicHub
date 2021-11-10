import { useParams } from "react-router"
import React, { useEffect, useState }  from 'react';
import { useDispatch } from "react-redux"
import { addSongToPlaylist } from "../../store/playlists_songs";


function AddToPlaylist({songId}) {
    const {id} = useParams()
    const dispatch = useDispatch()
    const [loaded, setLoaded] = useState(false);


//      useEffect(() => {
//     (async() => {
//       setLoaded(true);
//     })();
//   }, [dispatch]);

//     if (!loaded) {
//     return null;
//   }

  const addSong = async () => {
      const songToAdd = {
          playlistId: id,
          songId
      }
      console.log("song", songToAdd)

      
      dispatch(addSongToPlaylist(songToAdd))
  }
    console.log(`Song Id = ${songId} and Playlist Id = ${id}`)
    return (
        <div> <p onClick={addSong}>Settings</p></div>
    )
}


export default AddToPlaylist