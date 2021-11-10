import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect ,useHistory} from 'react-router-dom';
import ArtistTile from '../ArtistTile';
import { getArtists } from '../../store/artist';
import { getAlbums } from '../../store/album';
import AlbumTile from '../AlbumTile';
import { NavLink } from 'react-router-dom';

function MainPage() {
    const dispatch = useDispatch();
    const artists=useSelector((state)=>Object.values(state.artist))
    const albums=useSelector((state)=>Object.values(state.album))
    


    useEffect(()=>{
        dispatch(getArtists())
        dispatch(getAlbums())
    },[dispatch])


    return (
        <>
        {artists.map((artist)=>(
            <ArtistTile artist={artist}/>
        ))}

        {albums.map((album)=>(
        <>
            <AlbumTile album={album} />
            <NavLink to={`/albums/${album.id}/reviews`}>reviews</NavLink>
        </>
        ))}
        </>
    )
}



export default MainPage