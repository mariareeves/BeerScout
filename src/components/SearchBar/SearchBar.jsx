import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './SearchBar.module.css'

export default function SearchBar() {
    const [location, setLocation] = useState('')
    const navigate = useNavigate()

    const handleLocationChange = (evt) => {
        evt.preventDefault()
        // console.log(evt.target.value)
        setLocation(evt.target.value)
    }
    const handleSubmit = (evt) => {
        evt.preventDefault()
        navigate(`/search/${location}`)
    }


    return (
        // <form onSubmit={navigate(`search/${location}`)} className={styles['search-bar']}>
        <form onSubmit={handleSubmit} className={styles['search-bar']}>
            <h2 className="subtitle">Discover your favorite Brewery place</h2>
            <div className="field has-addons">
                <p className="control">
                    <button className="button is-static is-medium">
                        Search
                    </button>
                </p>
                <p className="control">
                    <input className={`input is-medium ${styles['input-control']}`}
                        onChange={handleLocationChange}
                        type="text"
                        placeholder="Location" value={location} />
                </p>

                <button className={`button is-medium ${styles['search-button']}`}>
                    <span className="icon">
                        <i className="fa fa-sharp fa-solid fa-magnifying-glass"></i>
                    </span>
                </button>

            </div>


        </form>
    )


}