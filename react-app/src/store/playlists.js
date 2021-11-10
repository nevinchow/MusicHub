const GET_PLAYLISTS = 'playlists/GET_PLAYLISTS'
const GET_ONE_PLAYLIST = 'playlists/GET_ONE_SONG'
const ADD_A_PLAYLIST = 'playlists/ADD_A_PLAYLIST'
const DELETE_PLAYLIST = 'playlists/DELETE_PLAYLIST'
const GET_PLAYLIST_SONGS = 'playlists/GET_PLAYLIST_SONGS'

const getAllPlaylists = (playlists) => ({
    type: GET_PLAYLISTS,
    playlists
})

const getOnePlaylist = (playlistId) => ({
    type: GET_ONE_PLAYLIST,
    playlist: playlistId
})

const addPlaylist = (playlistId) => ({
    type: ADD_A_PLAYLIST,
    playlist: playlistId
})

const deletePlaylist = (playlistId) => ({
    type: DELETE_PLAYLIST,
    playlistId
})

const getPlaylistSongs = (playlistId) => ({
    type: GET_PLAYLIST_SONGS,
    playlistId
})


export const getPlaylists = () => async (dispatch) => {
    const res = await fetch(`/api/playlists/`);
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

export const addAPlaylist = (playlist) => async(dispatch) => {
    console.log(playlist)
    // need to add csurf
    const response = await fetch(`/api/playlists/add`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(playlist),
  });

  const newPlaylist = await response.json();
  dispatch(addPlaylist(newPlaylist));
  return newPlaylist
}

export const editAPlaylist = (playlist, playlistId) => async(dispatch) => {
    console.log(playlist)
    // need to add csurf
    const response = await fetch(`/api/playlists/${playlistId}/edit`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(playlist),
  });

  const newPlaylist = await response.json();
  dispatch(addPlaylist(newPlaylist));
  return newPlaylist
}

export const removePlaylist = (playlistId) => async (dispatch) => {
  
  const response = await fetch(`/api/playlists/${playlistId}/delete`,{
  method: 'DELETE',
  statusCode: 204,
  headers: {'Content-Type': 'application/json'}
});

  if(response.ok) {
    const playlist = await response.json();
    dispatch(deletePlaylist(playlist.playlistId));
  }
}

const getSongsForPlaylist = (playlistId) => async (dispatch) => {

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
        case ADD_A_PLAYLIST:
            return { ...state };
        case DELETE_PLAYLIST:
            const deleteState = {...state}
            delete deleteState[action.playlistId]
            return { ...deleteState };
        default:
            return state;
    }
}