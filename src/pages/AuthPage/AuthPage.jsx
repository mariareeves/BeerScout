import { useState } from 'react'
import SignUpForm from '../../components/SignUpForm/SignUpForm'
import LoginForm from '../../components/LoginForm/LoginForm'
import logo from '../../assets/logo1test.png'
import styles from './AuthPage.module.css'

export default function AuthPage({ setUser }) {
    const [showSignUpForm, setShowSignUpForm] = useState(true)

    const toggleForm = () => {
        setShowSignUpForm((prevState) => !prevState)
    }

    return (

        <div className="columns" style={{ height: '100vh' }}>
            <div className={`column is-three-fifths ${styles['left-side']}`} style={{ height: '100%' }}>
                <h1 className='title is-size-1 has-text-centered has-text-white'>
                    Welcome to BeerScout<br />
                    <span className="is-size-4">the ultimate destination for beer lovers around the world!</span>
                </h1>
            </div>
            <div className={`column is-two-fifths ${styles['right-side']}`} style={{ height: '100%' }}>
                <div className={`form-container ${styles['form-container']}`}>
                    {showSignUpForm ? <SignUpForm setUser={setUser} /> : <LoginForm setUser={setUser} />}
                    <p className={styles['question-form']}>{showSignUpForm ? 'Already have an account?' : 'Don\'t have an account?'}</p>
                    <button className={`button is-white is-rounded ${styles.button}`} onClick={toggleForm}>{showSignUpForm ? 'Log In' : 'Sign Up'}</button>
                </div>
            </div>

        </div>

    )
}