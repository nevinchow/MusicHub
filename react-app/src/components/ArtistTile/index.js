
import { NavLink } from 'react-router-dom';

function ArtistTile({artist}) {
   
    return (
        <>
        <p>{`${artist.name}`}</p>
        <NavLink to={`/api/artist/${artist.id}`}><img src={`${artist.profileURL}`}></img></NavLink>
        </>

    )
}


export default ArtistTile