
import React, { Suspense } from 'react';
import TypingAnimation from './TypingAnimation';
import ThreeScene from './ThreeScene';

const HomePage: React.FC = () => {
  return (
    <div className="relative w-full h-screen flex flex-col items-center justify-center -mt-16">
       <div className="absolute inset-0 z-0">
         <Suspense fallback={<div className="w-full h-full bg-black flex items-center justify-center"><p>Loading 3D Scene...</p></div>}>
            <ThreeScene />
         </Suspense>
       </div>

      <div className="relative z-10 text-center flex flex-col items-center">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white tracking-tighter">
          Tanmay Galav
        </h1>
        <div className="mt-4 text-xl md:text-2xl text-gray-300 h-8">
           <TypingAnimation
              texts={['MERN Stack Developer', 'ECE Student @ VIT Chennai', 'Tech Enthusiast']}
            />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
