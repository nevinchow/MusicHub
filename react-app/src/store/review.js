


const LOAD_REVIEWS = 'review/loadReviews'
const ADD_REVIEW='review/addReview'

const loadReviews = (reviews) => ({
    type: LOAD_REVIEWS,
    reviews,
})

const addReview=(review)=>({
    type: ADD_REVIEW,
    review
})


export const getReviewsByAlbumId=(id)=>async(dispatch)=>{
    const response = await fetch(`/api/albums/${id}/reviews`)
    const reviews=await response.json()
    console.log("@@@@@@@@@@@", reviews)
    dispatch(loadReviews(reviews.reviews))
  }


export const createReview=(payload)=>async(dispatch)=>{
    // need to do csrfFetch later
    // const response=await fetch(`/api/albums/${payload.albumId}/reviews/add_review`,{
    //     method:'POST', 
    //     headers: {'Content-Type':'application/json'},
    //     body:JSON.stringify(payload)
    // })

     const response=await fetch(`/api/albums/add_review`,{
            method:'POST', 
            headers: {'Content-Type':'application/json'},
            body:JSON.stringify(payload)
        })
    if (response.ok) {

        const review=await response.json()
        dispatch(addReview(review))
        return review
    }
}


const initialState={}
const reviewReducer=(state = initialState, action)=>{


    switch (action.type) {
        case LOAD_REVIEWS: {
            let newState = {...state};
            
            (action.reviews).forEach(review => {
                newState[review.id] = review;
            });
            return newState;
        }

        case ADD_REVIEW: 
            const newState={...state}
            newState[action.review.id]=action.review;
            return newState
        
        

        default:
        return state;
    }
}
export default reviewReducer