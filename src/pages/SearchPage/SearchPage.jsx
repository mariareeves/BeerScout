import { useState, useEffect } from "react"

import TopNavBar from "../../components/TopNavBar/TopNavBar"
import SearchBar from '../../components/SearchBar/SearchBar'
import SearchSummary from "../../components/SearchSummary/SearchSummary"
import BreweriesResults from '../../components/BreweriesResults/BreweriesResults'
import FooterPage from '../../components/FooterPage/FooterPage'
import styles from './SearchPage.module.css'
import { searchBusinesses } from '../../utilities/yelp-api'



export default function SearchPage({ user, setUser }) {
    const [location, setLocation] = useState("")
    const [breweries, setBreweries] = useState([])

    useEffect(() => {
        console.log(location)
        if (location) {
            searchBusinesses(location).then((data) => {
                setBreweries(data)
            }).catch((error) => {
                console.log(error)
            })
        }

    }, [location])
    console.log(location)

    return (
        <div className={styles['search-page']}>
            <TopNavBar user={user} setUser={setUser} />
            <SearchBar location={location} setLocation={setLocation} setBreweries={setBreweries} />
            <SearchSummary />
            <BreweriesResults breweries={breweries} />
            <FooterPage />
        </div>
    )
}