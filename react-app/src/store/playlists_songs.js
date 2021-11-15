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
    Object.values(songs.songs).map((song) => (songPairs.push(song)))
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
            // console.log('PAIRS: ', action.playlistSongs)
            // const i = Object.keys(pairs).length + 1
            // action.playlistSongs.forEach(song => {
            //         console.log('iterating state', song)
            //         pairs[i] = song
            // })
            // console.log(pairs, state, 'pairs and state')
            return pairs
        case ADD_PLAYLIST_SONGS:
            const newState = {...state}
            console.log('ACTION', action.songToAdd)
            const index = Object.keys(newState).length + 1
            newState[index] = action.songToAdd
            console.log([newState], "new State")
            return [newState]
        default:
            return state;
    }
}