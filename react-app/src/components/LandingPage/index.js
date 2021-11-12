import React from "react"
import * as sessionActions from '../../store/session'
import { Redirect } from "react-router";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import styles from './LandingPage.module.css'
import logo from '../../images/github-logo.png'
import logo2 from '../../images/linkedin-logo.png'

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
        <div className={styles.landingBackground}>
            <h2 className={styles.landingHeader1}>Vibing is </h2>
            <h2 className={styles.landingHeader3}>everything</h2>
            <h3 className={styles.landingHeader2}>Millions of songs, no credit card needed</h3>
            <button className={styles.demoButton} onClick={handleSubmit}>LOG IN AS A DEMO USER</button>
        </div>
        <footer>
        <h2 className='footerTitle'>Nevin Chow</h2>
              <img className="githubLogo" src={logo} height={40} width={40} alt=""/>
              <a className="gitLink"href='https://github.com/nevinchow'>Github</a>
              <img className="linkedinLogo" src={logo2} height={40} width={40} alt=""/>
              <a className="linkedLink" href='https://www.linkedin.com/in/nevin-chow-aa4770221/'>LinkedIn</a>
              <h2 className='footerTitle'> Jessi Zhuo</h2>
              <img className="githubLogo" src={logo} height={40} width={40} alt=""/>
              <a className="gitLink"href='https://github.com/nevinchow'>Github</a>
              <img className="linkedinLogo" src={logo2} height={40} width={40} alt=""/>
              <a className="linkedLink" href='https://www.linkedin.com/in/nevin-chow-aa4770221/'>LinkedIn</a>
              <h2 className='footerTitle'>Ayla </h2>
              <img className="githubLogo" src={logo} height={40} width={40} alt=""/>
              <a className="gitLink"href='https://github.com/nevinchow'>Github</a>
              <img className="linkedinLogo" src={logo2} height={40} width={40} alt=""/>
              <a className="linkedLink" href='https://www.linkedin.com/in/nevin-chow-aa4770221/'>LinkedIn</a>
              <h2 className='footerTitle'>Dusty</h2>
              <img className="githubLogo" src={logo} height={40} width={40} alt=""/>
              <a className="gitLink"href='https://github.com/nevinchow'>Github</a>
              <img className="linkedinLogo" src={logo2} height={40} width={40} alt=""/>
              <a className="linkedLink" href='https://www.linkedin.com/in/nevin-chow-aa4770221/'>LinkedIn</a>
        </footer>
        </>
    )
}


export default LandingPage
