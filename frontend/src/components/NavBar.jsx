import { Link } from 'react-router-dom'

export default function NavBar() {
  return (
    <nav>
      <Link to="/">Start</Link>
      <Link to='/game'>Game</Link>
      <Link to="/stats">Stats</Link>
      <Link to="/settings">Settings</Link>
    </nav>
  )
}