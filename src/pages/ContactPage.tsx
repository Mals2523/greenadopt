import React from 'react';
import './ContactPage.css';

const ContactPage: React.FC = () => {
  return (
    <div className="contact-page">
      <div className="container">
        <h1>Contact Us</h1>
        <p>Get in touch with our team for any questions, support, or to learn how you can get involved with our mission.</p>
        
        <div className="contact-grid">
          <div className="contact-info">
            <h2>Get in Touch</h2>
            <div className="contact-item">
              <span className="contact-icon">📧</span>
              <div>
                <h3>General Inquiries</h3>
                <p>info@greenadopt.org</p>
              </div>
            </div>
            <div className="contact-item">
              <span className="contact-icon">🤝</span>
              <div>
                <h3>Volunteer & Partnerships</h3>
                <p>partnerships@greenadopt.org</p>
              </div>
            </div>
            <div className="contact-item">
              <span className="contact-icon">📞</span>
              <div>
                <h3>Phone</h3>
                <p>+1 (555) 123-4567</p>
              </div>
            </div>
            <div className="contact-item">
              <span className="contact-icon">📍</span>
              <div>
                <h3>Office Address</h3>
                <p>123 Green Street<br />Eco City, EC 12345</p>
              </div>
            </div>
            <div className="contact-item">
              <span className="contact-icon">🕒</span>
              <div>
                <h3>Office Hours</h3>
                <p>Monday - Friday: 9:00 AM - 6:00 PM<br />Saturday: 10:00 AM - 4:00 PM</p>
              </div>
            </div>
          </div>
          
          <div className="contact-form">
            <h2>Send us a Message</h2>
            <form>
              <div className="form-group">
                <label htmlFor="name">Full Name *</label>
                <input type="text" id="name" name="name" required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email Address *</label>
                <input type="email" id="email" name="email" required />
              </div>
              <div className="form-group">
                <label htmlFor="subject">Subject *</label>
                <select id="subject" name="subject" required>
                  <option value="">Select a subject</option>
                  <option value="tree-adoption">Tree Adoption Inquiry</option>
                  <option value="volunteer">Volunteer Opportunities</option>
                  <option value="partnership">Partnership & Collaboration</option>
                  <option value="donation">Donation & Support</option>
                  <option value="education">Environmental Education</option>
                  <option value="general">General Inquiry</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="message">Message *</label>
                <textarea id="message" name="message" rows={5} required 
                  placeholder="Tell us how we can help you or how you'd like to get involved with our mission..."></textarea>
              </div>
              <button type="submit" className="btn btn-primary">Send Message</button>
            </form>
          </div>
        </div>

        <div className="additional-info">
          <h2>Ways to Get Involved</h2>
          <div className="involvement-grid">
            <div className="involvement-card">
              <span className="involvement-icon">🌳</span>
              <h3>Adopt a Tree</h3>
              <p>Choose a tree to adopt and track its environmental impact over time.</p>
              <a href="/trees" className="btn btn-secondary">Browse Trees</a>
            </div>
            <div className="involvement-card">
              <span className="involvement-icon">🤝</span>
              <h3>Volunteer</h3>
              <p>Join our volunteer program and help with community events and tree care.</p>
              <a href="/contact" className="btn btn-secondary">Learn More</a>
            </div>
            <div className="involvement-card">
              <span className="involvement-icon">💝</span>
              <h3>Donate</h3>
              <p>Support our mission through financial contributions to help us plant more trees.</p>
              <a href="/contact" className="btn btn-secondary">Donate Now</a>
            </div>
            <div className="involvement-card">
              <span className="involvement-icon">🏢</span>
              <h3>Partner With Us</h3>
              <p>Organizations can partner with us for corporate social responsibility initiatives.</p>
              <a href="/contact" className="btn btn-secondary">Partner</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
