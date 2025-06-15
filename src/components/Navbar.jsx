import { Link } from 'react-router-dom';
import './Navbar.css';
import '../index.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo"><img src='../assets/logo/museumNasional.svg'/></div>
      <ul className="nav-links">
        <li><Link to="/"><p>Beranda</p></Link></li>
        <li><Link to="/collection"><p>Koleksi</p></Link></li>
        <li><Link to="/event"><p>Kegiatan</p></Link></li>
        <li><Link to="/about"><p>Tentang Kami</p></Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
