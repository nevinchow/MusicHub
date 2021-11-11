import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect ,useHistory} from 'react-router-dom';
import ArtistTile from '../ArtistTile';
import { getArtists } from '../../store/artist';
import { getAlbums } from '../../store/album';
import AlbumTile from '../AlbumTile';
import SearchResults from './SearchResults';



const SearchBar = () => {
    const history = useHistory();
    const [queryString, setQueryString] = useState('');
  
    const updateSearch = (e) => {
      setQueryString(e.target.value);
      if (e.target.value) {
        history.replace({
          pathname: '/',
          search: `?q=${e.target.value}`,
        });
      } else {
        history.replace({
          pathname: '',
        });
      }
    };
  
    return (
      <div>
        <input className="search" placeholder="Search for albums" type="search" value={queryString} onChange={(e)=>setQueryString(e.target.value)} />
        <SearchResults queryString={queryString}/>
      </div>
    );
  };
  
  export default SearchBar;