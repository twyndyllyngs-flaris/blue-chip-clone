import React from 'react'

const SearchDrawer: React.FC = () => {
  return (
    <section
      className='bg-theme-secondary translate-y-0 md:-translate-y-[50px] absolute top-[60px] left-[0] right-[0] bottom-[-50px] w-full transition-all duration-[.3s]'
      role="region" // This specifies a distinct section of content
      aria-labelledby="search-drawer-title" // For screen readers to recognize the purpose of the section
    >
      <div className='px-[15px] py-[10px] flex items-center mb-0 border-none gap-2'>
        <button
          aria-label="Close search drawer" // Clear description for the button functionality
          className='w-[25px] h-[25px]' // Button size for close icon
        >
          <svg
            width='100%'
            height='100%'
            viewBox='0 0 24 24'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
            stroke='#ffffff'
          >
            <g id='SVGRepo_bgCarrier' strokeWidth='0'></g>
            <g
              id='SVGRepo_tracerCarrier'
              strokeLinecap='round'
              strokeLinejoin='round'
            ></g>
            <g id='SVGRepo_iconCarrier'>
              <path
                d='M16.6725 16.6412L21 21M19 11C19 15.4183 15.4183 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11Z'
                stroke='#ffffff'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
              ></path>
            </g>
          </svg>
        </button>
        <div className='w-full'>
          <form>
            <input
              id="search-input" // ID for form reference and better semantics
              required
              placeholder='Search games, tags or providers'
              type='search'
              aria-labelledby="search-drawer-title search-input" // Better association with its label
              className='w-full bg-theme-secondary text-[13px] px-2 py-1'
            />
          </form>
        </div>
      </div>
    </section>
  )
}

export default SearchDrawer
