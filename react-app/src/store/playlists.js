const GET_PLAYLISTS = 'playlists/GET_PLAYLISTS'
const GET_ONE_PLAYLIST = 'playlists/GET_ONE_SONG'

const getAllPlaylists = (playlists) => ({
    type: GET_PLAYLISTS,
    playlists
})

const getOnePlaylist = (playlistId) => ({
    type: GET_ONE_PLAYLIST,
    playlist: playlistId
})


export const getPlaylists = (userId) => async (dispatch) => {
    const res = await fetch(`/api/playlists/user/${userId}`);
    const playlists = await res.json();
    dispatch(getAllPlaylists(playlists))
    return playlists
}

export const getAPlaylist = (playlistId) => async (dispatch) => {
    const res = await fetch(`/api/playlists/${playlistId}`);
    if (!res.ok) throw res;
    const playlist = await res.json();
    dispatch(getOnePlaylist(playlist))
}

const initialState = {};

export default function playlistReducer(state = initialState, action) {
    switch (action.type) {
        case GET_PLAYLISTS:
            const allPlaylists = {...state}
            action.playlists.playlists.forEach(playlist => {
                allPlaylists[playlist.id] = playlist
            })
            return {...allPlaylists, ...state}
        case GET_ONE_PLAYLIST:
            return { ...state };
        default:
            return state;
    }
}