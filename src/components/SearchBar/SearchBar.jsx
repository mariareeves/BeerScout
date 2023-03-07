import styles from './SearchBar.module.css'

export default function SearchBar() {
    return (
        <div className='search-bar'>
            <h2 className="subtitle">Discover your favorite Brewery place</h2>
            <div className="field has-addons">
                <p className="control">
                    <button className="button is-static is-medium">
                        Search
                    </button>
                </p>
                <p className="control">
                    <input className={`input is-medium ${styles['input-control']}`} type="text" placeholder="Location" />
                </p>
                <div className={`button is-medium ${styles['search-button']}`}>
                    <span className="icon">
                        <i className="fa fa-sharp fa-solid fa-magnifying-glass"></i>
                    </span>
                </div>
            </div>

        </div>
    )
}