import React from 'react'

const SearchButton = () => {
  return (
    <div>
      <button
        aria-label="Search" // Added to describe the button's action
        className='md:flex items-center mx-[20px] 
        md:w-[25px] md:h-[25px] 
        lg:w-[27px] lg:h-[27px] lg:ml-[40px] lg:mr-[24px] 
        xl:w-[30px] xl:h-[30px] 
        2xl:ml-[40px] scale-100 hover:scale-[110%] transition-all hidden duration-150 active:scale-95 active:opacity-80'
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
    </div>
  )
}

export default SearchButton
