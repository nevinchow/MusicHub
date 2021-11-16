import React from "react"
import * as sessionActions from '../../store/session'
import { Redirect } from "react-router";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import styles from './LandingPage.module.css'
import logo from '../../images/github-logo.png'
import logo2 from '../../images/linkedin-logo.png'
import text from '../../images/text.png'

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
        <div className={styles.landingPageContainer}>
        <div className={styles.landingBackground}>
            <button className={styles.demoButton} onClick={handleSubmit}>LOG IN AS A DEMO USER</button>
        </div>
        <footer className={styles.footerContainer}>
            <div className={styles.footerLinksContainer}>
        <h2 className={styles.footerTitle}>Nevin Chow</h2>
              <img className={styles.githubLogo} src={logo} height={40} width={40} alt=""/>
              <a className="gitLink"href='https://github.com/nevinchow'>Github</a>
              <img className="linkedinLogo" src={logo2} height={40} width={40} alt=""/>
              <a className="linkedLink" href='https://www.linkedin.com/in/nevin-chow-aa4770221/'>LinkedIn</a>
            </div>
            <div>
              <h2 className='footerTitle'> Jessi Zhuo</h2>
              <img className="githubLogo" src={logo} height={40} width={40} alt=""/>
              <a className="gitLink"href='https://github.com/zyingzhuo'>Github</a>
              <img className="linkedinLogo" src={logo2} height={40} width={40} alt=""/>
              <a className="linkedLink" href='https://www.linkedin.com/in/yingjia-zhuo-25a474170/'>LinkedIn</a>
            </div>
            <div>
              <h2 className='footerTitle'>Ayla Basha</h2>
              <img className="githubLogo" src={logo} height={40} width={40} alt=""/>
              <a className="gitLink"href='https://github.com/spacegray'>Github</a>
              <img className="linkedinLogo" src={logo2} height={40} width={40} alt=""/>
              <a className="linkedLink" href='https://www.linkedin.com/in/aylabasha/'>LinkedIn</a>
            </div>
            <div>
              <h2 className='footerTitle'>Dusty Mumphrey</h2>
              <img className="githubLogo" src={logo} height={40} width={40} alt=""/>
              <a className="gitLink"href='https://github.com/Dusttoo'>Github</a>
              <img className="linkedinLogo" src={logo2} height={40} width={40} alt=""/>
              <a className="linkedLink" href='https://www.linkedin.com/in/dusty-mumphrey/'>LinkedIn</a>
            </div>
        </footer>

        </div>
        </>
    )
}


export default LandingPage
