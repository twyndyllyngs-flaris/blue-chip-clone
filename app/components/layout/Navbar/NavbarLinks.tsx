'use client';

import React, { useState } from 'react';
import Link from 'next/link';

const NavbarLinks = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const handleMouseEnter = (index: number) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  return (
    <ul className="hidden md:flex items-center mr-auto text-text-secondary">
      <li
        className="rounded-md px-[12px]"
        onMouseEnter={() => handleMouseEnter(0)}
        onMouseLeave={handleMouseLeave}
      >
        <Link
          href={'/'}
          aria-label="Sport"
          className={`${
            hoveredIndex !== null && hoveredIndex !== 0
              ? 'text-[#ffffff66]'
              : 'text-text-secondary'
          } hidden md:block md:text-[12px] lg:text-[13px] xl:text-[14px] uppercase font-medium transition-all duration-[.4s] ease-in-out active:scale-95 active:opacity-80`}
        >
          Sport
        </Link>
      </li>
      <li
        className="rounded-md px-[12px]"
        onMouseEnter={() => handleMouseEnter(1)}
        onMouseLeave={handleMouseLeave}
      >
        <Link
          href={'/'}
          aria-label="Live Betting"
          className={`${
            hoveredIndex !== null && hoveredIndex !== 1
              ? 'text-[#ffffff66]'
              : 'text-text-secondary'
          } hidden md:block md:text-[12px] lg:text-[13px] xl:text-[14px] uppercase font-medium transition-all duration-[.4s] ease-in-out active:scale-95 active:opacity-80`}
        >
          Live Betting
        </Link>
      </li>
      <li
        className="rounded-md px-[12px]"
        onMouseEnter={() => handleMouseEnter(2)}
        onMouseLeave={handleMouseLeave}
      >
        <Link
          href={'/'}
          aria-label="Live Casino"
          className={`${
            hoveredIndex !== null && hoveredIndex !== 2
              ? 'text-[#ffffff66]'
              : 'text-text-secondary'
          } hidden md:block md:text-[12px] lg:text-[13px] xl:text-[14px] uppercase font-medium transition-all duration-[.4s] ease-in-out active:scale-95 active:opacity-80`}
        >
          Live Casino
        </Link>
      </li>
      <li
        className="rounded-md px-[12px]"
        onMouseEnter={() => handleMouseEnter(3)}
        onMouseLeave={handleMouseLeave}
      >
        <Link
          href={'/'}
          aria-label="Casino"
          className={`${
            hoveredIndex !== null && hoveredIndex !== 3
              ? 'text-[#ffffff66]'
              : 'text-text-secondary'
          } hidden lg:block md:text-[12px] lg:text-[13px] xl:text-[14px] uppercase font-medium transition-all duration-[.4s] ease-in-out active:scale-95 active:opacity-80`}
        >
          Casino
        </Link>
      </li>
      <li
        className="rounded-md px-[12px]"
        onMouseEnter={() => handleMouseEnter(4)}
        onMouseLeave={handleMouseLeave}
      >
        <Link
          href={'/'}
          aria-label="Promotions"
          className={`${
            hoveredIndex !== null && hoveredIndex !== 4
              ? 'text-[#ffffff66]'
              : 'text-text-secondary'
          } hidden xl:block md:text-[12px] lg:text-[13px] xl:text-[14px] uppercase font-medium transition-all duration-[.4s] ease-in-out active:scale-95 active:opacity-80`}
        >
          Promotions
        </Link>
      </li>
      <li
        className="rounded-md px-[12px]"
        onMouseEnter={() => handleMouseEnter(5)}
        onMouseLeave={handleMouseLeave}
      >
        <Link
          href={'/'}
          aria-label="VIP"
          className={`${
            hoveredIndex !== null && hoveredIndex !== 5
              ? 'text-[#ffffff66]'
              : 'text-text-secondary'
          } hidden xl:block md:text-[12px] lg:text-[13px] xl:text-[14px] uppercase font-medium transition-all duration-[.4s] ease-in-out active:scale-95 active:opacity-80`}
        >
          VIP
        </Link>
      </li>
    </ul>
  );
};

export default NavbarLinks;
