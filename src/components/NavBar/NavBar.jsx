import { Link } from 'react-router-dom'
import * as userService from '../../utilities/users-service'
import logo from '../../assets/logo2-copy.png'
import styles from './NavBar.module.css'


export default function NavBar({ user, setUser }) {

    function handleLogOut() {
        userService.logOut()
        setUser(null)
    }

    return (
        <nav>
            <div>
                <img src={logo} className={styles.logo} alt='BeerScout logo' />
            </div>
            {/* &nbsp;&nbsp; Welcome, {user.name}
            &nbsp;&nbsp;<Link to="" onClick={handleLogOut}>Log Out</Link> */}
        </nav>
    )
}