import { useLocation, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getAlbums } from "../../store/album";
import { useEffect, useState } from "react";
import AlbumTile from "../AlbumTile";
import ArtistTile from "../ArtistTile";
import DisplaySong from "../playlists/DisplaySong";
import { getArtists } from "../../store/artist";
import { getSongs } from "../../store/songs";
import "./Search.css";
import Sidebar from "../Sidebar/Sidebar";
import { getUsers } from "../../store/user";

const SearchResults = ({ queryString }) => {
  let trackNumber = 1;
  const [AlbumSearchResult, setSearchResult] = useState([]);
  const [ArtistSearchResult, setArtistSearchResult] = useState([]);
  const [SongSearchResult, setSongSearchResult] = useState([]);
  //  const queryString = new URLSearchParams(useLocation().search).get('q') ?? '';

  //const lowerString = queryString.toLowerCase()

  const dispatch = useDispatch();
  const albums = useSelector((state) => state.album);
  const artists = useSelector((state) => state.artist);
  const songs = useSelector((state) => state.songs);
  const eachAlbum = [];
  const eachArtist = [];
  const eachSong = [];
  let shortenedFilteredSongs = [];
  Object.values(albums).map((album) => eachAlbum.push(album));
  Object.values(artists).map((artist) => eachArtist.push(artist));
  Object.values(songs).map((song) => eachSong.push(song));

  useEffect(() => {
    dispatch(getAlbums());
    dispatch(getSongs());
    dispatch(getArtists());
  }, [dispatch]);

  useEffect(() => {
    const filteredAlbum = eachAlbum.filter((album) =>
      album.title.toLowerCase().includes(queryString.toLowerCase())
    );
    setSearchResult(filteredAlbum);
    const filteredArtist = eachArtist.filter((artist) =>
      artist.name.toLowerCase().includes(queryString.toLowerCase())
    );
    setArtistSearchResult(filteredArtist);
    const filteredSong = eachSong.filter((song) =>
      song.name.toLowerCase().includes(queryString.toLowerCase())
    );
    setSongSearchResult(filteredSong);

    const filtered = eachAlbum.filter((album) =>
      album.title.toLowerCase().includes(queryString.toLowerCase())
    );
    setSearchResult(filtered);
  }, [queryString]);

  return (
    <>
      <div className="bigContainer">
        {!queryString ? (
          <div></div>
        ) : (
          SongSearchResult.slice(0, 5)?.map((song) => (
            <>
              <DisplaySong songId={song.id} trackNumber={trackNumber++} />
            </>
          ))
        )}
        <div className="bigArtists">
          {!queryString ? (
            <div></div>
          ) : (
            ArtistSearchResult?.map((artist) => (
              <div className="littleArtist">
                <ArtistTile artist={artist} />
              </div>
            ))
          )}
        </div>
        <div className="bigAlbums">
          {!queryString ? (
            <div></div>
          ) : (
            AlbumSearchResult?.map((album) => (
              <div className="littleAlbum">
                <AlbumTile album={album} />
              </div>
            ))
          )}
        </div>
      </div>
    </>
  );
};

export default SearchResults;
