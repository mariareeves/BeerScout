import { useState } from 'react'
import styles from './BreweryResult.module.css'
import { Link } from 'react-router-dom'
import BusinessRating from '../BusinessRating/BusinessRating'
import { addToFavorites } from '../../utilities/users-api'

export default function BreweryResult({ brewery }) {
    const [isFavorite, setIsFavorite] = useState(false)

    async function handleAddToFavorites() {
        console.log('testing')
        try {
            await addToFavorites(brewery.id);
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
                <button className={`button ${styles['favorite-button']}`} onClick={handleAddToFavorites}>Add To Favorites</button>
            </div>

        </div>
    )
}