'use client'

import React, { useState } from 'react'

//components
import Drawer from './Drawer'

const DrawerButton = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)

  const toggleDrawer = () => {
    setIsDrawerOpen(prev => !prev)
  }

  return (
    <div className='flex items-center'>
      <button
        className='font-normal w-[30px] h-[30px] md:w-[35px] md:h-[35px] lg:w-[42px] lg:h-[42px] scale-100 hover:scale-[110%] transform transition-all duration-150 active:scale-95'
        onClick={toggleDrawer}
      >
        <svg
          width='100%'
          height='100%'
          viewBox='-2.8 -2.8 33.60 33.60'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
          stroke='#ffffff'
          strokeWidth='0.28'
        >
          <g id='SVGRepo_bgCarrier' strokeWidth='0'></g>
          <g
            id='SVGRepo_tracerCarrier'
            strokeLinecap='round'
            strokeLinejoin='round'
            stroke='#CCCCCC'
            strokeWidth='0.11200000000000002'
          ></g>
          <g id='SVGRepo_iconCarrier'>
            <path
              d='M4 7C4 6.44771 4.44772 6 5 6H24C24.5523 6 25 6.44771 25 7C25 7.55229 24.5523 8 24 8H5C4.44772 8 4 7.55229 4 7Z'
              fill='#ffffff'
            ></path>
            <path
              d='M4 13.9998C4 13.4475 4.44772 12.9997 5 12.9997L16 13C16.5523 13 17 13.4477 17 14C17 14.5523 16.5523 15 16 15L5 14.9998C4.44772 14.9998 4 14.552 4 13.9998Z'
              fill='#ffffff'
            ></path>
            <path
              d='M5 19.9998C4.44772 19.9998 4 20.4475 4 20.9998C4 21.552 4.44772 21.9997 5 21.9997H22C22.5523 21.9997 23 21.552 23 20.9998C23 20.4475 22.5523 19.9998 22 19.9998H5Z'
              fill='#ffffff'
            ></path>
          </g>
        </svg>
      </button>

      <Drawer closeDrawer={toggleDrawer} isDrawerOpen={isDrawerOpen} />
    </div>
  )
}

export default DrawerButton
