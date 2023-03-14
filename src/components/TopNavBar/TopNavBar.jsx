import { Link, } from 'react-router-dom'
import { useState } from 'react'
import * as userService from '../../utilities/users-service'
import logo from '../../assets/logo1test.png'
import styles from './TopNavBar.module.css'
import AboutPage from '../../components/AboutPage/AboutPage'


export default function TopNavBar({ user, setUser }) {
    const [showAboutPage, setShowAboutPage] = useState(false)

    function toggleAboutPage() {
        setShowAboutPage((prevShowAboutPage) => !prevShowAboutPage);
    }

    function handleLogOut() {
        userService.logOut()
        setUser(null)
    }
    return (

        <>
            <nav className={styles['top-nav']}>
                <div className={styles.left}>
                    <Link to="/">
                        <img src={logo} className={styles.logo} alt="BeerScout logo" />
                    </Link>
                    <div
                        className={`button is-white is-small ${styles['about-button']}`}
                        onClick={toggleAboutPage}
                    >
                        About
                    </div>
                    <div className={`button is-white is-small ${styles['saved-button']}`}>Saved</div>
                </div>
                <div className={styles.right}>
                    <span className="has-text-white" style={{ fontSize: '1.2rem' }}>
                        {' '}
                        Welcome, {user.name}{' '}
                    </span>
                    <Link
                        to=""
                        className={`button is-white is-small ${styles['nav-button']}`}
                        onClick={handleLogOut}
                    >
                        Log Out
                    </Link>
                </div>
            </nav>
            {showAboutPage && <AboutPage onClick={toggleAboutPage} />}
        </>
    )
}
