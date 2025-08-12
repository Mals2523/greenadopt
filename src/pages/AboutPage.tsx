import React from 'react';
import './AboutPage.css';

const AboutPage: React.FC = () => {
  return (
    <div className="about-page">
      <div className="container">
        <h1>About GreenAdopt</h1>
        <p className="about-intro">
          GreenAdopt is a non-profit organization dedicated to environmental conservation, 
          community engagement, and creating a sustainable future for generations to come.
        </p>
        
        <section className="about-section">
          <h2>Our Story</h2>
          <p>
            Founded with a vision to bridge the gap between environmental awareness and action, 
            GreenAdopt emerged from the belief that every individual can make a meaningful impact 
            on our planet. We started as a small community initiative and have grown into a 
            comprehensive environmental conservation platform that connects people with nature 
            through tree adoption programs.
          </p>
        </section>

        <section className="about-section">
          <h2>Our Mission</h2>
          <p>
            To create a greener, healthier world by empowering communities through environmental 
            education, tree adoption programs, and sustainable practices. We believe in the power 
            of collective action and individual responsibility in addressing climate change and 
            environmental degradation.
          </p>
        </section>

        <section className="about-section">
          <h2>Our Vision</h2>
          <p>
            A world where every person has a personal connection to nature, where communities 
            are actively engaged in environmental conservation, and where sustainable practices 
            are the norm rather than the exception.
          </p>
        </section>

        <section className="about-section">
          <h2>Our Core Values</h2>
          <div className="values-grid">
            <div className="value-card">
              <span className="value-icon">🌱</span>
              <h3>Environmental Stewardship</h3>
              <p>We are committed to protecting and preserving our natural environment for future generations.</p>
            </div>
            <div className="value-card">
              <span className="value-icon">🤝</span>
              <h3>Community Engagement</h3>
              <p>We believe in the power of community and work to bring people together for environmental causes.</p>
            </div>
            <div className="value-card">
              <span className="value-icon">📊</span>
              <h3>Transparency</h3>
              <p>We maintain complete transparency in our operations and impact reporting.</p>
            </div>
            <div className="value-card">
              <span className="value-icon">🎓</span>
              <h3>Education</h3>
              <p>We prioritize environmental education and awareness as key drivers of change.</p>
            </div>
          </div>
        </section>

        <section className="about-section">
          <h2>How Our Tree Adoption Works</h2>
          <div className="steps-grid">
            <div className="step-card">
              <span className="step-number">1</span>
              <h3>Choose a Tree</h3>
              <p>Browse our catalog of available trees for adoption in various locations</p>
            </div>
            <div className="step-card">
              <span className="step-number">2</span>
              <h3>Adopt & Monitor</h3>
              <p>Get regular updates on your tree's growth, health, and environmental impact</p>
            </div>
            <div className="step-card">
              <span className="step-number">3</span>
              <h3>Track Impact</h3>
              <p>See your tree's contribution to CO₂ absorption, oxygen production, and water conservation</p>
            </div>
            <div className="step-card">
              <span className="step-number">4</span>
              <h3>Join Community</h3>
              <p>Connect with other tree parents and participate in environmental initiatives</p>
            </div>
          </div>
        </section>

        <section className="about-section">
          <h2>Our Programs & Initiatives</h2>
          <div className="programs-grid">
            <div className="program-item">
              <h3>🌳 Tree Adoption Program</h3>
              <p>Our flagship program that allows individuals and organizations to adopt trees and track their environmental impact.</p>
            </div>
            <div className="program-item">
              <h3>🎓 Environmental Education</h3>
              <p>Workshops and awareness campaigns in schools, colleges, and communities to promote environmental consciousness.</p>
            </div>
            <div className="program-item">
              <h3>🏘️ Community Cleanup Drives</h3>
              <p>Regular community cleanup initiatives and waste management awareness programs.</p>
            </div>
            <div className="program-item">
              <h3>📱 Digital Impact Platform</h3>
              <p>Real-time monitoring and reporting of environmental impact through our digital platform.</p>
            </div>
          </div>
        </section>

        <section className="about-section">
          <h2>Get Involved</h2>
          <p>
            Whether you want to adopt a tree, volunteer with us, or support our mission through 
            donations, there are many ways to get involved with GreenAdopt. Every contribution, 
            no matter how small, makes a difference in our collective effort to create a 
            sustainable future.
          </p>
          <div className="cta-buttons">
            <a href="/trees" className="btn btn-primary">Adopt a Tree</a>
            <a href="/contact" className="btn btn-secondary">Contact Us</a>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutPage;
