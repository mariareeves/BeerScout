import BreweryResult from '../BreweryResult/BreweryResult'
import styles from './BreweriesResults.module.css'

export default function BreweriesResults({ breweries, user }) {

    return (

        <div className={styles['breweries-results']}>
            {breweries.map((brewery) => (
                <BreweryResult user={user} key={brewery.id} brewery={brewery} />
            ))}

        </div>
    )
}