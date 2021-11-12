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
  return addedSong

}

const initialState = {};

export default function playlistSongsReducer(state = initialState, action) {
    switch (action.type) {
        case GET_PLAYLIST_SONGS:
            const pairs = action.playlistSongs
            return pairs
        case ADD_PLAYLIST_SONGS:
            const newState = [...state]
            newState.concat(action.songToAdd)
            return {...newState}
        default:
            return state;
    }
}