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
import { getUsers } from '../../store/user';
import styles from'./ReviewPage.module.css'
import Sidebar from '../Sidebar/Sidebar';



function ReviewsPage () {
    const dispatch = useDispatch();
    const {albumId}=useParams()
    const album=useSelector((state)=>state.album[albumId])
    const reviews=useSelector((state)=>Object.values(state.review))
    const [reviewId, setReviewId]=useState()
    const history=useHistory()
    const user = useSelector((state) => state.session.user);

    // const currentReview=useSelector(state=>state.review[reviewId])
    const userId=useSelector(state=>state.session.user.id)
    const [editform, setEditForm]=useState(false)
    


    useEffect(()=>{
        dispatch(getReviewsByAlbumId(albumId))
        dispatch(getUsers())
    },[dispatch])

    let totalRating=0;
    reviews.map(review=>totalRating+=review.rating)
    let averageReview=totalRating/reviews.length
    
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
                {!user ? <></> : <Sidebar/>}

                {/* <img src={album?.imageURL}></img> */}
                <div className={styles.allReviews}>
                {reviews.map((review)=>(
                    <>
                    <ReviewTile review={review} />
                    {review.userId===userId?
                    <div className={styles.buttonsed}>
                    <button onClick={onClick} id={review.id} className={styles.edit}>edit</button>
                    <button onClick={(e)=>{onClickTwo(e,review)}} id= {+review.id} className={styles.delete}>delete</button>
                    </div> : <> </>

                    }


                    </>
                ))}
                {editform? <EditReview reviewId={reviewId}/>:

                <>
                
                <ReviewForm reviewId={reviewId}/>
                </>
                }
                </div>
                </>
            )

    }





export default ReviewsPage
