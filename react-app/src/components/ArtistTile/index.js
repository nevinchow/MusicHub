
import { NavLink } from 'react-router-dom';
import './ArtistTile.css'
function ArtistTile({artist}) {

    return (
        <>
        <NavLink to={`/artist/${artist.id}`}>
            <div style={{display:'flex', flexDirection:'column', alignItems:'center'}}>
                <img className="artist-art" src={`${artist.profileURL}`}></img>
                <h2 className='artist-name'>{`${artist.name}`}</h2>
            </div>
        </NavLink>
        </>

    )
}


export default ArtistTile
