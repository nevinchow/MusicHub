import { useSelector,useDispatch } from 'react-redux';
import React, { useState, useEffect } from 'react';
import { getUsers } from '../../store/user';
import { getReviewsByAlbumId } from '../../store/review';
import styles from './ReviewTile.module.css'

function ReviewTile({review}) {

 
    const user=useSelector(state=>state.user[review.userId])
   
    
  
            return (
                <div className={styles.singleReviewContainer}>
                <div className={styles.singleReview}>
                <p className={styles.userName}>{user?.username}:</p>
                <div className="star-rating" >
                {[...Array(5)].map((star, rate) => {
                  rate += 1;
                  return (

                    <button
                      type="button"
                      key={rate}
                      className={rate <= review.rating ? "on" : "off"}
                    >
                      <span className="star">&#9733;</span>
                    </button>
                  );
                })}
              </div></div>
                <p className={styles.description}>{`${review.description}`}</p>
                
            
                </div>
            )
        } 
       
 
  



export default ReviewTile