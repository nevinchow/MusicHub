import React, { useState, useEffect } from "react";
import addReview from '../../store/review'
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router";
import { useHistory } from 'react-router';
import { createReview } from "../../store/review";
import './ReviewForm.css'



function ReviewForm({reviewId}) {
    const dispatch = useDispatch()
    const [description, setDescription]=useState('')
    const {albumId}=useParams()
    const sessionUser = useSelector(state => state.session.user);
    const userId=sessionUser.id
    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);
    const [review, setReview] = useState('');

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
              <div className="before">Rate and review</div>
              <div className="uandr">
               <div className='u'>{sessionUser?.username}:</div>
               <div className="star-rating" className="thisrating">
                {[...Array(5)].map((star, rate) => {
                  rate += 1;
                  return (
                    <button
                      type="button"
                      key={rate}
                      className={rate <= (hover || rating) ? "on" : "off"}
                      onClick={() => setRating(rate)}
                      onMouseEnter={() => setHover(rate)}
                      onMouseLeave={() => setHover(rating)}
                    >
                      <span className="star">&#9733;</span>
                    </button>
                  );
                })}
              </div>
              </div>
                {/* <label  ></label> */}
                <div className="inputandbutton">
                        <input className="reviewinput"
                        placeholder='Your feedback helps others decide which albums to listen to.'
                        value={description}
                        onChange={updateDescription}
                        required/>
                
                {/* <label  >Rating:</label>
                        <input
                        
                        value={rating}
                        onChange={updateRating}
                        required/> */}
             
            
                      
                <button className="submitreview" type="submit">Submit</button>
                </div>
              </div>
              
            </form>
        </div>
    )

    
}


export default ReviewForm