import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Components
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import TreeCatalog from './pages/TreeCatalog';
import TreeDetail from './pages/TreeDetail';
import Dashboard from './pages/Dashboard';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';

// Styles
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/trees" element={<TreeCatalog />} />
            <Route path="/tree/:id" element={<TreeDetail />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
