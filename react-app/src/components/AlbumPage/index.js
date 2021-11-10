import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, Redirect ,useHistory} from 'react-router-dom';
import { getArtists, getSingleArtist } from '../../store/artist';
import { getAlbums, getAlbumsByArtistId, getSingleAlbum } from '../../store/album';
import { useParams } from 'react-router';


function AlbumPage() {
    const {albumId}=useParams()
    const album=useSelector(state=>state.album[albumId])
    const currentArtistId=album?.artistId
    const currentArtist=useSelector(state=>state.artist[currentArtistId])
    const dispatch = useDispatch()


    useEffect(()=>{
        dispatch(getSingleAlbum(albumId))
        dispatch(getArtists())

    },[dispatch])

    return (
        <>
         <p>{album?.title}</p>
         <img src={album?.imageURL}></img>
         <NavLink to={`/artist/${currentArtistId}`}>{currentArtist?.name}</NavLink>
         <p>{album?.year}</p>
        
         
       
        </>

    )
}

export default AlbumPage