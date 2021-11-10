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
    const songIds = await res.json();
    dispatch(getPlaylistSongs(songIds))
    return songIds

}

export const addSongToPlaylist = (playlist) => async (dispatch) => {
    const response = await fetch(`/api/playlists/songs/add`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(playlist),
  });
  console.log(playlist)
  console.log("response", response)

  const addedSong = await response.json();
  console.log("added song", addedSong)
  dispatch(addPlaylistSongs(addedSong));
  return addedSong

}

const initialState = {};

export default function playlistSongsReducer(state = initialState, action) {
    switch (action.type) {
        case GET_PLAYLIST_SONGS:
            const playlistSongs = {...state}
            action.playlistSongs.songs.forEach(song => {
                playlistSongs[song] = song
            })
            return {...playlistSongs, ...state}
        case ADD_PLAYLIST_SONGS:
              {
              return {
                ...state,
                [action.playlistSongs]: action.playlistSongs
              };
            }
        default:
            return state;
    }
}