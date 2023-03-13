import './App.css';
import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import { getUser } from '../../utilities/users-service'
import AuthPage from '../AuthPage/AuthPage';
import TopNavBar from '../../components/TopNavBar/TopNavBar'
import LandingPage from '../LandingPage/LandingPage'
import SearchPage from '../SearchPage/SearchPage';
import SearchBar from '../../components/SearchBar/SearchBar';
import styles from '../../components/SearchBar/SearchBar.module.css'
import FooterPage from '../../components/FooterPage/FooterPage';
export default function App() {
  const [user, setUser] = useState(getUser())

  return (
    <main className="App">
      {user ?
        <>
          <TopNavBar user={user} setUser={setUser} />

          <LandingPage user={user} setUser={setUser} />

          <SearchBar className={styles['search-bar-container']} />



          <Routes>
            {/* <Route path="/" element={<LandingPage user={user} setUser={setUser} />} /> */}
            <Route path="/search/:searchParams" element={<SearchPage user={user} setUser={setUser} />} />
          </Routes>

          <FooterPage />
        </>
        :
        <AuthPage className={styles.AuthPage} setUser={setUser} />
      }
    </main>
  );
}


