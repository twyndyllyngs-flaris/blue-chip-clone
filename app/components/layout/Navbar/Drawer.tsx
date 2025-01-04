import Link from 'next/link'
import Image from 'next/image'
import React, { useEffect } from 'react'

// interfaces
interface DrawerProps {
  closeDrawer: () => void
  isDrawerOpen: boolean
}

const Drawer: React.FC<DrawerProps> = ({ closeDrawer, isDrawerOpen }) => {
  return (
    <div
      className={`fixed top-0 ${
        isDrawerOpen ? 'left-0' : '-left-[80%]'
      } z-[1000] flex flex-col w-[80%] max-w-[370px] h-full min-h-[calc(100vh - (100vh - 100%))] 
        m-0 px-[20px] pt-[20px] overflow-x-hidden overflow-y-auto bg-theme-secondary transition-[left] duration-[.2s] scroll`}
    >
      <div className='flex justify-between mb-[40px]'>
        <Link href={'/'} className='relative flex w-[110px] h-[40px] transition-transform duration-[.2s] ease-in-out'>
          <Image
            src='/assets/main-logo-light.svg'
            alt='Description of the image'
            layout='fill'
            objectFit='cover'
            className='rounded-lg'
          />
        </Link>
      </div>
      <button onClick={closeDrawer}>x</button>
    </div>
  )
}

export default Drawer
