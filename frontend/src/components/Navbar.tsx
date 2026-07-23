import { NavLink } from 'react-router-dom'
import './Navbar.css'

function Navbar() {
  return (
    <header id="navbar">
      <div id="navbar-inner">
        <button
          type="button"
          className="navbar-icon-btn"
          aria-label="Open menu"
        >
          <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="18" x2="21" y2="18" />
          </svg>
        </button>

        <div className="navbar-brand">Feilao</div>

        <nav className="navbar-links">
          <NavLink to="/" end>
            Menu
          </NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </nav>

        <button
          type="button"
          className="navbar-icon-btn navbar-cart"
          aria-label="Open cart"
        >
          <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="9" cy="21" r="1" />
            <circle cx="20" cy="21" r="1" />
            <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
          </svg>
          <span className="navbar-cart-badge">0</span>
        </button>
      </div>
    </header>
  )
}

export default Navbar
