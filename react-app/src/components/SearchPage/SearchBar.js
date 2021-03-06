import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, useHistory } from "react-router-dom";
import ArtistTile from "../ArtistTile";
import { getArtists } from "../../store/artist";
import { getAlbums } from "../../store/album";
import AlbumTile from "../AlbumTile";
import SearchResults from "./SearchResults";
import SearchPage from "../Video/SearchPage.mp4";
import "./Search.css";
import Sidebar from "../Sidebar/Sidebar";

const SearchBar = () => {
  const history = useHistory();
  const user = useSelector((state) => state.session.user);
  const [queryString, setQueryString] = useState("");

  const updateSearch = (e) => {
    setQueryString(e.target.value);
    if (e.target.value) {
      history.replace({
        pathname: "/",
        search: `?q=${e.target.value}`,
      });
    } else {
      history.replace({
        pathname: "",
      });
    }
  };

  return (
    <>
      {!user ? <></> : <Sidebar />}
      {/* <div className="search-container"> */}
      <input
        className="search"
        placeholder="Search songs,albums,artists"
        type="search"
        value={queryString}
        onChange={(e) => setQueryString(e.target.value)}
      />
      {!queryString ? (
        <video
          width="450"
          height="400"
          autoPlay
          loop
          muted
          style={{
            position: "relative",
            width: "100%",
            left: "71.2%",
            top: "42%",
            height: "83.5%",
            objectFit: "cover",
            transform: "translate(-50%, -50%)",
            zIndex: "99%",
          }}
        >
          <source src={SearchPage} type="video/mp4" />
        </video>
      ) : (
        // <input className="search" placeholder="Search songs,albums,artists" type="search" value={queryString} onChange={(e)=>setQueryString(e.target.value)} /> :
        <div>
          <SearchResults queryString={queryString} />
        </div>
      )}
      {/* </div> */}
    </>
  );
};

export default SearchBar;
