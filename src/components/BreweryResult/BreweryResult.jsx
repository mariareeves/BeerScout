import styles from './BreweryResult.module.css'

export default function BreweryResult({ brewery }) {
    if (!brewery) {
        return (<div />)
    }
    const addressLines = brewery.location.display_address.map(addressLine => <p key={brewery.id + addressLine}>{addressLine}</p>)
    return (
        <div className={styles['brewery-result']}>
            <img className={styles['business-image']} src={brewery.image_url} alt="business" />
            <div className={styles['business-info']}>
                <h2 className='subtitle'>{brewery.name}</h2>
            </div>
            <div className={styles['contact-info']}>
                <p>{brewery.phone}</p>
                {addressLines}
            </div>

        </div>
    )
}