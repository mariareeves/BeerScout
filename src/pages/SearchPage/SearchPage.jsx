import { useState, useEffect } from "react"
import { useLocation, useParams } from "react-router-dom"

import TopNavBar from "../../components/TopNavBar/TopNavBar"
import SearchBar from '../../components/SearchBar/SearchBar'
// import SearchSummary from "../../components/SearchSummary/SearchSummary"
import BreweriesResults from '../../components/BreweriesResults/BreweriesResults'
import FooterPage from '../../components/FooterPage/FooterPage'
import styles from './SearchPage.module.css'



export default function SearchPage({ user, setUser }) {
    const [breweries, setBreweries] = useState([])
    const { searchParams } = useParams()

    useEffect(function () {
        async function getBreweries() {

            fetch(`/api/breweries/search?location=${searchParams}`)
                .then((response) => response.json())
                .then((data) => {
                    setBreweries(data);
                    // console.log(data)
                })
                .catch((error) => {
                    console.log(error);
                });

        }
        getBreweries()
        // setBreweries(data)
    }, [searchParams])
    // console.log(breweries)

    return (
        <div className={styles['search-page']}>
            {/* <TopNavBar user={user} setUser={setUser} /> */}
            {/* <SearchBar location={location} setLocation={setLocation} setBreweries={setBreweries} onSubmit={() => searchBreweries()} */}
            {/* updateLocation={(newLocation) => setLocation(newLocation)} breweries={breweries} /> */}
            {/* <SearchSummary /> */}
            <BreweriesResults breweries={breweries} />
            {/* <FooterPage /> */}
        </div>
    )
}