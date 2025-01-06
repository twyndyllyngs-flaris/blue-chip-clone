import React from 'react'

//components
import BTCButton from './BTCButton'
import Accordion from './Accordion'
import Link from 'next/link'
import Image from 'next/image'
import BlueChipAppButton from './BlueChipAppButton'

const LinksMobile = () => {
  return (
    <div className='w-full flex flex-col items-center pt-[40px] px-[15px] pb-0 bg-[#12294a]'>
      <BTCButton />
      <Accordion />

      {/* socials */}
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

      {/* help center */}
      <div className='flex items-center justify-between w-full mb-[16px] py-[18px] px-[24px] bg-[#1a3157] rounded-[10px]'>
        <div>
          <p className='font-medium text-[15px] leading-[140%] tracking-normal'>
            Help Center
          </p>
          <p className='text-[#90a2bd] font-normal text-[13px] leading-[140%] tracking-normal'>
            If you have any questions?
          </p>
        </div>

        <button className='bg-[#3555ff] h-[34px] py-[10px] px-[12px] flex items-center justify-center rounded-[10px]'>
          <p className='text-[13px] leading-[110%] uppercase'>Get Answers</p>
        </button>
      </div>

      <div className='flex justify-between w-full gap-[8px] 3xsm:gap-[15px]'>
        <BlueChipAppButton
          for='Android' // Passing the platform name
          iconLink='/assets/android.svg' // Passing the icon link (could be a local path or URL)
          alt='Android Icon' // Passing alt text for accessibility
        />
        <BlueChipAppButton
          for='iOS' // Another example for iOS
          iconLink='/assets/apple.svg'
          alt='iOS Icon'
        />
      </div>
    </div>
  )
}

export default LinksMobile
