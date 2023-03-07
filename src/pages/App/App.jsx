import './App.css';
import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import { getUser } from '../../utilities/users-service'
import AuthPage from '../AuthPage/AuthPage';

import NavBar from '../../components/NavBar/NavBar'
import LandingPage from '../LandingPage/LandingPage'
import SearchPage from '../SearchPage/SearchPage';


export default function App() {
  const [user, setUser] = useState(getUser())

  return (
    <main className="App">
      {

        <>
          {/* <NavBar user={user} setUser={setUser} /> */}
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/search" element={<SearchPage />} />
          </Routes>
        </>

        // <AuthPage setUser={setUser} />
      }
    </main>
  );
}


