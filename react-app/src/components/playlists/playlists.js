import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getPlaylists } from "../../store/playlists";
import { Link } from "react-router-dom";
import "./playlists.css";

const Playlists = () => {
  const playlists = useSelector((state) => state.playlists);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPlaylists());
  }, [dispatch]);

  return (
    <>
      {Object.keys(playlists).map((key) => {
        return (
          <div key={playlists[key].id} className="playlist-container">
            <Link to={`/playlists/${playlists[key].id}`}>
              <p id={playlists[key].id} className="playlist-name">
                {playlists[key].name}
              </p>
            </Link>
          </div>
        );
      })}
    </>
  );
};

export default Playlists;
