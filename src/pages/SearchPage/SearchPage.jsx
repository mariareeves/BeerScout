import TopNavBar from "../../components/TopNavBar/TopNavBar"

export default function SearchPage({ user, setUser }) {
    return (
        <div>
            <TopNavBar user={user} setUser={setUser} />
        </div>
    )
}