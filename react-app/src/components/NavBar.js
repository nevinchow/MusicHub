import React from "react";
import { NavLink } from "react-router-dom";
import LogoutButton from "./auth/LogoutButton";
import { useSelector } from "react-redux";
// import logo from '/Users/yingjiazhuo/Desktop/python/SpotifyProject/react-app/src/images/spotifyLogo.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpotify } from "@fortawesome/free-brands-svg-icons";

const NavBar = () => {
  const sessionUser = useSelector((state) => state.session.user);
  if (sessionUser) {
    return (
      // Upper Nav Bar
      <nav
        style={{
          backgroundColor: "black",
          height: "100px",
          width: "100%",
          display: "flex",
        }}
      >
        <ul>
          <li>
            <NavLink to="/" exact={true} activeClassName="active">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/playlists" exact={true} activeClassName="active">
              Playlists
            </NavLink>
          </li>
          <li>
            <LogoutButton />
          </li>
        </ul>
      </nav>
    );
  } else {
    return (
      <>
        <NavLink to="/">
          <FontAwesomeIcon
            icon={faSpotify}
            className="spotifyLogo"
            style={{
              position: "absolute",
              color: "white",
              height: "80px",
              width: "80px",
              marginLeft: "4%",
              margin: "20px",
              marginBottom: "20%",
              paddingBottom: "30px",
            }}
          />
        </NavLink>

        <nav
          style={{
            backgroundColor: "black",
            height: "100px",
            display: "flex",
            justifyContent: "flex-end",
            // marginRight: "300px",
            alignItems: "center",
            padding: "10px",
            width: "100vw",
          }}
        >
          <NavLink
            to="/login"
            exact={true}
            activeClassName="active"
            style={{ color: "white", fontWeight: "bold", marginRight: "3%" }}
          >
            Login
          </NavLink>
          <NavLink
            to="/sign-up"
            exact={true}
            activeClassName="active"
            style={{
              textDecoration: "none",
              color: "white",
              fontWeight: "bold",
              marginRight: "3%",
            }}
          >
            Sign Up
          </NavLink>
        </nav>
      </>
    );
  }
};

export default NavBar;
