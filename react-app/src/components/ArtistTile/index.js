
import { NavLink } from 'react-router-dom';
import './ArtistTile.css'
function ArtistTile({artist}) {

    return (
        <>
        <NavLink to={`/artist/${artist.id}`}>
          
                <img className="artist-art" src={`${artist.profileURL}`}></img>
                <h2 style={{textAlign:'center'}} className='artist-name'>{`${artist.name}`}</h2>
           
        </NavLink>
        </>

    )
}


export default ArtistTile
