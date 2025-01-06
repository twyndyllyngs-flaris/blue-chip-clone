import React from 'react'

//components
import BTCButton from './BTCButton'
import Link from 'next/link'
import Image from 'next/image'

const Links = [
  {
    id: 1,
    title: 'Games',
    gridColNum: 2,
    content: ['Slots', 'Provable Fair', 'Live Casino', 'Jackpot Games']
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
  }
]

const LinksDesktop = () => {
  return (
    <div
      className='hidden md:flex flex-wrap py-[50px] px-[15px] bg-[#12294a] lg:flex-nowrap lg:items-start lg:justify-between lg:px-[22px]
    xl:py-[70px] xl:px-[50px] 2xl:px-[40px]'
    >
      {/* help center, btc, socials */}
      <div className='w-[40%] lg:flex-grow-1 lg:w-auto'>
        <h3 className='font-medium text-[21px] leading-[150%] tracking-normal md:mb-[8px] md:text-[24px] md:leading-[130%]'>
          Help Center
        </h3>

        <p className='text-[#90a2bd] text-[15px] leading-[140%]'>
          If you have any questions?
        </p>

        <button
          className='flex justify-center items-center text-white rounded-[10px] uppercase py-[3px] px-[30px] font-semibold text-[15px]
            bg-[#3555ff] w-[200px] h-[40px] mt-[20px] mx-0 mb-[30px] active:scale-95 active:opacity-80 hover:opacity-80'
        >
          Get Answers
        </button>

        <BTCButton />

        <div className='p-0  flex items-center justify-between w-full max-w-[200px]'>
          <Link
            href={'/'}
            className='w-[30px] h-[30px] relative inline-block ease-in-out hover:scale-[110%] transform transition-all duration-150 active:scale-95 active:opacity-80'
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
            className='w-[30px] h-[30px] relative inline-block ease-in-out hover:scale-[110%] transform transition-all duration-150 active:scale-95 active:opacity-80'
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
            className='w-[30px] h-[30px] relative inline-block ease-in-out hover:scale-[110%] transform transition-all duration-150 active:scale-95 active:opacity-80'
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
            className='w-[30px] h-[30px] relative inline-block ease-in-out hover:scale-[110%] transform transition-all duration-150 active:scale-95 active:opacity-80'
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

      {/* Links */}
      <nav className='flex gap-[15px] justify-around w-[60%] lg:flex-grow-[2] lg:w-auto'>
        {Links.map((link) => (
          <div key={link.id} className=''>
            <h3 className='text-white text-[15px] leading-[140%] font-medium mb-[20px]'>
              {link.title}
            </h3>
            {link.content.map((item, index) => (
              <Link
                key={index}
                href={'/'}
                passHref
                className='hover:text-white block mb-[20px] text-[#90a2bd] text-[15px] leading-[140%] origin-left
    transition-all duration-[.2s] ease-in-out active:scale-95 active:opacity-80'
              >
                {item}
              </Link>
            ))}
          </div>
        ))}
      </nav>

      {/* blue chip app buttons group */}
      <div className='md:flex md:w-full lg:block lg:w-auto mr-[40px]'>
        <div className='flex justify-end w-[60%] mt-[20px] ml-auto mr-[20px] md:flex-grow-[2] md:w-auto md:ml-[0] md:pr-0 lg:w-auto lg:m-0 lg:p-0'>
          <div className='flex justify-between w-full  md:mb-0 lg:flex-wrap lg:w-[160px]'>
            <div
              role='button'
              className='hover:bg-[#4d668f] hidden flex-row w-full mb-[10px] py-[6px] px-[10px] bg-[#1a3157] rounded-[8px] cursor-pointer lg:flex transition-all duration-[.2s] ease-in-out active:scale-95 active:opacity-80'
            >
              <Image
                src={'/assets/apple.svg'} // Use passed icon link
                alt={'apply ios logo'} // Use passed alt text
                unoptimized={true} // Disable optimization for SVG
                width={42} // Set width for aspect ratio calculation
                height={42} // Adjust height accordingly
                className='text-transparent'
              />
              <div>
                <p className='text-[15px] leading-[140%] font-medium'>
                  {' '}
                  Bluechip App
                </p>
                <p className='leading-[140%] text-[15px] text-[#90a2bd]'>
                  {' '}
                  for Mac OS
                </p>
              </div>
            </div>

            <div className='flex justify-between gap-2 w-full'>
              <div
                role='button'
                className='hover:bg-[#4d668f] active:scale-95 active:opacity-80 flex flex-wrap items-center justify-center min-w-[75px] transition-all duration-[.2s] ease-in-out w-full py-[6px] px-[23px] bg-[#1a3157]
                rounded-[8px] cursor-pointer md:justify-center  lg:flex-col lg:justify-center lg:w-[75px ] lg:p-0 lg:bg-[#1a3157] lg:rounded-[10px]
                '
              >
                <Image
                  src={'/assets/android.svg'} // Use passed icon link
                  alt={'Android logo'} // Use passed alt text
                  unoptimized={true} // Disable optimization for SVG
                  width={42} // Set width for aspect ratio calculation
                  height={42} // Adjust height accordingly
                  className='relative w-[42px] h-[42px] md:right-[10px] lg:right-0 text-transparent'
                />
                <p className='text-[15px] text-[#90a2bd] leading-[140%] hidden md:block'>
                  Android
                </p>
              </div>

              <div
                role='button'
                className='hover:bg-[#4d668f] active:scale-95 active:opacity-80 flex flex-wrap items-center justify-center min-w-[75px] transition-all duration-[.2s] ease-in-out w-full py-[6px] px-[23px] bg-[#1a3157]
                rounded-[8px] cursor-pointer md:justify-center md:mr-[8px] lg:flex-col lg:justify-center lg:w-[75px ] lg:p-0 lg:bg-[#1a3157] lg:rounded-[10px]
                '
              >
                <Image
                  src={'/assets/apple.svg'} // Use passed icon link
                  alt={'apple ios logo'} // Use passed alt text
                  unoptimized={true} // Disable optimization for SVG
                  width={42} // Set width for aspect ratio calculation
                  height={42} // Adjust height accordingly
                  className='relative w-[42px] h-[42px] md:right-[10px] lg:right-0 text-transparent'
                />
                <p className='text-[15px] text-[#90a2bd] leading-[140%] hidden md:block'>
                  iOS
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LinksDesktop
