import React from 'react'
import Image from 'next/image'

// components
import NavBarButtons from './NavBarButtons'
import DrawerButton from './DrawerButton'
import SearchButton from './SearchButton'
import NavbarLinks from './NavbarLinks'

const Navbar = () => {
  return (
    <nav 
      role="navigation" 
      aria-label="Main navigation"
      className='shadow-bottom-primary bg-theme-primary w-full h-[64px] px-[15px] py-[10px] 
      md:pb-[15px] 
      lg:px-[22px] lg:py-[8px] 
      xl:px-[30px] 
      2xl:px-[104px] 2xl:py-[14px] flex items-center justify-between relative border-b border-white border-opacity-5 z-10'
    >
      {/* left side - menu, nav, logo */}
      <div className='flex items-center gap-2'>
        <DrawerButton />

        <div className='relative w-[38px] h-[30px]'>
          <Image
            src='/assets/main-logo-light.svg'
            alt='Logo of the website'
            layout='fill'
            objectFit='cover'
            className='rounded-lg'
          />
        </div>

        <SearchButton />

        <NavbarLinks />
      </div>

      {/* right side - login, register button */}
      <div className='flex items-center gap-2'>
        <NavBarButtons
          text='Login'
          backgroundColor='bg-button-primary'
          linkTo='/'
          aria-label='Login button'
        />
        <NavBarButtons
          text='Registration'
          backgroundColor='bg-button-secondary'
          linkTo='/'
          aria-label='Registration button'
        />
      </div>
    </nav>
  )
}

export default Navbar
