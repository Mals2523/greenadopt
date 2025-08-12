import React from 'react';
import { useParams } from 'react-router-dom';
import './TreeDetail.css';

const TreeDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  
  // Mock tree data
  const tree = {
    id: parseInt(id || '1'),
    name: 'Oak Tree',
    species: 'Quercus robur',
    location: 'Central Park, New York',
    age: '5 years',
    height: '12 meters',
    diameter: '45 cm',
    health: 'Excellent',
    status: 'Available',
    image: '🌳',
    description: 'A majestic oak tree that provides excellent shade and habitat for local wildlife.',
    environmentalImpact: {
      co2Absorbed: 125.5,
      oxygenProduced: 92.3,
      waterConserved: 2400
    }
  };

  return (
    <div className="tree-detail">
      <div className="container">
        <div className="tree-detail-grid">
          <div className="tree-image-section">
            <div className="tree-image">{tree.image}</div>
            <div className="tree-status-badge">{tree.status}</div>
          </div>
          
          <div className="tree-info-section">
            <h1>{tree.name}</h1>
            <p className="tree-species">{tree.species}</p>
            <p className="tree-description">{tree.description}</p>
            
            <div className="tree-stats">
              <div className="stat-item">
                <span className="stat-label">Location</span>
                <span className="stat-value">📍 {tree.location}</span>
              </div>
              <div className="stat-item">
                <span className="stat-label">Age</span>
                <span className="stat-value">{tree.age}</span>
              </div>
              <div className="stat-item">
                <span className="stat-label">Height</span>
                <span className="stat-value">{tree.height}</span>
              </div>
              <div className="stat-item">
                <span className="stat-label">Diameter</span>
                <span className="stat-value">{tree.diameter}</span>
              </div>
              <div className="stat-item">
                <span className="stat-label">Health</span>
                <span className="stat-value health-excellent">{tree.health}</span>
              </div>
            </div>
            
            <div className="environmental-impact">
              <h2>Environmental Impact</h2>
              <div className="impact-grid">
                <div className="impact-card">
                  <span className="impact-icon">💨</span>
                  <div className="impact-info">
                    <h3>{tree.environmentalImpact.co2Absorbed} kg</h3>
                    <p>CO₂ Absorbed</p>
                  </div>
                </div>
                <div className="impact-card">
                  <span className="impact-icon">🌱</span>
                  <div className="impact-info">
                    <h3>{tree.environmentalImpact.oxygenProduced} kg</h3>
                    <p>Oxygen Produced</p>
                  </div>
                </div>
                <div className="impact-card">
                  <span className="impact-icon">💧</span>
                  <div className="impact-info">
                    <h3>{tree.environmentalImpact.waterConserved} L</h3>
                    <p>Water Conserved</p>
                  </div>
                </div>
              </div>
            </div>
            
            {tree.status === 'Available' && (
              <div className="adoption-section">
                <h2>Adopt This Tree</h2>
                <p>By adopting this tree, you'll receive regular updates on its growth and environmental impact.</p>
                <button className="btn btn-primary btn-large">Adopt Now</button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TreeDetail;
