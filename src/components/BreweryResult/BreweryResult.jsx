import styles from './BreweryResult.module.css'
import { Link } from 'react-router-dom'
export default function BreweryResult({ brewery }) {
    if (!brewery) {
        return (<div />)
    }
    const tags = brewery.categories.map(category => (<span className={`tag ${styles['business-tag']}`} key={brewery.id + category.title}>{category.title}</span>))
    const addressLines = brewery.location.display_address.map(addressLine => <p key={brewery.id + addressLine}>{addressLine}</p>)
    return (
        <div className={styles['brewery-result']}>
            <Link to={brewery.url}><img className={styles['business-image']} src={brewery.image_url} alt="business" /></Link>
            <div className={styles['business-info']}>
                <h2 className='subtitle'>{brewery.name}</h2>

                <p>{brewery.price}{tags}</p>
            </div>
            <div className={styles['contact-info']}>
                <p>{brewery.display_phone}</p>
                {addressLines}
            </div>

        </div>
    )
}