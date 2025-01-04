import React from 'react'

const SearchDrawer: React.FC = () => {
  return (
    <div className='bg-theme-secondary translate-y-0 md:-translate-y-[50px] absolute top-[60] left-[0] right-[0] bottom-[-50px] w-full transition-all duration-[.3s]'>
      <div className='px-[15px] py-[10px] flex items-center mb-0 border-none gap-2'>
        <span className='w-[25px] h-[25px]'>
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
              {' '}
              <path
                d='M16.6725 16.6412L21 21M19 11C19 15.4183 15.4183 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11Z'
                stroke='#ffffff'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
              ></path>{' '}
            </g>
          </svg>
        </span>
        <div className='w-full'>
          <form>
            <input
              required
              placeholder='Search games, tags or providers'
              type='search'
           
              className='w-full bg-theme-secondary text-[13px] px-2 py-1'
            />
          </form>
        </div>
      </div>
    </div>
  )
}

export default SearchDrawer
