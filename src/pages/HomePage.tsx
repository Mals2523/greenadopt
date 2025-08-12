import React from 'react';
import { Link } from 'react-router-dom';
import { mockEnvironmentalMetrics } from '../data/mockData';
import './HomePage.css';

const HomePage: React.FC = () => {
  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container">
          <div className="hero-grid">
            <div className="hero-content">
              <h1 className="hero-title">
                Join Our Mission to
                <br />
                <span className="hero-subtitle">Save the Planet</span>
              </h1>
              <p className="hero-description">
                GreenAdopt is a non-profit initiative dedicated to environmental conservation 
                and community engagement. Adopt a tree, track its impact, and be part of 
                our mission to create a greener, healthier world for future generations.
              </p>
              <div className="hero-buttons">
                <Link to="/trees" className="btn btn-white">
                  Adopt a Tree
                </Link>
                <Link to="/about" className="btn btn-secondary">
                  Learn About Our Mission
                </Link>
              </div>
            </div>
            <div className="hero-visual">
              <span className="hero-icon">🌳</span>
            </div>
          </div>
        </div>
      </section>

      {/* Environmental Impact Stats */}
      <section className="stats-section">
        <div className="container">
          <h2 className="section-title">Our Community Impact</h2>
          <div className="stats-grid">
            <div className="stat-card stat-card-primary">
              <span className="stat-icon">🌳</span>
              <h3 className="stat-number">{mockEnvironmentalMetrics.totalTrees}</h3>
              <p className="stat-label">Trees Planted</p>
            </div>
            <div className="stat-card stat-card-secondary">
              <span className="stat-icon">💨</span>
              <h3 className="stat-number">{mockEnvironmentalMetrics.totalCO2Absorbed.toFixed(0)}</h3>
              <p className="stat-label">kg CO₂ Absorbed</p>
            </div>
            <div className="stat-card stat-card-success">
              <span className="stat-icon">💧</span>
              <h3 className="stat-number">{(mockEnvironmentalMetrics.totalWaterConserved / 1000).toFixed(0)}</h3>
              <p className="stat-label">kL Water Conserved</p>
            </div>
            <div className="stat-card stat-card-info">
              <span className="stat-icon">❤️</span>
              <h3 className="stat-number">{mockEnvironmentalMetrics.activeTreeParents}</h3>
              <p className="stat-label">Community Members</p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="mission-section">
        <div className="container">
          <h2 className="section-title">Our Mission & Values</h2>
          <div className="mission-grid">
            <div className="mission-card">
              <span className="mission-icon">🌱</span>
              <h3 className="mission-title">Environmental Awareness</h3>
              <p className="mission-description">
                We educate communities about the importance of environmental conservation 
                and sustainable practices through tree adoption programs and awareness campaigns.
              </p>
            </div>
            <div className="mission-card">
              <span className="mission-icon">🤝</span>
              <h3 className="mission-title">Community Engagement</h3>
              <p className="mission-description">
                We bring people together through tree adoption, fostering a sense of 
                responsibility and connection to nature while building stronger communities.
              </p>
            </div>
            <div className="mission-card">
              <span className="mission-icon">📊</span>
              <h3 className="mission-title">Transparency & Impact</h3>
              <p className="mission-description">
                We provide detailed tracking of environmental impact, ensuring donors 
                and adopters can see the real difference their contributions make.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="programs-section">
        <div className="container">
          <h2 className="section-title">Our Programs</h2>
          <div className="programs-grid">
            <div className="program-card">
              <span className="program-icon">🌳</span>
              <h3>Tree Adoption Program</h3>
              <p>Adopt trees in urban and rural areas, monitor their growth, and track environmental impact.</p>
            </div>
            <div className="program-card">
              <span className="program-icon">🎓</span>
              <h3>Environmental Education</h3>
              <p>Educational workshops and awareness campaigns in schools and communities.</p>
            </div>
            <div className="program-card">
              <span className="program-icon">🏘️</span>
              <h3>Community Cleanup</h3>
              <p>Organize community cleanup drives and waste management awareness programs.</p>
            </div>
            <div className="program-card">
              <span className="program-icon">📱</span>
              <h3>Digital Impact Tracking</h3>
              <p>Real-time monitoring and reporting of environmental impact through our platform.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-card">
            <h2 className="cta-title">Join Our Mission Today</h2>
            <p className="cta-description">
              Every tree adoption contributes to our mission of environmental conservation 
              and community development. Start your journey as a tree parent and make a lasting impact.
            </p>
            <div className="cta-buttons">
              <Link to="/trees" className="btn btn-white btn-large">
                Adopt Your First Tree
              </Link>
              <Link to="/contact" className="btn btn-secondary btn-large">
                Become a Volunteer
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
