import { Link } from 'react-router-dom'
import * as userService from '../../utilities/users-service'
import logo from '../../assets/logo1test.png'
import styles from './TopNavBar.module.css'


export default function TopNavBar({ user, setUser }) {

    function handleLogOut() {
        userService.logOut()
        setUser(null)
    }
    return (

        <nav className={styles['top-nav']}>
            <div className={styles.left}>
                <Link to='/'><img src={logo} className={styles.logo} alt='BeerScout logo' /></Link>
            </div>
            <div className={styles.right}>
                <span className="has-text-white" style={{ fontSize: "1.2rem" }}> Welcome, {user.name} </span>
                <Link to="" className={`button is-light is-small ${styles['nav-button']}`} onClick={handleLogOut}>Log Out</Link>
            </div>

        </nav>
    )
}
