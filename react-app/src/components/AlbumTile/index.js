import { NavLink } from "react-router-dom"
import SongTile from "../songs/Song"
import './AlbumTile.css'
function AlbumTile({album}) {

    return (
        <>
         <NavLink to={`/albums/${album.id}`}>
       <img className="album-art-album" src={`${album.imageURL}`}></img>
        <h2 className='album-Title'>{`${album.title}`}</h2>
        <p className='album-year'>{`${album.year}`}</p></NavLink>

        </>

    )
}


export default AlbumTile
