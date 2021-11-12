const GET_PLAYLIST_SONGS = 'playlists/GET_PLAYLIST_SONGS'
const ADD_PLAYLIST_SONGS = 'playlists/ADD_PLAYLIST_SONGS'

const getPlaylistSongs = (playlistSongs) => ({
    type: GET_PLAYLIST_SONGS,
    playlistSongs
})
const addPlaylistSongs = (songToAdd) => ({
    type: ADD_PLAYLIST_SONGS,
    songToAdd,
})

export const getSongsForPlaylist = (playlistId) => async (dispatch) => {
    const res = await fetch(`/api/playlists/${playlistId}/songs`);
    const songs = await res.json();
    const songPairs = []
    Object.values(songs).map((song) => (songPairs.push(song)))
    dispatch(getPlaylistSongs(songPairs))
    return songPairs

}

export const addSongToPlaylist = (playlist) => async (dispatch) => {
    const response = await fetch(`/api/playlists/songs/add`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(playlist),
  });

  const addedSong = await response.json();
  dispatch(addPlaylistSongs(addedSong));
  console.log('action added song', addedSong)
  return addedSong

}

const initialState = {};

export default function playlistSongsReducer(state = initialState, action) {
    switch (action.type) {
        case GET_PLAYLIST_SONGS:
            const pairs = action.playlistSongs
            return pairs
        case ADD_PLAYLIST_SONGS:
            console.log('add action', action, 'action.playlist', action.songToAdd)
            const newState = [...state]
            newState.push(action.songToAdd)
            // console.log('before new state', newState)
            // newState[action.songToAdd] = action.songToAdd
            // console.log(newState, 'new state')
            // return newState
            console.log(newState)
            return newState
        default:
            return state;
    }
}