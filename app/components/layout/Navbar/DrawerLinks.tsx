'use client'

import Link from 'next/link'
import Image from 'next/image'
import React, { useState } from 'react';

const DrawerLinks = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  const handleMouseEnter = (index: number) => {
    setHoveredIndex(index)
  }

  const handleMouseLeave = () => {
    setHoveredIndex(null)
  }

  // Array of links for easier management
  const links = [
    {
      href: '/',
      imageSrc: '/assets/home.svg',
      alt: 'Home Button',
      text: 'Home',
      ariaLabel: 'Navigate to Home'
    },
    {
      href: '/',
      imageSrc: '/assets/casino.svg',
      alt: 'Casino Nav Button',
      text: 'Casino',
      ariaLabel: 'Navigate to Casino'
    },
    {
        href: '/',
        imageSrc: '/assets/live-casino.svg',
        alt: 'Live Casino Nav Button',
        text: 'Live Casino',
        ariaLabel: 'Navigate to Live Casino'
    },
    {
        href: '/',
        imageSrc: '/assets/sport.svg',
        alt: 'Sport Nav Button',
        text: 'Sport',
        ariaLabel: 'Navigate to Sport'
    },
    {
        href: '/',
        imageSrc: '/assets/game-providers.svg',
        alt: 'Game Providers Nav Button',
        text: 'Game Providers',
        ariaLabel: 'Navigate to Game Providers'
    },
    {
        href: '/',
        imageSrc: '/assets/promotions.svg',
        alt: 'Promotions Nav Button',
        text: 'Promotions',
        ariaLabel: 'Navigate to Promotions'
    },
    {
        href: '/',
        imageSrc: '/assets/lucky-loot.svg',
        alt: 'Lucky Loot Nav Button',
        text: 'Lucky Loot',
        ariaLabel: 'Navigate to Lucky Loot'
    },
    {
        href: '/',
        imageSrc: '/assets/tournaments.svg',
        alt: 'Tournaments Nav Button',
        text: 'Tournaments',
        ariaLabel: 'Navigate to Tournaments' 
    },
    {
        href: '/',
        imageSrc: '/assets/about-crypto.svg',
        alt: 'About Crypto Nav Button',
        text: 'About Crypto',
        ariaLabel: 'Navigate to About Crypto' 
    },
    {
        href: '/',
        imageSrc: '/assets/more.svg',
        alt: 'More Nav Button',
        text: 'More',
        ariaLabel: 'Navigate to More' 
    },
  ]

  return (
    <nav aria-label='Main Navigation'>
      <ul className='mb-[37px] list-none'>
        {links.map((link, index) => (
          <li
            key={index}
            className={`transition-[left] duration-[.2s] ease-in-out lg:duration-[.4s]`}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
          >
            <Link
              href={link.href}
              className={`${hoveredIndex !== null && hoveredIndex !== index ? 'opacity-50' : 'opacity-100'} 
                flex gap-[15px] items-center py-[19px] transform transition-all duration-[.4s] active:scale-95`}
              aria-label={link.ariaLabel} // Provides more descriptive context for screen readers
            >
              <div className='relative w-[25px] h-[25px] mr-[15px]'>
                <Image
                  src={link.imageSrc}
                  alt={link.alt}
                  layout='fill'
                  objectFit='cover'
                  className='absolute inset-0 text-transparent'
                />
              </div>
              <span className='text-[#f5f9ff] font-medium text-[18px] leading-[140%] capitalize'>
                {link.text}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default DrawerLinks
