import SignUpForm from '../../components/SignUpForm/SignUpForm'
import LoginForm from '../../components/LoginForm/LoginForm'

export default function AuthPage({ setUser }) {
    return (
        <div className="columns">
            <div className="column is-three-fifths">
                <h1>Welcome to BeerScout</h1>
            </div>
            <div className="">
                <SignUpForm setUser={setUser} />
                <LoginForm setUser={setUser} />
            </div>

        </div>
    )
}