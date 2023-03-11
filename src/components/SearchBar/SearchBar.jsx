
import { useNavigate } from 'react-router-dom'
import styles from './SearchBar.module.css'

export default function SearchBar({ location, setLocation, setBreweries, onSubmit }) {

    const navigate = useNavigate()
    const handleLocationChange = (evt) => {
        // console.log(evt.target.value)
        setLocation(evt.target.value)
    }

    const submit = (evt) => {
        evt.preventDefault();
        if (location) {
            fetch(`/api/breweries/search?location=${location}`)
                .then((response) => response.json())
                .then((data) => {
                    setBreweries(data);
                    onSubmit()
                })
                .catch((error) => {
                    console.log(error);
                });
        }
    };

    return (
        <form onSubmit={submit} className={styles['search-bar']}>
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
                        placeholder="Location" />
                </p>
                <div className={`button is-medium ${styles['search-button']}`} onClick={submit}>
                    <span className="icon">
                        <i className="fa fa-sharp fa-solid fa-magnifying-glass"></i>
                    </span>
                </div>
            </div>

        </form>
    )


}