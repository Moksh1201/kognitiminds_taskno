import { Link } from 'react-router-dom';
import { ArrowRight, Shield, Zap, Globe, Users, Award, CheckCircle } from 'lucide-react';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <div className="hero-text">
              <h1>Power Your Website with Hostinger</h1>
              <p>Reliable web hosting solutions for businesses of all sizes. Fast, secure, and affordable hosting with 24/7 support.</p>
              <div className="hero-buttons">
                <Link to="/register" className="btn btn-primary">
                  Get Started
                  <ArrowRight size={20} />
                </Link>
                <Link to="/reviews" className="btn btn-secondary">
                  Read Reviews
                </Link>
              </div>
            </div>
            <div className="hero-image">
              <div className="hero-graphic">
                <Globe size={120} />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="features">
        <div className="container">
          <h2>Why Choose Hostinger?</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">
                <Zap size={40} />
              </div>
              <h3>Lightning Fast</h3>
              <p>SSD storage and optimized servers ensure your website loads in milliseconds.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <Shield size={40} />
              </div>
              <h3>Secure & Reliable</h3>
              <p>99.9% uptime guarantee with advanced security features and daily backups.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <Users size={40} />
              </div>
              <h3>24/7 Support</h3>
              <p>Expert support team available around the clock to help you succeed.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <Award size={40} />
              </div>
              <h3>Trusted Worldwide</h3>
              <p>Over 29 million users trust Hostinger for their web hosting needs.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services">
        <div className="container">
          <h2>Our Services</h2>
          <div className="services-grid">
            <div className="service-card">
              <h3>Web Hosting</h3>
              <ul>
                <li><CheckCircle size={16} /> Unlimited bandwidth</li>
                <li><CheckCircle size={16} /> Free SSL certificate</li>
                <li><CheckCircle size={16} /> Daily backups</li>
                <li><CheckCircle size={16} /> 24/7 support</li>
              </ul>
              <div className="service-price">Starting at ₹99.99/month</div>
            </div>
            <div className="service-card featured">
              <div className="popular-badge">Most Popular</div>
              <h3>VPS Hosting</h3>
              <ul>
                <li><CheckCircle size={16} /> Dedicated resources</li>
                <li><CheckCircle size={16} /> Full root access</li>
                <li><CheckCircle size={16} /> Scalable performance</li>
                <li><CheckCircle size={16} /> Advanced security</li>
              </ul>
              <div className="service-price">Starting at ₹199.95/month</div>
            </div>
            <div className="service-card">
              <h3>Cloud Hosting</h3>
              <ul>
                <li><CheckCircle size={16} /> Auto-scaling</li>
                <li><CheckCircle size={16} /> Global CDN</li>
                <li><CheckCircle size={16} /> High availability</li>
                <li><CheckCircle size={16} /> Pay-as-you-go</li>
              </ul>
              <div className="service-price">Starting at ₹999.99/month</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Launch Your Website?</h2>
            <p>Join millions of satisfied customers and get your website online today.</p>
            <div className="cta-buttons">
              <Link to="/register" className="btn btn-primary">
                Start Your Journey
                <ArrowRight size={20} />
              </Link>
              <Link to="/internships/apply" className="btn btn-outline">
                Join Our Team
              </Link>
            </div>
          </div>
        </div> 
      </section>
    </div>
  );
};

export default Home;
