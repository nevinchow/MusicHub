import React, { useEffect }  from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useParams } from "react-router";
import { editReview } from "../../store/review";
import { getReviewsByAlbumId } from '../../store/review';

const EditReview=({reviewId})=>{
    const reviews=useSelector(state=>state.review)
    const dispatch = useDispatch()
    const currentReview=reviews[reviewId]
    const [description, setDescription]=useState(currentReview?.description)
    const[rating, setRating]=useState(currentReview?.rating)
    
    
    const {albumId}=useParams()
    const sessionUser = useSelector(state => state.session.user);
    const userId=sessionUser.id
    const [hover, setHover] = useState(0);

    const updateDescription=(e)=>setDescription(e.target.value)
    const updateRating=(e)=>setRating(e.target.value)
    const history = useHistory();

    useEffect(() => {
        dispatch(getReviewsByAlbumId())
    }, [dispatch])


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
        setDescription('')
        setRating()

    }

    return (
        <div >
            <form onSubmit={handleSubmit}>
              <div >
                {/* <label  >Description:</label> */}
               
                <div className="before">Edit review</div>
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
              <div className="inputandbutton">
              <input
                        className="reviewinput"
                        value={description}
                        onChange={updateDescription}
                        required/>
                      
                <button  type="submit" className="submitreview">Submit</button>
              </div>
              </div>
            </form>
        </div>
    )
}


export default EditReview
