import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect ,useHistory} from 'react-router-dom';
import { getArtists, getSingleArtist } from '../../store/artist';
import { getAlbums, getAlbumsByArtistId } from '../../store/album';
import { useParams } from 'react-router';





function ArtistPage() {
    // const artist=useSelector((state)=>Object.values(state.artist))
    const {artistId}= useParams();
    const artist=useSelector(state=>state.artist[artistId]);
    const albums=useSelector(state=>state.album[artistId])
    const dispatch = useDispatch()
    console.log('!!!!!!!!!!!!!!',artist)

    useEffect(()=>{
        dispatch(getSingleArtist(artistId))
        dispatch(getAlbumsByArtistId(artistId))
    },[dispatch, artistId])

 

        return (
            <>
             <p>{`${artist.name}`}</p>
             
             <img src={albums.imageURL}></img>
             <p>{`${albums.year}`} 
                {`${albums.title}`}
                
                Album
             </p >
             <p>{`${artist.bio}`}</p>
            </>
    
        )
    }
   



export default ArtistPage