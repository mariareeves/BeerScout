import { useState } from "react"
import { useLocation } from "react-router-dom"
import TopNavBar from "../../components/TopNavBar/TopNavBar"
import SearchBar from '../../components/SearchBar/SearchBar'
// import SearchSummary from "../../components/SearchSummary/SearchSummary"
import BreweriesResults from '../../components/BreweriesResults/BreweriesResults'
import FooterPage from '../../components/FooterPage/FooterPage'
import styles from './SearchPage.module.css'



export default function SearchPage({ user, setUser }) {
    const [location, setLocation] = useState(useLocation().search.split("=")[1] || "")
    const [breweries, setBreweries] = useState([])

    const searchBreweries = () => {
        if (location) {
            fetch(`/api/breweries/search?location=${location}`)
                .then((response) => response.json())
                .then((data) => {
                    setBreweries(data);
                })
                .catch((error) => {
                    console.log(error);
                });
        }
    }



    return (
        <div className={styles['search-page']}>
            <TopNavBar user={user} setUser={setUser} />
            <SearchBar location={location} setLocation={setLocation} setBreweries={setBreweries} onSubmit={() => searchBreweries()}
                updateLocation={(newLocation) => setLocation(newLocation)} />
            {/* <SearchSummary /> */}
            <BreweriesResults breweries={breweries} />
            <FooterPage />
        </div>
    )
}