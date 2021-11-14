import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { addOneSong, addNextSong } from "../../store/musicQueue";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { startSong } from "../../store/musicPlayer";


const Song = ({songId, playlistId}) => {
    const song = useSelector((state) => state.songs[songId]);
    // const userPlaylists = useSelector(state) => state.userPlaylists;

    const playlists = useSelector((state) => state.playlists);
    const [showQueue, setShowQueue] = useState(false);
    const dispatch = useDispatch();

    const handlePlay = () => {
        dispatch(addOneSong(song));

        dispatch(startSong())
    }

    const handleAddQueue = () => {
        dispatch(addNextSong(song));
        setShowQueue(true);
    }
    // useEffect(() => {
    //     if (setShowQueue) {
    //      const timeoutQ = setTimeout(() => setShowQueue(false), 1000);
    //         return () => clearTimeout(timeoutQ);  
    //     }
    // }, [showQueue])


    return (
      <>
        <div className="song-container">
          <FontAwesomeIcon
            icon={faPlay}
            className="play-icon"
            onClick={handlePlay}
          />
            {/* {" "}
            play{" "} */}
        </div>
      </>
    );}
    export default Song;
