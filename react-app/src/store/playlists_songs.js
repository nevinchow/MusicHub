const GET_PLAYLIST_SONGS = "playlists/GET_PLAYLIST_SONGS";
const ADD_PLAYLIST_SONGS = "playlists/ADD_PLAYLIST_SONGS";
const DELETE_PLAYLISTSONGS = "playlists/DELETE_PLAYLIST_SONGS";

const getPlaylistSongs = (playlistSongs) => ({
  type: GET_PLAYLIST_SONGS,
  playlistSongs,
});
const addPlaylistSongs = (songToAdd) => ({
  type: ADD_PLAYLIST_SONGS,
  songToAdd,
});

const deletePlaylistSongs = (songToDelete) => ({
  type: DELETE_PLAYLISTSONGS,
  songToDelete,
});

export const getSongsForPlaylist = (playlistId) => async (dispatch) => {
  const res = await fetch(`/api/playlists/${playlistId}/songs`);
  const songs = await res.json();
  const songPairs = [];
  Object.values(songs.songs).map((song) => songPairs.push(song));
  dispatch(getPlaylistSongs(songPairs));
  return songPairs;
};

export const addSongToPlaylist = (playlist) => async (dispatch) => {
  const response = await fetch(`/api/playlists/songs/add`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(playlist),
  });

  const addedSong = await response.json();
  dispatch(addPlaylistSongs(addedSong));
  return addedSong;
};

export const removePlaylistSong = (playlistId) => async (dispatch) => {
  const response = await fetch(`/api/playlists/songs/delete`, {
    method: "DELETE",
    statusCode: 204,
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(playlistId),
  });

  if (response.ok) {
    const playlist = await response.json();
    dispatch(deletePlaylistSongs(playlist));
  }
  return playlistId;
};

const initialState = {};

export default function playlistSongsReducer(state = initialState, action) {
  switch (action.type) {
    case GET_PLAYLIST_SONGS:
      const pairs = action.playlistSongs;
      return pairs;
    case ADD_PLAYLIST_SONGS:
      const newState = { ...state };
      const index = Object.keys(newState).length + 1;
      newState[index] = action.songToAdd;
      return newState;
    case DELETE_PLAYLISTSONGS:
      const deleteState = { ...state };

      Object.keys(deleteState).map((song) => {
        if (
          deleteState[song].songId === action.songToDelete.songId &&
          deleteState[song].playlistId === action.songToDelete.playlistId
        ) {
          delete deleteState[song];
        }
      });
      return deleteState;
    default:
      return state;
  }
}
