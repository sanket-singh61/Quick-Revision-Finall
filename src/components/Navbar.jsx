import './Navbar.css';
import { Button } from './ui/button';
import { Link } from 'react-router-dom';
import { Search } from 'lucide-react';

const Navbar = () => {
  return (
    <header className="navbar-header">
      <nav className="navbar-container">
        {/* logo */}
        <Link to="/" className="navbar-brand">
          <img src="/QR.png" id="LogoQuick" alt="Quick Revision Logo" />
          <div className="brand-name">
            Quick <span>Revision</span>
          </div>
        </Link>

        {/* links & search */}
        <div className="navbar-menu">
          <ul className="nav-links">
            <li><Link to="/home">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/notes">Notes</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
          
          <form className="nav-search" onSubmit={(e) => e.preventDefault()}>
            <Search className="search-icon" size={18} />
            <input
              type="text"
              placeholder="Search your notes..."
              className="search-input"
            />
          </form>
        </div>

        {/* login button */}
        <div className="navbar-actions">
          <Link to="/login">
            <Button className="login-btn">Login</Button>
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
