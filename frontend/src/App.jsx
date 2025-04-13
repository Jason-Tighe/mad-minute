import { Routes, Route } from 'react-router-dom'
import GamePage from './pages/GamePage'
import Settings from './pages/Settings'
import Leaderboard from './pages/Leaderboard'
import NavBar from './components/NavBar'
import StartPage from './pages/StartPage'

export default function App() {
  // game idea is a calculator game where you have to solve math problems as fast as possible.


  return (
    <div className="app">
      <header>{NavBar}</header>
      
      <Routes>
        <Route path="/" element={<StartPage />} />
        <Route path="/game" element={<GamePage />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
      </Routes>
    </div>
  )
}