import {useDispatch, useSelector} from 'react-redux';
import {removeSong} from '../store/musicQueue';
import { v4 as uuidv4 } from 'uuid';
import Song from './songs/Song';

const MusicQueue = () => {
    const dispatch = useDispatch();
    const songIDs = useSelector(state => state.musicQueue);

    const handleRemoveSong = song => {
        dispatch(removeSong(song));
    };

    return (
        <div className="music-queue">
            <div className="Queue_info"></div>
            {songIDs.length ? (
                <div id="song_display_info">
                    {/* <p id="song_display_info_title">Title</p> */}
                    <p id="song_display_info_artist">Artist</p>
                </div>
            ) : null
            }
            {songIDs.length ? (
                songIDs.map((songId, idx) => (
                    <div className="playlist-song-que-container" key={uuidv4()}
                    >
                        <Song songId={songId} />

                    <button className="remove-btn"
                        onClick={() => handleRemoveSong(songId, idx)} > Remove</button>
                    </div>
                ))
            ) : (
               null // <div className="no-songs-message"> Queue is empty</div>
            )}

        </div>
    );
    }
    export default MusicQueue;
