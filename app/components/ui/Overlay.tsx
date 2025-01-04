'use client';

import React, { useEffect } from 'react';

const Overlay = () => {

  useEffect(() => {
    // Disable scrolling when the overlay is visible
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  return (
    <div className='absolute top-0 right-0 bottom-0 left-0 z-[999] flex h-screen bg-theme-primary opacity-90 transition-all duration-[.3s] ease-in-out'>

    </div>
  );
};

export default Overlay;
