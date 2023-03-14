import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import SearchSummary from "../../components/SearchSummary/SearchSummary"
import BreweriesResults from '../../components/BreweriesResults/BreweriesResults'
import styles from './SearchPage.module.css'
import Spinner from "../../components/Spinner/Spinner"


export default function SearchPage({ user, setUser, savedBreweries }) {
    const [breweries, setBreweries] = useState([])
    const [businessesCount, setBusinessesCount] = useState(0)
    const [isLoading, setIsLoading] = useState(false);
    const { searchParams } = useParams()


    useEffect(() => {
        async function getBreweries() {
            setIsLoading(true); // Set isLoading to true before making the API call

            try {
                const response = await fetch(`/api/breweries/search?location=${searchParams}`);
                const data = await response.json();
                setBreweries(data);
                setBusinessesCount(data.length);
            } catch (error) {
                console.log(error);
            } finally {
                setIsLoading(false); // Set isLoading to false after the API call is completed
            }
        }

        getBreweries();
    }, [searchParams]);

    return (
        <div className={styles['search-page']}>
            <SearchSummary location={searchParams} businessesCount={businessesCount} />
            {isLoading ? (
                <div className={styles['spinner-container']}>
                    <Spinner />
                </div>
            ) : (
                <BreweriesResults user={user} className={styles['breweries-results']} breweries={breweries} savedBreweries={savedBreweries} />
            )}
        </div>
    )
}