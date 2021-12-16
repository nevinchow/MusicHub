


const LOAD_REVIEWS = 'review/loadReviews'
const ADD_REVIEW='review/addReview'
const DELETE_REVIEW='review/deleteReview'

const loadReviews = (reviews) => ({
    type: LOAD_REVIEWS,
    reviews,
})

const addReview=(review)=>({
    type: ADD_REVIEW,
    review
})

const deleteReview=(reviewId)=>({
    type: DELETE_REVIEW,
    reviewId
})


export const getReviewsByAlbumId=(id)=>async(dispatch)=>{
    const response = await fetch(`/api/albums/${id}/reviews`)
    const reviews=await response.json()
    dispatch(loadReviews(reviews.reviews))
  }

export const getReviews=()=>async(dispatch)=>{
    const response=await fetch(`/api/reviews`)
    const reviews=await response.json()
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

export const editReview=(payload)=>async(dispatch)=>{

    const response= await fetch(`/api/reviews/${payload.reviewId}/edit`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
    })
    const newReview = await response.json();
    dispatch(addReview(newReview));
    return newReview
}


export const removeReview=(reviewId)=>async(dispatch)=>{
    let id= +reviewId
    
    const response= await fetch(`/api/reviews/${id}/delete`, {
        method: 'DELETE',
        statusCode: 204,
        headers: {'Content-Type': 'application/json'}
    })

    if(response.ok) {
        const review = await response.json();
        dispatch(deleteReview(review.id));
      }
}


const initialState={}
const reviewReducer=(state = initialState, action)=>{


    switch (action.type) {
        case LOAD_REVIEWS: {
            let newState = {};
            
            (action.reviews).forEach(review => {
                newState[review.id] = review;
            });
            return newState;
        }

        case ADD_REVIEW: {
            const newState={...state}
            newState[action.review.id]=action.review;
            return newState
        }

        case DELETE_REVIEW: {
            const newState = {...state}
            delete newState[action.reviewId]
            return {...newState}
        }

        default:
            return state;
    }
}
export default reviewReducer