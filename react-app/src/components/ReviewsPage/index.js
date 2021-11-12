import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect ,useHistory} from 'react-router-dom';
import ArtistTile from '../ArtistTile';
import { getArtist } from '../../store/artist';
import { getAlbums } from '../../store/album';
import AlbumTile from '../AlbumTile';
import { NavLink } from 'react-router-dom';
import { useParams } from 'react-router';
import {getReviewsByAlbumId} from '../../store/review'
import ReviewTile from '../ReviewTile'
import ReviewForm from '../ReviewForm';
import EditReview from '../EditReviewForm';
import { removeReview } from '../../store/review';


function ReviewsPage () {
    const dispatch = useDispatch();
    const {albumId}=useParams()
    const reviews=useSelector((state)=>Object.values(state.review))
    const [reviewId, setReviewId]=useState()
    const history=useHistory()
    // const currentReview=useSelector(state=>state.review[reviewId])
    const userId=useSelector(state=>state.session.user.id)
    const [editform, setEditForm]=useState(false)



    useEffect(()=>{
        dispatch(getReviewsByAlbumId(albumId))
    },[dispatch])


    const onClick=(e)=>{

        e.preventDefault()
        setReviewId(e.target.id)
        if(editform) {
            setEditForm(false)
        } else {
        setEditForm(true)
        }
    }

    const onClickTwo=async(e,review)=>{
        e.preventDefault()
       setReviewId(review.id)

        await dispatch(removeReview(review.id))

            history.push(`/albums/${albumId}/reviews`)

    }

            return (
                <>

                {reviews.map((review)=>(
                    <>
                    <ReviewTile review={review} />
                    {review.userId===userId?
                    <div>
                    <button onClick={onClick} id={review.id} >edit</button>
                    <button onClick={(e)=>{onClickTwo(e,review)}} id= {+review.id}>delete</button>
                    </div> : <> </>

                    }


                    </>
                ))}
                {editform? <EditReview reviewId={reviewId}/>:

                <>
                add review
                <ReviewForm reviewId={reviewId}/>
                </>
                }

                </>
            )

    }





export default ReviewsPage
