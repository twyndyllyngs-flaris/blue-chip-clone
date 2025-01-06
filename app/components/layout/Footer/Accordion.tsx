'use client'

import Link from 'next/link'
import React, { useState } from 'react'

const Accordion = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index)
  }

  const items = [
    {
      id: 1,
      title: 'Games',
      gridColNum: 2,
      content: [
        'Slots',
        'Provable Fair',
        'Live Casino',
        'Jackpot Games',
      ]
    },
    {
      id: 2,
      title: 'About',
      gridColNum: 2,
      content: [
        'About Us',
        'VIP',
        'Certificates',
        'Promotions',
        'Help Center',
        'App'
      ]
    },
    {
      id: 3,
      title: 'Legal Information',
      gridColNum: 1,
      content: [
        'General Terms and Conditions',
        'Responsible Gaming Policy',
        'Sports Betting Rules',
        'Privacy and Cookies Policy',
        'Payment Methods',
        'Casino Bonus Terms and Conditions',
        'Limits'
      ]
    },
    {
        id: 4,
        title: '\u{1F1EC}\u{1F1E7} English',
        gridColNum: 1,
        content: [
          'English',
        ]
      }
  ]

  return (
    <div className='w-full'>
      {items.map((item, index) => (
        <section key={item.id} className='px-4 bg-[#1a3157] rounded-xl mb-[20px]'>
          <button
            onClick={() => toggleAccordion(index)}
            className={`w-full text-left flex justify-between items-center py-[10px] border-b border-solid active:scale-[.99] active:opacity-80   
                ${
                  activeIndex === index
                    ? 'border-[#79797954]'
                    : 'border-[#79797900]'
                } transition-all duration-[.3s] ease-in-out`}
            aria-expanded={activeIndex === index}
            aria-controls={`accordion-content-${index}`}
          >
            <span className='font-medium text-white'>{item.title}</span>
            <svg
              className={`w-5 h-5 transition-transform ${
                activeIndex === index ? 'rotate-180' : ''
              }`}
              fill='none'
              stroke='currentColor'
              strokeWidth='2'
              viewBox='0 0 24 24'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M19 9l-7 7-7-7'
              ></path>
            </svg>
          </button>
          <div
            id={`accordion-content-${index}`}
            className={`overflow-hidden transition-[max-height] duration-300 ease-in-out box-content
                ${activeIndex === index ? 'max-h-[300px]' : 'max-h-0'}`}
          >
            <nav className='my-4 w-full '>
              <ul className={`grid ${item.gridColNum === 2 ? 'grid-cols-2' : 'grid-cols-1'} gap-6`}>
                {item.content.map((links, index) => (
                  <li key={index}>
                    <Link href={'/'} passHref>
                      <p className='text-[#cad3e1]'>{links}</p>
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </section>
      ))}
    </div>
  )
}

export default Accordion