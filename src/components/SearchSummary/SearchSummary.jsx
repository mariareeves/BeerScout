import styles from './SearchSummary.module.css'

export default function SearchSummary({ location, businessesCount }) {

    return (
        <div className={styles.container}>
            <div className={styles['search-summary']}>
                <h1 className="subtitle"><strong>Breweries</strong>  {location}</h1>
                <p>Showing 1-20 out of {businessesCount} results</p>
            </div>
        </div>

    )
}