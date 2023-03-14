import { useState, useEffect } from 'react'
import styles from './FavoritesPage.module.css'
import { getSavedBreweries } from '../../utilities/users-api'
import SavedList from '../../components/SavedList/SavedList'

export default function FavoritesPage({ user }) {
    const [savedBreweries, setSavedBreweries] = useState([]);

    useEffect(() => {
        async function getFavorites() {

            const breweries = await getSavedBreweries();
            console.log(breweries)
            setSavedBreweries(breweries);
        }

        getFavorites();
    }, []);

    return (
        <div className={styles.favorite}>
            <SavedList savedBreweries={savedBreweries} />
        </div>
    );

}