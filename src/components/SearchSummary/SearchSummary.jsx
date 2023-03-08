import styles from './SearchSummary.module.css'

export default function SearchSummary() {
    return (
        <div className={styles.container}>
            <div className={styles['search-summary']}>
                <h1 className="subtitle"><strong>Breweries</strong>  Longmont</h1>
                <p>Showing 1-20 out of 234 results</p>
            </div>
        </div>

    )
}