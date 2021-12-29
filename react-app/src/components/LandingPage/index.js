import React from "react"
import * as sessionActions from '../../store/session'
import { Redirect } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import './LandingPage.css';
import logo from '../../images/github-logo.png'
import logo2 from '../../images/linkedin-logo.png'
import text from '../../images/text.png'
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

function LandingPage() {
    const dispatch = useDispatch()
    const sessionUser = useSelector((state) => state.session.user);

    if (sessionUser) return <Redirect to="/main" />;

    const handleSubmit = (e) => {
        e.preventDefault();
        return dispatch(sessionActions.login('demo@aa.io', 'password'))

      }




    return (
      <>
        <div className="landingPageContainer">
          <div className="landingBackground">
            <div className="vibing-container">
              <div className="header1">
                <h1 className="vibing">Vibing</h1>
              </div>
              <div className="header2">
                <h1 className="everything">is everything</h1>
              </div>
            </div>
            <h2 className="tagline">
              Millions of songs, no credit card needed
            </h2>
            <button className="demoButton" onClick={handleSubmit}>
              LOG IN AS A DEMO USER
            </button>
            <div className="footer">
              <div className="footerLinksContainer">
                <h2 className="footerTitle">Nevin Chow</h2>
                <div className="media-links">
                  <a href="https://github.com/nevinchow">
                    <FontAwesomeIcon className="media-icon" icon={faGithub} />
                  </a>
                  <a href="https://www.linkedin.com/in/nevin-chow-aa4770221/">
                    <FontAwesomeIcon
                      className="media-icon"
                      icon={faLinkedinIn}
                    />
                  </a>
                </div>
              </div>
              <div className="footerLinksContainer">
                <h2 className="footerTitle"> Jessi Zhuo</h2>
                <div className="media-links">
                  <a href="https://github.com/zyingzhuo">
                    <FontAwesomeIcon className="media-icon" icon={faGithub} />
                  </a>
                  <a href="https://www.linkedin.com/in/yingjia-zhuo-25a474170/">
                    <FontAwesomeIcon
                      className="media-icon"
                      icon={faLinkedinIn}
                    />
                  </a>
                </div>
              </div>
              <div className="footerLinksContainer">
                <h2 className="footerTitle">Ayla Basha</h2>
                <div className="media-links">
                  <a href="https://github.com/spacegray">
                    <FontAwesomeIcon className="media-icon" icon={faGithub} />
                  </a>
                  <FontAwesomeIcon className="media-icon" icon={faLinkedinIn} />
                </div>
              </div>
              <div className="footerLinksContainer">
                <h2 className="footerTitle">Dusty Mumphrey</h2>
                <div className="media-links">
                  <a href="https://github.com/Dusttoo">
                    <FontAwesomeIcon className="media-icon" icon={faGithub} />
                  </a>
                  <a href="https://www.linkedin.com/in/dusty-mumphrey/">
                    <FontAwesomeIcon
                      className="media-icon"
                      icon={faLinkedinIn}
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
}


export default LandingPage
