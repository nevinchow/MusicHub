import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { addOneSong, addNextSong } from "../../store/musicQueue";

const Song = ({songId, playlistId}) => {
    const song = useSelector((state) => state.songs[songId]);
    // const userPlaylists = useSelector(state) => state.userPlaylists;
    

    const playlists = useSelector((state) => state.playlists);
    const [showQueue, setShowQueue] = useState(false);
    const dispatch = useDispatch();

    const handlePlay = () => {
        dispatch(addOneSong(songId));
    }

    const handleAddQueue = () => {
        dispatch(addNextSong(songId));
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
            <button className="song-button" onClick={handlePlay}> play </button>
        

        </div>
        </>
    )}
    export default Song;