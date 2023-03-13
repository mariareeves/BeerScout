import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import SearchSummary from "../../components/SearchSummary/SearchSummary"
import BreweriesResults from '../../components/BreweriesResults/BreweriesResults'
import styles from './SearchPage.module.css'



export default function SearchPage({ user, setUser }) {
    const [breweries, setBreweries] = useState([])
    const [businessesCount, setBusinessesCount] = useState(0)
    const { searchParams } = useParams()

    useEffect(function () {
        async function getBreweries() {

            fetch(`/api/breweries/search?location=${searchParams}`)
                .then((response) => response.json())
                .then((data) => {
                    setBreweries(data);
                    setBusinessesCount(data.length)
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

            <SearchSummary location={searchParams} businessesCount={businessesCount} />
            <BreweriesResults breweries={breweries} />
        </div>
    )
}