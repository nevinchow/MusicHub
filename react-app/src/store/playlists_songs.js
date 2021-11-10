const GET_PLAYLIST_SONGS = 'playlists/GET_PLAYLIST_SONGS'
const getPlaylistSongs = (playlistSongs) => ({
    type: GET_PLAYLIST_SONGS,
    playlistSongs
})

export const getSongsForPlaylist = (playlistId) => async (dispatch) => {
    const res = await fetch(`/api/playlists/${playlistId}/songs`);
    const songIds = await res.json();
    dispatch(getPlaylistSongs(songIds))
    return songIds

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
        default:
            return state;
    }
}