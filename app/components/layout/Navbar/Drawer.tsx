import Link from 'next/link'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'

// components
import DrawerLinks from './DrawerLinks'

// interfaces
interface DrawerProps {
  closeDrawer: () => void
  isDrawerOpen: boolean
}

const Drawer: React.FC<DrawerProps> = ({ closeDrawer, isDrawerOpen }) => {
  const [currentTime, setCurrentTime] = useState('')

  // Update the time after the component mounts (client-side only)
  useEffect(() => {
    const now = new Date()

    const options: Intl.DateTimeFormatOptions = {
      weekday: 'short',
      month: 'short',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      timeZone: 'UTC'
    }

    let formattedDate = now.toLocaleString('en-GB', options)
    formattedDate =
      formattedDate.replace(',', '').replace(' ', ' - ') + ' (UTC)'

    setCurrentTime(formattedDate)
  }, [])

  return (
    <section
      className={`fixed top-0 ${
        isDrawerOpen ? 'left-0' : '-left-[80%]'
      } z-[1000] flex flex-col w-[80%] max-w-[370px] h-full min-h-[calc(100vh - (100vh - 100%))] m-0 px-[20px] 
       pt-[20px] overflow-x-hidden overflow-y-auto bg-theme-secondary transition-[left] duration-[.2s] scrollbar-hide`}
      aria-hidden={!isDrawerOpen}
    >
      {/* Section for Drawer Header */}
      <header className='flex justify-between mb-[40px]' role='banner'>
        {/* Deposit button group */}
        <div className='flex gap-[10px] items-center h-[40px]'>
          <Link
            href={'/'}
            className='relative flex w-[110px] h-[40px] hover:opacity-80 transform transition-all duration-150 active:scale-95'
            aria-label='Navigate to home'
          >
            <Image
              src='/assets/drawer-promo.svg'
              alt='bluechip casino: play for real money | welcome bonus up to 500% - d-promo_button_20240207105834_0'
              layout='fill'
              objectFit='cover'
              className='absolute inset-0 text-transparent'
            />
          </Link>
          <Link
            href={'/'}
            className='relative flex w-[110px] h-[40px] hover:opacity-80 transform transition-all duration-150 active:scale-95'
            aria-label='Deposit promotion'
          >
            <Image
              src='/assets/drawer-deposit.png'
              alt='bluechip casino: play for real money | welcome bonus up to 500% - d-promo_button_20240207105834_0'
              layout='fill'
              objectFit='cover'
              className='absolute inset-0 text-transparent'
            />
          </Link>
        </div>

        {/* Close button */}
        <button
          onClick={closeDrawer}
          className='hover:scale-[110%] hover:opacity-80 transform transition-all duration-150 active:scale-95'
          aria-label='Close drawer'
        >
          <svg
            width='24px'
            height='24px'
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
              <g clipPath='url(#clip0_429_11083)'>
                <path
                  d='M7 7.00006L17 17.0001M7 17.0001L17 7.00006'
                  stroke='#ffffff'
                  strokeWidth='2.5'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                ></path>
              </g>
              <defs>
                <clipPath id='clip0_429_11083'>
                  <rect width='24' height='24' fill='white'></rect>
                </clipPath>
              </defs>
            </g>
          </svg>
        </button>
      </header>

      <DrawerLinks />

      <footer>
        {/* help center and live support button */}
        <div className='grid grid-cols-2 gap-[15px] mb-[20px]'>
          <button className='flex items-center justify-center gap-2 bg-violet-gradient text-white uppercase rounded-[10px] transition-all duration-[.2s] ease-in-out h-[45px]'>
            <span>
              <svg
                width='24px'
                height='24px'
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
                  <circle
                    cx='12'
                    cy='12'
                    r='9'
                    stroke='#ffffff'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                  ></circle>
                  <rect
                    height='0.01'
                    stroke='#ffffff'
                    strokeLinejoin='round'
                    strokeWidth='3'
                    width='0.01'
                    x='12'
                    y='16'
                  ></rect>
                  <path
                    d='M10.5858 7.58572C10.9754 7.1961 11.4858 7.00083 11.9965 6.99994C12.5095 6.99904 13.0228 7.1943 13.4142 7.58572C13.8047 7.97625 14 8.48809 14 8.99994C14 9.51178 13.8047 10.0236 13.4142 10.4141C13.0228 10.8056 12.5095 11.0008 11.9965 10.9999L12 11.9999'
                    stroke='#ffffff'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                  ></path>
                </g>
              </svg>
            </span>
            <span className='font-medium text-[13px] leading-[140%]'>
              Help Center
            </span>
          </button>

          <button className='flex items-center justify-center gap-2 bg-violet-gradient text-white uppercase rounded-[10px] transition-all duration-[.2s] ease-in-out h-[45px]'>
            <span>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 66 66'
                width='24'
                height='24'
                className='animate-spin'
              >
                <defs>
                  <clipPath id='__lottie_element_26'>
                    <rect width='66' height='66' x='0' y='0'></rect>
                  </clipPath>
                </defs>
                <g clipPath='url(#__lottie_element_26)'>
                  <g transform='matrix(1,0,0,1,33,33)' opacity='1'>
                    <g transform='matrix(2,0,0,2,0,0)'>
                      <path
                        strokeLinecap='butt'
                        strokeLinejoin='miter'
                        fillOpacity='0'
                        strokeMiterlimit='4'
                        stroke='rgb(255,255,255)'
                        strokeOpacity='0.11'
                        strokeWidth='4'
                        d='M0,-14.5 C8.00255012512207,-14.5 14.5,-8.00255012512207 14.5,0 C14.5,8.00255012512207 8.00255012512207,14.5 0,14.5 C-8.00255012512207,14.5 -14.5,8.00255012512207 -14.5,0 C-14.5,-8.00255012512207 -8.00255012512207,-14.5 0,-14.5z'
                      ></path>
                    </g>
                  </g>
                  <g
                    transform='matrix(0.9030668139457703,0.42950013279914856,-0.42950013279914856,0.9030668139457703,33,33)'
                    opacity='1'
                  >
                    <g transform='matrix(2,0,0,2,0,0)'>
                      <path
                        strokeLinecap='butt'
                        strokeLinejoin='miter'
                        fillOpacity='0'
                        strokeMiterlimit='4'
                        strokeDasharray='84'
                        strokeDashoffset='100'
                        stroke='rgb(255,255,255)'
                        strokeOpacity='1'
                        strokeWidth='4'
                        d='M0,-14.5 C-8.00255012512207,-14.5 -14.5,-8.00255012512207 -14.5,0 C-14.5,8.00255012512207 -8.00255012512207,14.5 0,14.5 C8.00255012512207,14.5 14.5,8.00255012512207 14.5,0 C14.5,-8.00255012512207 8.00255012512207,-14.5 0,-14.5z'
                      ></path>
                    </g>
                  </g>
                </g>
              </svg>
            </span>
            <span className='font-medium text-[13px] leading-[140%]'>
              Live Support
            </span>
          </button>
        </div>

        {/* add to your home screen */}
        <button className='w-full relative grid grid-cols-[1fr_6fr] gap-[15px] items-center mb-[75px] p-[10px] bg-[#1a3157] rounded-[12px] transition-all duration-[.2s] ease-in-out'>
          <div className='relative w-[41px] h-[41px]'>
            <Image
              src='/assets/favicon.webp'
              alt='Logo of the website'
              layout='fill'
              objectFit='cover'
              className='rounded-lg'
            />
          </div>
          <div className='text-left'>
            <p className='font-medium text-[15px] leading-[140%]'>
              Bluechip App
            </p>
            <p className='font-[400] text-[#90a2bd] text-[12px] leading-[140%]'>
              Add to your Home Screen
            </p>
          </div>
          <div className='font-medium absolute right-[17px]'>►</div>
        </button>

        {/* follow us socials */}
        <div className='mb-[66px] mt-[25px] flex flex-col items-center w-full'>
          <p className='mb-[18px] font-medium text-[15px] leading-[140%] whitespace-nowrap'>
            Follow Us
          </p>

          <div className='px-[15px] flex items-center justify-between w-full'>
            <Link
              href={'/'}
              className='w-[30px] h-[30px] relative inline-block transition-all duration-[.2s] ease-in-out'
            >
              <Image
                src='/assets/telegram.svg'
                alt='telegeram logo'
                layout='fill'
                objectFit='cover'
                className='absolute inset-0 text-transparent'
              />
            </Link>
            <Link
              href={'/'}
              className='w-[30px] h-[30px] relative inline-block transition-all duration-[.2s] ease-in-out'
            >
              <Image
                src='/assets/fb.svg'
                alt='facebook logo'
                layout='fill'
                objectFit='cover'
                className='absolute inset-0 text-transparent'
              />
            </Link>
            <Link
              href={'/'}
              className='w-[30px] h-[30px] relative inline-block transition-all duration-[.2s] ease-in-out'
            >
              <Image
                src='/assets/ig.svg'
                alt='Instagram logo'
                layout='fill'
                objectFit='cover'
                className='absolute inset-0 text-transparent'
              />
            </Link>
            <Link
              href={'/'}
              className='w-[30px] h-[30px] relative inline-block transition-all duration-[.2s] ease-in-out'
            >
              <Image
                src='/assets/twitter.svg'
                alt='Twitter logo'
                layout='fill'
                objectFit='cover'
                className='absolute inset-0 text-transparent'
              />
            </Link>
          </div>
        </div>

        {/* casino time */}
        <div
          className='relative flex justify-center min-h-[43px] -mx-[20px] px-[20px] py-[12px] 
          text-[#90a2bd] font-medium text-[13px] leading-[140%] whitespace-nowrap capitalize bg-[#1a3157]'
        >
          <p>Casino Time: {currentTime || 'Loading time...'}</p>
        </div>
      </footer>
    </section>
  )
}

export default Drawer
