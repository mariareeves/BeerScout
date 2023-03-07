import TopNavBar from "../../components/TopNavBar/TopNavBar"
import SearchBar from '../../components/SearchBar/SearchBar'

export default function SearchPage({ user, setUser }) {
    return (
        <div>
            <TopNavBar user={user} setUser={setUser} />
            <SearchBar />
        </div>
    )
}