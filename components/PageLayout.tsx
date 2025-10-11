// src/components/PageLayout.tsx

import React from 'react';
import StaircaseTransition from './StaircaseTransition';

interface PageLayoutProps {
  children: React.ReactNode;
}

const PageLayout: React.FC<PageLayoutProps> = ({ children }) => {
  return (
    <>
      <StaircaseTransition />
      <div className="px-4 sm:px-8 md:px-12 lg:px-24 py-16">
        {children}
      </div>
    </>
  );
};

export default PageLayout;