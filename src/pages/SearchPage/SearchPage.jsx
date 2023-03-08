import TopNavBar from "../../components/TopNavBar/TopNavBar"
import SearchBar from '../../components/SearchBar/SearchBar'
import SearchSummary from "../../components/SearchSummary/SearchSummary"
import BreweriesResults from '../../components/BreweriesResults/BreweriesResults'
import FooterPage from '../../components/FooterPage/FooterPage'
import styles from './SearchPage.module.css'

export default function SearchPage({ user, setUser }) {
    return (
        <div className={styles['search-page']}>
            <TopNavBar user={user} setUser={setUser} />
            <SearchBar />
            <SearchSummary />
            <BreweriesResults />
            <FooterPage />
        </div>
    )
}