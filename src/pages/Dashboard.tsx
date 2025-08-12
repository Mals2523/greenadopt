import React from 'react';
import './Dashboard.css';

const Dashboard: React.FC = () => {
  const userStats = {
    adoptedTrees: 3,
    totalCO2Absorbed: 125.5,
    totalOxygenProduced: 92.3,
    totalWaterConserved: 2400,
    memberSince: '2023'
  };

  const adoptedTrees = [
    {
      id: 1,
      name: 'Oakley',
      species: 'Quercus robur',
      location: 'Central Park',
      adoptedDate: '2024-01-15',
      health: 'Excellent',
      image: '🌳'
    },
    {
      id: 2,
      name: 'Maple',
      species: 'Acer saccharum',
      location: 'Riverside Park',
      adoptedDate: '2024-02-01',
      health: 'Good',
      image: '🍁'
    },
    {
      id: 3,
      name: 'Pine',
      species: 'Pinus sylvestris',
      location: 'Mountain View',
      adoptedDate: '2024-02-15',
      health: 'Excellent',
      image: '🌲'
    }
  ];

  return (
    <div className="dashboard">
      <div className="container">
        <h1>My Dashboard</h1>
        <p>Welcome back! Here's an overview of your tree adoption journey.</p>
        
        <div className="dashboard-stats">
          <div className="stat-card">
            <span className="stat-icon">🌳</span>
            <div className="stat-info">
              <h3>{userStats.adoptedTrees}</h3>
              <p>Trees Adopted</p>
            </div>
          </div>
          <div className="stat-card">
            <span className="stat-icon">💨</span>
            <div className="stat-info">
              <h3>{userStats.totalCO2Absorbed} kg</h3>
              <p>CO₂ Absorbed</p>
            </div>
          </div>
          <div className="stat-card">
            <span className="stat-icon">🌱</span>
            <div className="stat-info">
              <h3>{userStats.totalOxygenProduced} kg</h3>
              <p>Oxygen Produced</p>
            </div>
          </div>
          <div className="stat-card">
            <span className="stat-icon">💧</span>
            <div className="stat-info">
              <h3>{userStats.totalWaterConserved} L</h3>
              <p>Water Conserved</p>
            </div>
          </div>
        </div>

        <div className="dashboard-content">
          <div className="adopted-trees-section">
            <h2>My Adopted Trees</h2>
            <div className="trees-grid">
              {adoptedTrees.map(tree => (
                <div key={tree.id} className="tree-card">
                  <div className="tree-image">{tree.image}</div>
                  <div className="tree-info">
                    <h3>{tree.name}</h3>
                    <p className="tree-species">{tree.species}</p>
                    <p className="tree-location">📍 {tree.location}</p>
                    <p className="tree-date">Adopted: {tree.adoptedDate}</p>
                    <div className={`tree-health ${tree.health.toLowerCase()}`}>
                      {tree.health}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="recent-activity">
            <h2>Recent Activity</h2>
            <div className="activity-list">
              <div className="activity-item">
                <span className="activity-icon">🌱</span>
                <div className="activity-content">
                  <h4>Tree Growth Update</h4>
                  <p>Oakley has grown 5cm this month!</p>
                  <span className="activity-date">2 days ago</span>
                </div>
              </div>
              <div className="activity-item">
                <span className="activity-icon">💧</span>
                <div className="activity-content">
                  <h4>Watering Completed</h4>
                  <p>Maple received its weekly watering</p>
                  <span className="activity-date">1 week ago</span>
                </div>
              </div>
              <div className="activity-item">
                <span className="activity-icon">🌳</span>
                <div className="activity-content">
                  <h4>New Tree Adopted</h4>
                  <p>You adopted Pine in Mountain View</p>
                  <span className="activity-date">2 weeks ago</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
