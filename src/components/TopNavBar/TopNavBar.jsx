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
                        className={`button is-outlined is-rounded is-white is-normal ${styles['about-button']}`}
                        onClick={toggleAboutPage}
                    >
                        About
                    </div>
                    <Link to="/favorites" className={`button is-outlined is-rounded is-white is-normal ${styles['saved-button']}`}>
                        Saved
                    </Link>
                </div>
                <div className={styles.right}>
                    <span className="has-text-white is-size-4">
                        {' '}
                        Welcome, {user.name}{' '}
                    </span>
                    <Link
                        to=""
                        className={`button is-rounded is-white is-normal ${styles['nav-button']}`}
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
