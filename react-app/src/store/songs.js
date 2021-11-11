const GET_SONGS = 'songs/GET_SONGS'
const GET_ONE_SONG = 'songs/GET_ONE_SONG'

const getAllSongs = (songs) => ({
    type: GET_SONGS,
    songs
})

const getOneSong = (songId) => ({
    type: GET_ONE_SONG,
    song: songId
})


export const getSongs = () => async (dispatch) => {
    const res = await fetch('/api/songs');
    const songs = await res.json();
    dispatch(getAllSongs(songs))
    return songs

    // if (res.ok) {
    //     const songs = await res.json();

    //     dispatch(getAllSongs(songs))
    //     return res
    // }
    
}

export const getASong = (songId) => async (dispatch) => {
    const res = await fetch(`/api/songs/${songId}`);
    if (!res.ok) throw res;
    const song = await res.json();
    dispatch(getOneSong(song))
}

const initialState = {};

export default function songReducer(state = initialState, action) {
    switch (action.type) {
        case GET_SONGS:
            const allSongs = {...state}
            action.songs.songs.forEach(song => {
                allSongs[song.id] = song
            })
            return {...allSongs, ...state}
        case GET_ONE_SONG:
            return { ...state };
        default:
            return state;
    }
}

