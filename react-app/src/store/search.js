const ADD_SEARCH='search/ADD_SEARCH'

const addSearch=(albums)=>({
type: ADD_SEARCH,
albums
})


export const searchThunk=(searchInput)=>async(dispatch)=>{
    const response = await fetch("/api/search/", {
    method: "PATCH",
    headers: {
        "Content-Type": "application/json",
    },
    body: JSON.stringify({ searchInput }),
    });

    if(response.ok) {
        const output=await response.json()
        const {albums}=output;
    
    dispatch(addSearch(albums))
    dispatch(setAlbums())
    }
}
