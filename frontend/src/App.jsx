import { Routes, Route } from 'react-router-dom'
import GamePage from './pages/GamePage'
import Settings from './pages/Settings'
import Leaderboard from './pages/Leaderboard'
import NavBar from './components/NavBar'
import StartPage from './pages/StartPage'

export default function App() {
  // game idea is a calculator game where you have to get to the 'answer' as fast as possible
  // ui will be so that it looks like a calculator
  // rules for the game
  // When the gme starts a random number is generated
  // Once the user types the number in the calculator (or via their number pad) and hits enter
  // the game will check if the number is correct
  // If the number is incorrect the game will not start
  // If the number is correct the game will generate a new number
  // The user is to use math  to get from the starting number to the target number
  // *for example if the starting number is 5 and the target number is 10 they can either x2 or +5
  // Once the user gets to the target number they will then get a new target number
  // The user then has to use the calculator to get to the target number and so on
  // I think i need to determine ahead of time the optimal path to the target number
  // Clearing can't clear the most recent value to prevent someone from clearing and then just typing the answer
  // i have to add rule for x0, /0, and -0
  // The game will keep track of the score

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