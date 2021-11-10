import React, { useState, useEffect } from "react";
import addReview from '../../store/review'
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router";
import { useHistory } from 'react-router';
import { createReview } from "../../store/review";



function ReviewForm() {
    const dispatch = useDispatch()
    const [description, setDescription]=useState('')
    const[rating, setRating]=useState('')
    const {albumId}=useParams()
    console.log(albumId)
    const sessionUser = useSelector(state => state.session.user);
    const userId=sessionUser.id

    const updateDescription=(e)=>setDescription(e.target.value)
    const updateRating=(e)=>setRating(e.target.value)

    const history = useHistory();
    
    const handleSubmit=async (e)=>{
        e.preventDefault();
        
        const payload={
            albumId,
            description,
            rating,
            userId
            
        }

        const added=await dispatch(createReview(payload))
        if(added) {
            history.push(`/albums/${added.albumId}/reviews`)
        }


    }
    return (
        <div >
            <form onSubmit={handleSubmit}>
              <div >
                <label  >Description:</label>
                        <input
                        
                        value={description}
                        onChange={updateDescription}
                        required/>
                <label  >Rating:</label>
                        <input
                        
                        value={rating}
                        onChange={updateRating}
                        required/>
            
                      
                <button  type="submit">Submit</button>
              </div>
              
            </form>
        </div>
    )

    
}


export default ReviewForm