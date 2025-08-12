import React from 'react';
import { Link } from 'react-router-dom';
import { useAvailableTrees } from '../hooks/useFirestore';
import './TreeCatalog.css';

const TreeCatalog: React.FC = () => {
  const { trees, loading, error } = useAvailableTrees();

  if (loading) {
    return (
      <div className="tree-catalog">
        <div className="container">
          <div className="loading">Loading trees...</div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="tree-catalog">
        <div className="container">
          <div className="error">Error: {error}</div>
        </div>
      </div>
    );
  }

  return (
    <div className="tree-catalog">
      <div className="container">
        <h1>Tree Catalog</h1>
        <p>Browse available trees for adoption and find your perfect match.</p>
        
        {trees.length === 0 ? (
          <div className="no-trees">
            <p>No trees available for adoption at the moment.</p>
          </div>
        ) : (
          <div className="catalog-grid">
            {trees.map(tree => (
              <div key={tree.id} className="tree-card">
                <div className="tree-image">
                  <img src={tree.imageUrl} alt={tree.name} />
                </div>
                <div className="tree-info">
                  <h3>{tree.name}</h3>
                  <p className="tree-species">{tree.species}</p>
                  <p className="tree-location">📍 {tree.location.address}, {tree.location.city}</p>
                  <p className="tree-age">Planted: {tree.plantedDate?.toLocaleDateString()}</p>
                  <p className="tree-health">Health: {tree.health}</p>
                  <div className={`tree-status ${tree.status.toLowerCase()}`}>
                    {tree.status}
                  </div>
                  <div className="environmental-impact">
                    <small>CO₂ absorbed: {tree.environmentalImpact.co2Absorbed}kg</small>
                  </div>
                  {tree.status === 'available' && (
                    <Link to={`/tree/${tree.id}`} className="btn btn-primary">
                      Adopt This Tree
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default TreeCatalog;
