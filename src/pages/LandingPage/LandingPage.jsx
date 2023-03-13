import { useState } from "react"
import { useNavigate } from "react-router-dom"
import TopNavBar from "../../components/TopNavBar/TopNavBar"
import HeroPage from "../../components/HeroPage/HeroPage"
import SearchBar from '../../components/SearchBar/SearchBar'
import SearchPage from "../SearchPage/SearchPage"
import AboutPage from "../../components/AboutPage/AboutPage"
import FooterPage from "../../components/FooterPage/FooterPage"
import styles from './LandingPage.module.css'

export default function LandingPage() {
    // const navigate = useNavigate()
    // const [location, setLocation] = useState("")
    // const [breweries, setBreweries] = useState([])

    // const handleLocationChange = (newLocation) => {
    //     setLocation(newLocation)
    //     // if (newLocation) {
    //     //     navigate('/search')
    //     // }

    // }

    return <div className={styles.landing}>

        {/* <TopNavBar className={styles['nav-bar']} user={user} setUser={setUser} /> */}
        {/* <SearchPage user={user} setUser={setUser} /> */}
        <HeroPage className={styles['hero-container']} />
        {/* <SearchBar className={styles['search-bar-container']} location={location} setBreweries={setBreweries} setLocation={handleLocationChange} onSubmit={() => navigate(`/search/${location}`)} /> */}
        {/* <AboutPage className={styles['about-container']} /> */}
        {/* <FooterPage className={styles['footer-container']} /> */}
    </div>
}