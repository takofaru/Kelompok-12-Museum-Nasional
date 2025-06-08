import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">Museum</div>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/collection">Collection</Link></li>
        <li><Link to="/event">Events</Link></li>
        <li><Link to="/about">About Us</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;