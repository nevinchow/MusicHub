import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../NavBar';
import AddPlaylists from '../playlists/addPlaylist';
import Playlists from '../playlists/playlists';
import { useDispatch, useSelector } from 'react-redux';
import { getPlaylists } from '../../store/playlists';

import { NavLink } from "react-router-dom";

import { getAlbums } from '../../store/album';
import { getArtists } from '../../store/artist';
import LogoutButton from '../auth/LogoutButton';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faSpotify, faGithub, faLinkedinIn} from "@fortawesome/free-brands-svg-icons"



import './Sidebar.css'
import { getSongsForPlaylist } from '../../store/playlists_songs';

function Sidebar({artist}) {
    const [addForm, openAddForm] = useState(false)
    const [loaded, setLoaded] = useState(false);
    const [playlistId, setPlaylistId] = useState()
    const [credits, setCredits] = useState(false)
    const player = useSelector(state => state.player)




    const dispatch = useDispatch()
    
    useEffect(() => {
    (async() => {
      await dispatch(getPlaylists())
      await dispatch(getAlbums())
      await dispatch(getArtists())
      setLoaded(true);
      dispatch(getSongsForPlaylist(playlistId))

    })();
    }, [dispatch, playlistId]);

      if (!loaded) {
      return null;
    }

    const openAddPlaylist = () => {
        if(!addForm) {
            openAddForm(true)
        } else {
            openAddForm(false)
            
        }
    }

    const openCredits = () => {
        if (credits) setCredits(false); 
        else setCredits(true)
    }
   
    return (
      <>
        <div className="sidebar-container">
          <div className="sidebar-top">
            <div className="sidebar-links">
              <Link className="sidebar-link main-logo" to="/main" exact={true}>
                <FontAwesomeIcon className="spotify-logo" icon={faSpotify} />
                <h2 className="spotify-logo">MusicHub</h2>{" "}
              </Link>
              <Link className="sidebar-link" to="/search">
                <h2 className="sidebar-link">Search</h2>{" "}
              </Link>
              <Link className="sidebar-link" to="/main">
                <h2 className="sidebar-link">Main</h2>
              </Link>

              <h2 className="sidebar-link" onClick={openAddPlaylist}>
                Add Playlist
              </h2>
              {addForm ? (
                <div className="add-playlist-container">
                  <AddPlaylists openAddForm={openAddForm} />
                </div>
              ) : (
                <></>
              )}
            </div>

            <div className="playlist-list">
              {/* <h2 className="sidebar-link" id="your-playlist">Your Playlists</h2> */}
              <Playlists setPlaylistId={setPlaylistId} id="playlists-sidebar" />
            </div>
          </div>

          <div className="sidebar-bottom">
            <h2 className="credits" onClick={openCredits}>
              Credits:
            </h2>
            {credits ? (
              <div className="social-media">
                {/* Ayla */}
                <h3 className="contrib-name">Ayla</h3>
                <div className="contriubtors">
                  <a
                    href="https://github.com/spacegray"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FontAwesomeIcon
                      className="social-media-logos"
                      icon={faGithub}
                    />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/aylabasha/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FontAwesomeIcon
                      className="social-media-logos"
                      icon={faLinkedinIn}
                    />
                  </a>
                </div>
                {/* Dusty */}
                <h3 className="contrib-name">Dusty Mumphrey</h3>
                <div className="contriubtors">
                  <a
                    href="https://github.com/Dusttoo"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FontAwesomeIcon
                      className="social-media-logos"
                      icon={faGithub}
                    />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/dusty-mumphrey/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FontAwesomeIcon
                      className="social-media-logos"
                      icon={faLinkedinIn}
                    />
                  </a>
                </div>
                {/* Jessi */}
                <h3 className="contrib-name">Jessi Zhuo</h3>
                <div className="contriubtors">
                  <a
                    href="https://github.com/zyingzhuo"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FontAwesomeIcon
                      className="social-media-logos"
                      icon={faGithub}
                    />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/yingjia-zhuo-25a474170/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FontAwesomeIcon
                      className="social-media-logos"
                      icon={faLinkedinIn}
                    />
                  </a>
                </div>
                {/* Nevin */}
                <h3 className="contrib-name">Nevin Chow</h3>
                <div className="contriubtors">
                  <a
                    href="https://github.com/nevinchow/SpotifyProject"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FontAwesomeIcon
                      className="social-media-logos"
                      icon={faGithub}
                    />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/nevin-chow-aa4770221/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FontAwesomeIcon
                      className="social-media-logos"
                      icon={faLinkedinIn}
                    />
                  </a>
                </div>
                <LogoutButton />
              </div>
            ) : (
              <></>
            )}
            <LogoutButton />
          </div>
        </div>
      </>
    );
}


export default Sidebar