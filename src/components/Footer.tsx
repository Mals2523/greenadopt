import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-section">
            <h6 className="footer-title">GreenAdopt</h6>
            <p className="footer-description">
              A non-profit organization dedicated to environmental conservation and community engagement. 
              We believe in the power of collective action to create a sustainable future for all.
            </p>
            <div className="social-links">
              <button className="social-button">
                📘
              </button>
              <button className="social-button">
                🐦
              </button>
              <button className="social-button">
                📷
              </button>
              <button className="social-button">
                💼
              </button>
            </div>
          </div>

          <div className="footer-section">
            <h6 className="footer-title">Our Programs</h6>
            <div className="footer-links">
              <Link to="/trees" className="footer-link">
                Tree Adoption Program
              </Link>
              <Link to="/about" className="footer-link">
                Environmental Education
              </Link>
              <Link to="/contact" className="footer-link">
                Community Cleanup
              </Link>
              <Link to="/dashboard" className="footer-link">
                Impact Tracking
              </Link>
            </div>
          </div>

          <div className="footer-section">
            <h6 className="footer-title">Get Involved</h6>
            <div className="footer-links">
              <Link to="/trees" className="footer-link">
                Adopt a Tree
              </Link>
              <Link to="/contact" className="footer-link">
                Volunteer With Us
              </Link>
              <Link to="/contact" className="footer-link">
                Make a Donation
              </Link>
              <Link to="/about" className="footer-link">
                Partner With Us
              </Link>
            </div>
          </div>

          <div className="footer-section">
            <h6 className="footer-title">Environmental Impact</h6>
            <div className="impact-stats">
              <p className="impact-stat">🌳 156 Trees Planted</p>
              <p className="impact-stat">🌱 2,847 kg CO₂ Absorbed</p>
              <p className="impact-stat">💨 2,103 kg Oxygen Produced</p>
              <p className="impact-stat">💧 75,600 L Water Conserved</p>
            </div>
            <div className="contact-info">
              <span className="contact-icon">📧</span>
              <a href="mailto:info@greenadopt.org" className="contact-link">
                info@greenadopt.org
              </a>
            </div>
          </div>
        </div>

        <div className="footer-divider"></div>

        <div className="footer-bottom">
          <p className="copyright">
            © 2024 GreenAdopt. A registered non-profit organization. All rights reserved.
          </p>
          <div className="legal-links">
            <Link to="/privacy" className="legal-link">
              Privacy Policy
            </Link>
            <Link to="/terms" className="legal-link">
              Terms of Service
            </Link>
            <Link to="/transparency" className="legal-link">
              Transparency Report
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
