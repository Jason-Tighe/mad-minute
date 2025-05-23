import { Link } from 'react-router-dom'
import resume from '../assets/2025-resume.pdf';

export default function NavBar() {
  return (
    <nav className="bg-slate-600 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-white text-2xl font-bold">
          Mad Minute
        </Link>
        <div className="flex items-center space-x-4">
          <span className="text-gray-400 text-sm">
            Created by Jason Tighe
          </span>
          <a 
            href="https://github.com/Jason-Tighe"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white"
          >
            <i className="fab fa-github text-xl"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/jsntighe/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white"
          >
            <i className="fab fa-linkedin text-xl"></i>
          </a>
          <a
            href={resume}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white"
          >
            <i className="fas fa-file-alt text-xl"></i>
          </a>
        </div>
      </div>
    </nav>
  )
}