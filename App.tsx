import React, { useState, useEffect } from 'react';
// Change BrowserRouter to HashRouter
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

// Import your components
import Header from './components/Header';
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import ProjectsPage from './components/ProjectsPage';
import ContactPage from './components/ContactPage';
import Silk from './components/Silk'; // Assuming you have this background component
import PageLayout from './components/PageLayout'; // We'll create this for consistent padding
import DotGrid from './components/DotGrid';
const AppContent: React.FC = () => {
  const location = useLocation(); // Hook to detect URL changes for animations

  return (
    <div className="min-h-screen bg-black text-white selection:bg-white selection:text-black">
      {/* 1. PERSISTENT BACKGROUND LAYER */}
      <div className="fixed top-0 left-0 w-full h-full z-0">
        <div style={{ width: '100%', height: '800px', position: 'relative' }}>
          <DotGrid
            dotSize={3}
            gap={15}
            baseColor="#1a1a1a"
            activeColor="#5227FF"
            proximity={120}
            shockRadius={250}
            shockStrength={5}
            resistance={750}
            returnDuration={1.5}
          />
        </div>
      </div>

      {/* 2. CONTENT LAYER */}
      <div className="relative z-10">
        <Header />
        <main>
          {/* AnimatePresence handles the enter/exit animations */}
          <AnimatePresence mode="wait">
            {/* The key={location.pathname} is crucial for AnimatePresence to detect page changes */}
            <Routes location={location} key={location.pathname}>
              {/* Route for the full-screen HomePage */}
              <Route index element={<HomePage />} />

              {/* Routes for other pages that need padding, wrapped in PageLayout */}
              <Route path="/about" element={<PageLayout><AboutPage /></PageLayout>} />
              <Route path="/projects" element={<PageLayout><ProjectsPage /></PageLayout>} />
              <Route path="/contact" element={<PageLayout><ContactPage /></PageLayout>} />
            </Routes>
          </AnimatePresence>
        </main>
      </div>
    </div>
  );
};

// Main App component now just sets up the Router
const App: React.FC = () => (
  <Router>
    <AppContent />
  </Router>
);

export default App;
