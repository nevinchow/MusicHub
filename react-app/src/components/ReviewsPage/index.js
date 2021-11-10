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


function ReviewsPage () {
    const dispatch = useDispatch();
    const {albumId}=useParams()
    const reviews=useSelector((state)=>Object.values(state.review))

    useEffect(()=>{
        dispatch(getReviewsByAlbumId(albumId))
    },[dispatch])

    return (
        <>
        
        {reviews.map((review)=>(
            <ReviewTile review={review}/>
        ))}
        <ReviewForm />
      
        </>
    )

}

export default ReviewsPage