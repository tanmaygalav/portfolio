
import React from 'react';
import type { Page } from '../types';

interface HeaderProps {
  currentPage: Page;
  setCurrentPage: (page: Page) => void;
}

const NavLink: React.FC<{
  page: Page;
  currentPage: Page;
  setCurrentPage: (page: Page) => void;
  children: React.ReactNode;
}> = ({ page, currentPage, setCurrentPage, children }) => {
  const isActive = currentPage === page;
  return (
    <button
      onClick={() => setCurrentPage(page)}
      className={`relative px-3 py-2 text-sm font-medium transition-colors duration-300 ${
        isActive ? 'text-white' : 'text-gray-400 hover:text-white'
      }`}
    >
      {children}
      {isActive && (
        <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2/3 h-0.5 bg-white rounded-full motion-safe:transition-all motion-safe:duration-300"></span>
      )}
    </button>
  );
};

const Header: React.FC<HeaderProps> = ({ currentPage, setCurrentPage }) => {
  const pages: Page[] = ['home', 'about', 'projects', 'contact'];

  return (
    <header className="fixed top-0 left-0 w-full z-50 p-4 flex justify-center">
      <nav className="bg-black/50 backdrop-blur-md border border-gray-800 rounded-full px-4 py-2">
        <ul className="flex items-center space-x-2 md:space-x-4">
          {pages.map((page) => (
            <li key={page}>
              <NavLink page={page} currentPage={currentPage} setCurrentPage={setCurrentPage}>
                <span className="capitalize">{page}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
