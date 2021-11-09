
const LOAD_ALBUMS = 'artist/loadAlbums'


const loadAlbums = (albums) => ({
    type: LOAD_ALBUMS,
    albums,
})


export const getAlbums = () => async (dispatch) => {
    const reponse = await fetch(`/api/main`)
    const albums = await reponse.json();
    dispatch(loadAlbums(albums.albums))
}

export const getAlbumsByArtistId=(id)=>async(dispatch)=>{
  const response = await fetch(`/api/artist/${id}/albums`)
  const albums=await response.json()
  dispatch(loadAlbums(albums.albums))


}


export const getSingleAlbum=(id)=>async(dispatch)=>{
    const response= await fetch(`/api/albums/${id}`)
    const album=await response.json()
    dispatch(loadAlbums(album.albums))
    // dispatch(loadAlbums(album.artists))
}

const initialState={}
const albumReducer = (state = initialState, action) => {
   
    switch (action.type) {
        case LOAD_ALBUMS:
            let newState = {...state};
            
            (action.albums).forEach(album => {
                newState[album.id] = album;
            });
            return newState;
        

        default:
        return state;
    }
}

export default albumReducer