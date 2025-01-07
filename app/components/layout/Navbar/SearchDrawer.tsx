'use client';

import React, { useState, useEffect } from 'react';

const SearchDrawer: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true); // Set client-side flag
  }, []);

  useEffect(() => {
    if (!isClient) return; // Ensure it runs only on the client

    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY > 650) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isClient]);

  if (!isClient) return null; // Prevent SSR mismatch

  return (
    <section
      className={`bg-theme-secondary md:-translate-y-[50px] translate-y-0 absolute top-[60px] left-[0] right-[0] bottom-[-50px] w-full transition-all duration-[.3s] ${isVisible ? 'translate-y-[0px]' : 'translate-y-[-50px]'}`}
      role='region'
      aria-labelledby='search-drawer-title'
    >
      <div className='px-[15px] py-[10px] flex items-center mb-0 border-none gap-2'>
        <button
          aria-label='Close search drawer'
          className='w-[25px] h-[25px]'
        >
          <svg
            width='100%'
            height='100%'
            viewBox='0 0 24 24'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
            stroke='#ffffff'
          >
            <path
              d='M16.6725 16.6412L21 21M19 11C19 15.4183 15.4183 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11Z'
              stroke='#ffffff'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
          </svg>
        </button>
        <div className='w-full'>
          <form>
            <input
              id='search-input'
              required
              placeholder='Search games, tags or providers'
              type='search'
              aria-labelledby='search-drawer-title search-input'
              className='w-full bg-theme-secondary text-[13px] px-2 py-1'
            />
          </form>
        </div>
      </div>
    </section>
  );
};

export default SearchDrawer;
