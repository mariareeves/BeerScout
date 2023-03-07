import TopNavBar from "../../components/TopNavBar/TopNavBar"
import HeroPage from "../../components/HeroPage/HeroPage"
import SearchBar from '../../components/SearchBar/SearchBar'
import AboutPage from "../../components/AboutPage/AboutPage"
import FooterPage from "../../components/FooterPage/FooterPage"

export default function LandingPage({ user, setUser }) {
    return <div>
        <TopNavBar user={user} setUser={setUser} />
        <HeroPage />
        <SearchBar />
        <AboutPage />
        <FooterPage />
    </div>
}