import { Link, useLocation } from 'react-router-dom'
import './Navigation.css'

function Navigation() {
  const location = useLocation()

  const isActive = (path) => {
    return location.pathname === path
  }

  return (
    <nav className="navigation">
      <div className="nav-container">
        <Link to="/" className="nav-logo">
          CG
        </Link>
        <ul className="nav-links">
          <li>
            <Link 
              to="/" 
              className={isActive('/') ? 'nav-link active' : 'nav-link'}
            >
              Home
            </Link>
          </li>
          <li>
            <Link 
              to="/instructions" 
              className={isActive('/instructions') ? 'nav-link active' : 'nav-link'}
            >
              Instructions
            </Link>
          </li>
          <li>
            <Link 
              to="/cover-letter" 
              className={isActive('/cover-letter') ? 'nav-link active' : 'nav-link'}
            >
              Cover Letter
            </Link>
          </li>
          <li>
            <Link 
              to="/resume" 
              className={isActive('/resume') ? 'nav-link active' : 'nav-link'}
            >
              Resume
            </Link>
          </li>
          <li>
            <Link 
              to="/mini-interview" 
              className={isActive('/mini-interview') ? 'nav-link active' : 'nav-link'}
            >
              Mini Interview
            </Link>
          </li>
          <li>
            <Link 
              to="/proposal" 
              className={isActive('/proposal') ? 'nav-link active' : 'nav-link'}
            >
              Proposal
            </Link>
          </li>
          <li>
            <Link 
              to="/reflection" 
              className={isActive('/reflection') ? 'nav-link active' : 'nav-link'}
            >
              Reflection
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navigation

