import BreweryResult from '../BreweryResult/BreweryResult'
import styles from './BreweriesResults.module.css'

export default function BreweriesResults() {
    return (
        <div className={styles['breweries-results']}>
            <BreweryResult />
            <BreweryResult />
            <BreweryResult />
        </div>
    )
}