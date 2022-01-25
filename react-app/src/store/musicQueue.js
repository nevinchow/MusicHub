import { useCurrentSongs } from "../Context/queue";


const ADD_SONG_QUEUE = "queue/ADD_SONG_QUEUE";
const REMOVE_SONG = "queue/REMOVE_SONG";
const ADD_PLAYLIST_QUEUE = "queue/ADD_PLAYLIST_QUEUE";
const ADD_NEXT_SONG = "queue/ADD_NEXT_SONG";
const NEXT_SONG = "queue/NEXT_SONG";
const CLEAR_QUEUE = "queue/CLEAR_QUEUE";
const AUTO_PLAY='queue/AUTO_PLAY'
const POPULATE_QUEUE='queue/POPULATE_QUEUE'

export const addOneSong = (songId) => ({
    type: ADD_SONG_QUEUE,
    songId,
})

export const clearQueue = () => ({
    type: CLEAR_QUEUE,
})

export const playNextSong = () => ({
    type: NEXT_SONG,
})
export const removeSong = (songId, idx) => ({
    type: REMOVE_SONG,
    songId,
    idx,
})
export const addNextSong = (songId) => ({
    type: ADD_NEXT_SONG,
    songId,
})
export const autoPlay=(song)=>({
    type: AUTO_PLAY,
    song
})


// export const addPlaylistQueue = (playlistId) => ({
//     type: ADD_PLAYLIST_QUEUE,
//     payload: playlistId, //pass array instead to this & param?
// })

export const populateQueue=(songObj)=>({
    type: POPULATE_QUEUE,
    songObj
})

const initialState = [];

export default function queueReducer(state = initialState, action) {
    Object.freeze(state);
    switch (action.type) {
        case ADD_SONG_QUEUE:
            return [...state, action.songId];
        case REMOVE_SONG:
            const newRState = [...state];
            const removeIDX = action.idx;
            newRState.splice(removeIDX, 1);
            return newRState;
        case ADD_NEXT_SONG:
            return [action.songId, ...state];
        case ADD_PLAYLIST_QUEUE:
            return [...action.payload];
        case NEXT_SONG:
            const  newState = [...state];
            newState.shift();
            return newState;
        case CLEAR_QUEUE:
            return [];
        case AUTO_PLAY:
            const newStateA=[...state];
            newStateA.shift();
            newStateA.unshift(action.song);
            return newStateA
        default:
            return state;

}
}
