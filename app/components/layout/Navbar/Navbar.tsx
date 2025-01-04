import React from 'react'
import Image from 'next/image'

// components
import NavBarButtons from './NavBarButtons'
import DrawerButton from './DrawerButton'
import SearchButton from './SearchButton'
import NavbarLinks from './NavbarLinks'
import SearchDrawer from './SearchDrawer'

const Navbar = () => {
  return (
    <nav className='shadow-bottom-primary bg-theme-primary w-full h-[60px] px-[15px] py-[10px] md:pb-[15px] lg:px-[22px] lg:py-[8px] xl:px-[30px]
     2xl:px-[40px] flex items-center justify-between z-[99999] relative border-b border-white border-opacity-5'>
      {/* left side - menu, nav, logo */}
      <div className='flex items-center gap-2'>
        <DrawerButton />

        <div className='relative w-[38px] h-[30px]'>
          <Image
            src='/assets/main-logo-light.svg'
            alt='Description of the image'
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
        />
        <NavBarButtons
          text='Registration'
          backgroundColor='bg-button-secondary'
          linkTo='/'
        />
      </div>

     
    </nav>
  )
}

export default Navbar
