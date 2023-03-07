import './App.css';
import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import { getUser } from '../../utilities/users-service'
import AuthPage from '../AuthPage/AuthPage';

import TopNavBar from '../../components/TopNavBar/TopNavBar'
import LandingPage from '../LandingPage/LandingPage'
import SearchPage from '../SearchPage/SearchPage';


export default function App() {
  const [user, setUser] = useState(getUser())

  return (
    <main className="App">
      {user ?
        <>
          <Routes>
            <Route path="/" element={<LandingPage user={user} setUser={setUser} />} />
            <Route path="/search" element={<SearchPage />} />
          </Routes>
        </>
        :
        <AuthPage setUser={setUser} />
      }
    </main>
  );
}


