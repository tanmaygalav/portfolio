import React from 'react';
import { motion } from 'framer-motion';

const stairAnimation = {
  // For the new page entering: stairs start covering the screen
  initial: {
    top: '0%',
  },
  // And animate upwards to reveal the content
  animate: {
    top: '-100%',
  },
  // For the old page exiting: stairs animate from their resting state to cover the screen
  exit: {
    top: '0%',
  },
};

const reverseIndex = (index: number, total: number) => total - index - 1;

const Stair: React.FC<{ index: number; total: number }> = ({ index, total }) => {
  return (
    <motion.div
      className="absolute top-0 h-full bg-black"
      style={{
        left: `${index * (100 / total)}%`,
        // NOTE: Added a 2px overlap to prevent visual gaps between stairs
        // caused by browser subpixel rounding with percentage-based widths.
        width: `calc(${100 / total}% + 2px)`,
        // Resting state: hidden at the bottom.
        top: '100%', 
      }}
      variants={stairAnimation}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{
        duration: 0.6,
        ease: [0.76, 0, 0.24, 1],
        delay: reverseIndex(index, total) * 0.075,
      }}
    />
  );
};

const StaircaseTransition: React.FC = () => {
  const numberOfStairs = 6;
  return (
    <div
      className="fixed top-0 left-0 w-screen h-screen pointer-events-none z-50 overflow-hidden"
      aria-hidden="true"
    >
      {[...Array(numberOfStairs)].map((_, index) => (
        <Stair key={index} index={index} total={numberOfStairs} />
      ))}
    </div>
  );
};

export default StaircaseTransition;
