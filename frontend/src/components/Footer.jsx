import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Hostinger</h3>
            <p>Empowering businesses with reliable web hosting solutions and exceptional customer service.</p>
            <div className="social-links">
              <a href="#" aria-label="Facebook"><Facebook size={20} /></a>
              <a href="#" aria-label="Twitter"><Twitter size={20} /></a>
              <a href="#" aria-label="Instagram"><Instagram size={20} /></a>
              <a href="#" aria-label="LinkedIn"><Linkedin size={20} /></a>
            </div>
          </div>

          <div className="footer-section">
            <h4>Services</h4>
            <ul>
              <li><Link to="/">Web Hosting</Link></li>
              <li><Link to="/">Domain Registration</Link></li>
              <li><Link to="/">SSL Certificates</Link></li>
              <li><Link to="/">Email Hosting</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Support</h4>
            <ul>
              <li><Link to="/reviews">Customer Reviews</Link></li>
              <li><Link to="/order-tracking">Track Your Order</Link></li>
              <li><Link to="/my-orders">My Orders</Link></li>
              <li><Link to="/internships/apply">Careers</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Contact Info</h4>
            <div className="contact-info">
              <div className="contact-item">
                <Mail size={16} />
                <span>support@hostinger.com</span>
              </div>
              <div className="contact-item">
                <Phone size={16} />
                <span>+91 (000) 1234567</span>
              </div>
              <div className="contact-item">
                <MapPin size={16} />
                <span>66 Banglore, India</span>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2025 Hostinger. All rights reserved.</p>
          <div className="footer-links">
            <Link to="/">Privacy Policy</Link>
            <Link to="/">Terms of Service</Link>
            <Link to="/">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
