import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { Menu, X, User, ShoppingBag, Search } from 'lucide-react';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
    setIsMenuOpen(false);
  };

  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <Link to="/" className="logo">
            <h1>Hostinger</h1>
          </Link>

          <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/reviews" className="nav-link">Reviews</Link>
            <Link to="/internships/apply" className="nav-link internship-link">
              Apply for Internships
            </Link>
            
            {user ? (
              <>
                <Link to="/my-orders" className="nav-link">
                  <ShoppingBag size={20} />
                  My Orders
                </Link>
                <Link to="/order-tracking" className="nav-link">Track Order</Link>
                <div className="user-menu">
                  <span className="user-name">
                    <User size={20} />
                    {user.firstName}
                  </span>
                  <button onClick={handleLogout} className="logout-btn">
                    Logout
                  </button>
                </div>
              </>
            ) : (
              <div className="auth-links">
                <Link to="/login" className="nav-link">Login</Link>
                <Link to="/register" className="nav-link register-link">Sign Up</Link>
              </div>
            )}
          </nav>

          <button 
            className="menu-toggle"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
