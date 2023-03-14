import { useState, useEffect } from 'react'
import styles from './FavoritesPage.module.css'
import BreweryResult from '../../components/BreweryResult/BreweryResult'
import { getSavedBreweries } from '../../utilities/users-api'


export default function FavoritesPage({ user }) {
    const [savedBreweries, setSavedBreweries] = useState([]);

    useEffect(() => {
        async function fetchData() {
            try {
                const breweries = await getSavedBreweries();
                setSavedBreweries(breweries);
            } catch (error) {
                console.error(error);
            }
        }

        fetchData();
    }, []);

    return (
        <div className={styles.favorite}>
            <h1 className='subtitle has-text-centered is-size-3'>Your Saved Breweries</h1>
            {savedBreweries.length > 0 ? (
                savedBreweries.map((brewery) => (
                    <BreweryResult key={brewery.id} brewery={brewery} />
                ))
            ) : (
                <p className='is-size-5'>You haven't saved any breweries yet.</p>
            )}
        </div>
    );
}