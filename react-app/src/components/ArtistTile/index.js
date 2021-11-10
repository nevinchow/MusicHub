
import { NavLink } from 'react-router-dom';

function ArtistTile({artist}) {
   
    return (
        <>
        <p>{`${artist.name}`}</p>
        <NavLink to={`/artist/${artist.id}`}><img className="album-art" src={`${artist.profileURL}`}></img></NavLink>
        </>

    )
}


export default ArtistTile