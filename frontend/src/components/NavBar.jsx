import { Link } from 'react-router-dom'

export default function NavBar() {
  return (
    <nav className="bg-gray-900 p-4">
      <div className="container mx-auto flex justify-end space-x-4">
        <Link to="/" className="text-white hover:text-gray-300">
          Home
        </Link>
        <Link to="/game" className="text-white hover:text-gray-300">
          Reset
        </Link>
        <Link to="/stats" className="text-white hover:text-gray-300">
          Stats
        </Link>
        <Link to="/settings" className="text-white hover:text-gray-300">
          Settings
        </Link>
      </div>
    </nav>
  )
}