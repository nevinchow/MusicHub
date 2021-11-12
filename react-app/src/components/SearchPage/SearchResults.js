import { useLocation, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { getAlbums } from '../../store/album';
import { useEffect,useState } from 'react';
import AlbumTile from '../AlbumTile';


const SearchResults = ({queryString}) => {
const[searchResult, setSearchResult]=useState([])
//  const queryString = new URLSearchParams(useLocation().search).get('q') ?? '';

 //const lowerString = queryString.toLowerCase()
  
  const dispatch = useDispatch()
  const albums=useSelector(state=>state.album)
  const eachAlbum=[]
  Object.values(albums).map((album)=>(eachAlbum.push(album)))
  
    useEffect(()=>{
        dispatch(getAlbums())
    },[dispatch])

    useEffect(()=>{
        const filtered=eachAlbum.filter((album)=>album.title.toLowerCase().includes(queryString.toLowerCase())) 
        setSearchResult(filtered)
    },[queryString])

  return (
      <>
       {!queryString ?
         <div></div> :
         searchResult?.map((album)=>
         <>
            {/* <div>{result.title}</div> */}
            <AlbumTile album={album}/>
           
         </>
         )
              
       }
      </>
                    
  );
};

export default SearchResults;