import BreweryResult from '../BreweryResult/BreweryResult'
import styles from './BreweriesResults.module.css'

export default function BreweriesResults({ breweries }) {

    return (

        <div className={styles['breweries-results']}>
            {breweries.map((brewery) => (
                <BreweryResult key={brewery.id} brewery={brewery} />
            ))}

        </div>
    )
}