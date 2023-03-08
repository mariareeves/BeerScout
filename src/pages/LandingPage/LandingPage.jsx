import TopNavBar from "../../components/TopNavBar/TopNavBar"
import HeroPage from "../../components/HeroPage/HeroPage"
import SearchBar from '../../components/SearchBar/SearchBar'
import AboutPage from "../../components/AboutPage/AboutPage"
import FooterPage from "../../components/FooterPage/FooterPage"
import styles from './LandingPage.module.css'

export default function LandingPage({ user, setUser }) {
    return <div className={styles.landing}>

        <TopNavBar user={user} setUser={setUser} />

        <HeroPage className={styles['hero-container']} />
        <SearchBar className={styles['search-bar-container']} />
        <AboutPage className={styles['about-container']} />
        <FooterPage className={styles['footer-container']} />
    </div>
}