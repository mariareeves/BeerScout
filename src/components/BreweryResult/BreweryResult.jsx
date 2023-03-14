import { useState, useEffect } from 'react'
import styles from './BreweryResult.module.css'
import { Link } from 'react-router-dom'
import BusinessRating from '../BusinessRating/BusinessRating'
import { addToFavorites } from '../../utilities/users-api'
import { getSavedBreweries } from '../../utilities/users-api'

export default function BreweryResult({ brewery, user }) {
    const [isFavorite, setIsFavorite] = useState(false)
    const [savedBreweries, setSavedBreweries] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const data = await getSavedBreweries();
            setSavedBreweries(data);
        }

        fetchData();
    }, []);

    async function handleAddToFavorites() {
        try {
            await addToFavorites(brewery.id, {
                yelpId: brewery.id,
                imageUrl: brewery.image_url,
                name: brewery.name,
                address: brewery.location.display_address,
                rating: brewery.rating,
                reviewCount: brewery.review_count,
                user: user._id

            });
            setIsFavorite(true);
        } catch (error) {
            console.error(error);
            setIsFavorite(false);
        }
    }

    if (!brewery) {
        return (<div />)
    }
    const tags = brewery.categories.map(category => (<span className={`tag ${styles['business-tag']}`} key={brewery.id + category.title}>{category.title}</span>))
    const addressLines = brewery.location.display_address.map(addressLine => <p key={brewery.id + addressLine}>{addressLine}</p>)
    return (
        <div className={styles['brewery-result']}>
            <Link to={brewery.url}><img className={styles['business-image']} src={brewery.image_url} alt="business" /></Link>
            <div className={styles['business-info']}>
                <h2 className='subtitle'><strong>{brewery.name}</strong></h2>
                <BusinessRating reviewCount={brewery.review_count} rating={brewery.rating} />
                <p>{brewery.price}{tags}</p>
            </div>
            <div className={styles['contact-info']}>
                <p>{brewery.display_phone}</p>
                {addressLines}
            </div>
            <div className={styles['favorite-button-container']}>
                {savedBreweries.some(savedBrewery => savedBrewery.yelpId === brewery.id) ? (
                    <button className={`button is-rounded ${styles['favorite-button']}`} disabled>
                        Added to Favorites
                    </button>
                ) : (
                    <button className={`button is-rounded ${styles['favorite-button']}`} onClick={handleAddToFavorites}>
                        Add to Favorites
                    </button>
                )}
            </div>

        </div>
    )
}