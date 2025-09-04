import React, { useState, Suspense } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Header from './components/Header';
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import ProjectsPage from './components/ProjectsPage';
import ContactPage from './components/ContactPage';
import StaircaseTransition from './components/StaircaseTransition';
import type { Page } from './types';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'about':
        return <AboutPage />;
      case 'projects':
        return <ProjectsPage />;
      case 'contact':
        return <ContactPage />;
      case 'home':
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen bg-black text-white selection:bg-white selection:text-black">
      <div className="fixed top-0 left-0 w-full h-full z-0">
        <Suspense fallback={<div className="w-full h-full bg-black" />}>
          {/* 3D background could be placed here if it should persist across all pages */}
        </Suspense>
      </div>
      <div className="relative z-10">
        <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
        <main className="px-4 sm:px-8 md:px-12 lg:px-24 py-16">
           <AnimatePresence mode="wait">
            <div key={currentPage}>
              <StaircaseTransition />
              {renderPage()}
            </div>
           </AnimatePresence>
        </main>
      </div>
    </div>
  );
};

export default App;
