import React from 'react';
import TypingAnimation from './TypingAnimation';

const HomePage: React.FC = () => {
  return (
    <div className="relative w-full h-screen flex items-center justify-center px-6 -mt-16">
      <div className="max-w-4xl w-full flex flex-col items-center text-center">
        
        {/* Name */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white tracking-tight mb-6">
          Tanmay Galav
        </h1>

        {/* Identity line */}
        <p className="text-gray-400 text-base md:text-lg mb-8 max-w-2xl">
          Building hardware–software systems with a focus on logic, design, and real-world constraints.
        </p>

        {/* Typing animation — isolated container */}
        <div className="h-8 mb-12 flex items-center justify-center overflow-hidden">
          <div className="text-lg md:text-xl text-gray-300">
            <TypingAnimation
              texts={[
                'Systems Thinking',
                'Full-Stack Engineering',
                'Embedded & IoT',
                'Algorithms',
                'ML Foundations',
              ]}
            />
          </div>
        </div>

        {/* CTA buttons */}
        <div className="flex items-center gap-8">
          <a
            href="#/projects"
            className="text-sm font-medium text-black bg-white px-6 py-2.5 rounded-full
                       hover:bg-gray-200 transition-all duration-300"
          >
            View Projects
          </a>

          <a
            href="#/contact"
            className="text-sm font-medium text-gray-400 hover:text-white transition-colors"
          >
            Contact
          </a>
        </div>

      </div>
    </div>
  );
};

export default HomePage;
