import React from 'react';
import { NavLink } from 'react-router-dom';

// Define the navigation items with their corresponding paths and names.
const navItems = [
  { path: '/', name: 'home' },
  { path: '/about', name: 'about' },
  { path: '/projects', name: 'projects' },
  { path: '/contact', name: 'contact' },
];

const Header: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 w-full z-50 p-4 flex justify-center">
      <nav className="bg-black/50 backdrop-blur-md border border-gray-800 rounded-full px-4 py-2">
        <ul className="flex items-center space-x-2 md:space-x-4">
          {navItems.map((item) => (
            <li key={item.name}>
              {/* We use NavLink from react-router-dom.
                It automatically knows if the link is "active" based on the current URL.
              */}
              <NavLink
                to={item.path}
                // The `className` prop can accept a function to apply styles conditionally.
                className={({ isActive }) =>
                  `relative px-3 py-2 text-sm font-medium transition-colors duration-300 ${
                    isActive ? 'text-white' : 'text-gray-400 hover:text-white'
                  }`
                }
              >
                {/* The children of NavLink can also be a function, giving us access to `isActive` 
                  to conditionally render elements like the underline.
                */}
                {({ isActive }) => (
                  <>
                    <span className="capitalize">{item.name}</span>
                    {isActive && (
                      <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2/3 h-0.5 bg-white rounded-full motion-safe:transition-all motion-safe:duration-300"></span>
                    )}
                  </>
                )}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
