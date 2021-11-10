
const LOAD_ARTISTS = 'artist/loadArtists'


const loadArtists = (artists) => ({
    type: LOAD_ARTISTS,
    artists,
})




export const getArtists = () => async (dispatch) => {
    const reponse = await fetch(`/api/main`)
    const artists = await reponse.json();
    dispatch(loadArtists(artists.artists))
}


export const getSingleArtist=(id)=>async (dispatch)=>{
    const response = await fetch(`/api/artist/${id}`)
    const singleArtist = await response.json()
    dispatch(loadArtists(singleArtist.artists))
}

const initialState={}
const artistReducer = (state = initialState, action) => {
   
    switch (action.type) {
        case LOAD_ARTISTS:
            let newState = {...state};
            
            (action.artists).forEach(artist => {
                newState[artist.id] = artist;
            });
            return newState;
        

        default:
        return state;
    }
}

export default artistReducer


