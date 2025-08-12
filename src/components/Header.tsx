import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';

const Header: React.FC = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const location = useLocation();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleProfileMenuClose = () => {
    setAnchorEl(null);
  };

  const isActive = (path: string) => location.pathname === path;

  const menuItems = [
    { text: 'Home', path: '/' },
    { text: 'Adopt Trees', path: '/trees' },
    { text: 'Dashboard', path: '/dashboard' },
    { text: 'About', path: '/about' },
    { text: 'Contact', path: '/contact' },
  ];

  return (
    <>
      <header className="header">
        <div className="header-container">
          <button
            className="mobile-menu-button"
            onClick={handleDrawerToggle}
            aria-label="open drawer"
          >
            <span className="menu-icon">☰</span>
          </button>

          <div className="header-brand">
            <span className="brand-icon">🌳</span>
            <Link to="/" className="brand-text">
              GreenAdopt
            </Link>
          </div>

          <nav className="header-nav">
            {menuItems.map((item) => (
              <Link
                key={item.text}
                to={item.path}
                className={`nav-link ${isActive(item.path) ? 'active' : ''}`}
              >
                {item.text}
              </Link>
            ))}
          </nav>

          <div className="header-profile">
            <button
              className="profile-button"
              onClick={handleProfileMenuOpen}
            >
              <span className="profile-avatar">👤</span>
            </button>
            {anchorEl && (
              <div className="profile-menu">
                <Link to="/dashboard" className="profile-menu-item" onClick={handleProfileMenuClose}>
                  📊 Dashboard
                </Link>
                <button className="profile-menu-item" onClick={handleProfileMenuClose}>
                  Profile
                </button>
                <button className="profile-menu-item" onClick={handleProfileMenuClose}>
                  Logout
                </button>
              </div>
            )}
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="mobile-drawer-overlay" onClick={handleDrawerToggle}>
          <div className="mobile-drawer" onClick={(e) => e.stopPropagation()}>
            <div className="drawer-header">
              <span className="brand-icon">🌳</span>
              <span className="brand-text">GreenAdopt</span>
            </div>
            <nav className="drawer-nav">
              {menuItems.map((item) => (
                <Link
                  key={item.text}
                  to={item.path}
                  className={`drawer-nav-link ${isActive(item.path) ? 'active' : ''}`}
                  onClick={handleDrawerToggle}
                >
                  {item.text}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
