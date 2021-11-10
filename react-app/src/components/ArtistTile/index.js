
import { NavLink } from 'react-router-dom';

function ArtistTile({artist}) {
   
    return (
        <>
        <h2>{`${artist.name}`}</h2>
        <NavLink to={`/artist/${artist.id}`}><img className="album-art" src={`${artist.profileURL}`}></img></NavLink>
        </>

    )
}


export default ArtistTile