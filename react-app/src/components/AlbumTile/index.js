import { NavLink } from "react-router-dom"
import SongTile from "../songs/Song"

function AlbumTile({album}) {
    
    return (
        <>
        <h2>{`${album.title}`}</h2>
        <NavLink to={`/albums/${album.id}`}><img className="album-art" src={`${album.imageURL}`}></img></NavLink>
        <p>{`${album.year}`}</p>

        </>

    )
}


export default AlbumTile