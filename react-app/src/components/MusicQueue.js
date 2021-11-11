import {useDispatch, useSelector} from 'react-redux';
import {removeSong} from '../store/musicQueue';
import Song from './Song';

const MusicQueue = () => {
    const dispatch = useDispatch();
    const musicQueue = useSelector(state => state.musicQueue);
    
    const handleRemoveSong = song => {
        dispatch(removeSong(song));
    };
    
    return (
        <div className="music-queue">
        <h2>Music Queue</h2>
        <ul>
            {musicQueue.map(song => (
            <Song
                key={song.id}
                song={song}
                onRemoveSong={handleRemoveSong}
            />
            ))}
        </ul>
        </div>
    );
    }