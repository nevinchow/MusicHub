import { NavLink } from "react-router-dom"


function AlbumTile({album}) {
    
    return (
        <>
        <p>{`${album.title}`}</p>
        <NavLink to={`/albums/${album.id}`}><img className="album-art" src={`${album.imageURL}`}></img></NavLink>
        <p>{`${album.year}`}</p>

        </>

    )
}


export default AlbumTile