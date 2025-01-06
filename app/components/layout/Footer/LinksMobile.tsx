import React from 'react'

//components
import BTCButton from './BTCButton'
import Accordion from './Accordion'
import Link from 'next/link'
import Image from 'next/image'

const LinksMobile = () => {
  return (
    <div className='w-full flex flex-col items-center pt-[40px] px-[15px] pb-0 bg-[#12294a]'>
      <BTCButton />
      <Accordion />

      <div className='mb-[30px] mt-[25px] flex flex-col items-center w-full max-md:text-center'>
          <p className='mb-[18px] font-medium text-[15px] leading-[140%] whitespace-nowrap'>
            Follow Us
          </p>

          <div className='p-0 px-[15px] flex items-center justify-between w-full max-w-[300px]'>
            <Link
              href={'/'}
              className='w-[35px] h-[35px] relative inline-block ease-in-out hover:scale-[110%] transform transition-all duration-150 active:scale-95 active:opacity-80'
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
              className='w-[35px] h-[35px] relative inline-block ease-in-out hover:scale-[110%] transform transition-all duration-150 active:scale-95 active:opacity-80'
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
              className='w-[35px] h-[35px] relative inline-block ease-in-out hover:scale-[110%] transform transition-all duration-150 active:scale-95 active:opacity-80'
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
              className='w-[35px] h-[35px] relative inline-block ease-in-out hover:scale-[110%] transform transition-all duration-150 active:scale-95 active:opacity-80'
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
    </div>
  )
}

export default LinksMobile
