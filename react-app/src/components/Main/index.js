import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect ,useHistory} from 'react-router-dom';
import ArtistTile from '../ArtistTile';
import { getArtists } from '../../store/artist';
import { getAlbums } from '../../store/album';
import AlbumTile from '../AlbumTile';
import MusicQueue from '../MusicQueue';
import Song from '../songs/Song'
import {removeSong, addOneSong, addNextSong} from "../../store/musicQueue"
import Sidebar from '../Sidebar/Sidebar';
import './main.css'

import { NavLink } from 'react-router-dom';
import { getReviews } from '../../store/review';


function MainPage() {
  const dispatch = useDispatch();
  const artists=useSelector((state)=>Object.values(state.artist))
  const albums=useSelector((state)=>Object.values(state.album))
  const user = useSelector((state) => state.session.user)
  const [RatingValue, setRatingValue]=React.useState(null)
  const average = arr => arr.reduce((a,b) => a + b, 0) / arr.length;

  useEffect(()=>{
      dispatch(getArtists())
      dispatch(getAlbums())
      dispatch(getReviews())
  },[dispatch])

  const reviews=useSelector(state=>Object.values(state.review))


 const getStars = (id) => {
    const starTotal = []
    reviews.forEach((review) => {
        if (review.albumId === id) {
            starTotal.push(review.rating)
        }
    })
    const stars = average(starTotal);

    return (
      <div className="star-rating">
              {[...Array(5)].map((star, rate) => {
                rate += 1;
                return (

                  <button
                    type="button"
                    key={rate}
                    className={rate <= stars ? "on" : "off"}
                  >
                    <span className="star">&#9733;</span>
                  </button>
                );
              })}
            </div>
    )
  }




  return (

      <>
        <div className="main-page">
          {!user ? <></> : <Sidebar/>}
          <div className='wrapper'>
            <div className='main-page-header'></div>
            <h2 className='welcome'>Welcome, {user.username}</h2>
          <div className="main-page-container">
            <h2 className='artists-header'>Popular Artists</h2>
            <div className='artists-container'>

            {artists.map((artist) => (
              <div className='artistTile-container'>
                <ArtistTile artist={artist} />
              </div>

            ))}
            </div>
              <h2 className='albums-header'>Popular Albums</h2>
            <div className='albums-container'>

            {albums.map((album,i) => (
              <>
              <div className='albumTile-container'>
              <AlbumTile album={album} />
              <div className='reviews-link-container'>
              <NavLink to={`/albums/${album.id}/reviews`} className='review-link'><span className="stars">{getStars(i+1)}</span></NavLink>

              {/* <RatingView ratingValue={getStars(i)}/> */}

              </div>
              </div>
              </>
            ))}

            </div>
            {/* <MusicQueue /> */}
          </div>
          </div>
        </div>
      </>


  );



}



export default MainPage
