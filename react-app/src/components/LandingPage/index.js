import React from "react"
import * as sessionActions from '../../store/session'
import { Redirect } from "react-router";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import './LandingPage.css';
import logo from '../../images/github-logo.png'
import logo2 from '../../images/linkedin-logo.png'
import text from '../../images/text.png'
import { NavLink } from "react-router-dom";

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
            <button className="demoButton" onClick={handleSubmit}>LOG IN AS A DEMO USER</button>
        </div>
        <footer className="footerContainer">
            <div className="footerLinksContainer">
        <h2 className="footerTitle">Nevin Chow</h2>
              <a href="https://github.com/nevinchow">
              <img className="githubLogo" src={logo} height={40} width={40} alt=""/>
              </a>
              <a href='https://www.linkedin.com/in/nevin-chow-aa4770221/'>
              <img className="linkedinLogo" src={logo2} height={40} width={40} alt=""/>
              </a>
            </div>
            <div className="footerLinksContainer">
              <h2 className='footerTitle'> Jessi Zhuo</h2>
              <a href='https://github.com/zyingzhuo'>
              <img className="githubLogo" src={logo} height={40} width={40} alt=""/>
              </a>
              <a href='https://www.linkedin.com/in/yingjia-zhuo-25a474170/'>
              <img className="linkedinLogo" src={logo2} height={40} width={40} alt=""/>
              </a>
            </div>
            <div className="footerLinksContainer">
              <h2 className='footerTitle'>Ayla Basha</h2>
              <a href='https://github.com/spacegray'>
              <img className="githubLogo" src={logo} height={40} width={40} alt=""/>
              </a>
              <img className="linkedinLogo" src={logo2} height={40} width={40} alt=""/>
            </div>
            <div className="footerLinksContainer">
              <h2 className='footerTitle'>Dusty Mumphrey</h2>
              <a href='https://github.com/Dusttoo'>
              <img className="githubLogo" src={logo} height={40} width={40} alt=""/>
              </a>
              <a href='https://www.linkedin.com/in/dusty-mumphrey/'>
              <img className="linkedinLogo" src={logo2} height={40} width={40} alt=""/>
              </a>
            </div>
        </footer>

        </div>
        </>
    )
}


export default LandingPage
