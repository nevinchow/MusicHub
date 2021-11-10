import React, { useEffect }  from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useParams } from "react-router";
import { editReview } from "../../store/review";

const EditReview=({reviewId})=>{
    const dispatch = useDispatch()
    const [description, setDescription]=useState('')
    const[rating, setRating]=useState('')
    const reviews=useSelector(state=>state.review)
    const currentReview=reviews[reviewId]
    const {albumId}=useParams()
    const sessionUser = useSelector(state => state.session.user);
    const userId=sessionUser.id

    const updateDescription=(e)=>setDescription(e.target.value)
    const updateRating=(e)=>setRating(e.target.value)
    const history = useHistory();

    const handleSubmit=async (e)=>{
        e.preventDefault();
        
        const payload={
            reviewId,
            albumId,
            description,
            rating,
            userId
            
        }

        const added=await dispatch(editReview(payload))
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


export default EditReview
