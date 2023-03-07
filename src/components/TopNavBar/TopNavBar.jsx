import { Link } from 'react-router-dom'
import * as userService from '../../utilities/users-service'
import logo from '../../assets/logo2-copy.png'
import styles from './TopNavBar.module.css'


export default function TopNavBar({ user, setUser }) {

    function handleLogOut() {
        userService.logOut()
        setUser(null)
    }

    return (

        <div className={styles['top-nav']}>
            <div className={styles.left}>
                <img src={logo} className={styles.logo} alt='BeerScout logo' />
            </div>
            <div className={styles.right}>
                <span> Welcome, {user.name} </span>
                <Link to="" onClick={handleLogOut}>Log Out</Link>
            </div>

        </div>
    )
}
