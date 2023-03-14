import { Link } from 'react-router-dom';
import BusinessRating from '../BusinessRating/BusinessRating'


import styles from './SavedList.module.css'

export default function SavedList({ savedBreweries }) {
    return (
        <div>
            <h1 className='subtitle has-text-centered is-size-3'>Your Saved Breweries</h1>
            {savedBreweries.length > 0 ? (
                savedBreweries.map((brewery) => (
                    <div key={brewery.id} className={styles['brewery-result']}>
                        <Link to={brewery.url}><img className={styles['business-image']} src={brewery.imageUrl} alt="business" /></Link>
                        <div className={styles['business-info']}>
                            <h2 className='subtitle'><strong>{brewery.name}</strong></h2>
                            <BusinessRating reviewCount={brewery.reviewCount} rating={brewery.rating} />
                        </div>
                        <div className={styles['contact-info']}>
                            <p>{brewery.address}</p>
                        </div>
                    </div>
                ))
            ) : (
                <p className='is-size-5'>You haven't saved any breweries yet.</p>
            )}
        </div>
    );
}






