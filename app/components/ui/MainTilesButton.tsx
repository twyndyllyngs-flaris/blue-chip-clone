import Link from 'next/link'
import Image from 'next/image'
import React from 'react'

interface MainTilesButtonProps {
  isButton: boolean
  iconLink: string
  altText: string
  text: string
  linkTo: string
  visibilityCSS: string
}

const MainTilesButton: React.FC<MainTilesButtonProps> = ({
  isButton,
  iconLink,
  altText,
  text,
  linkTo,
  visibilityCSS
}) => {
  return (
    <Link
      role='button'
      href={linkTo}
      passHref
      className={`flex max-3xsm:flex-col max-3xsm:py-[5px] max-3xsm:px-[10px] flex-grow flex-shrink items-center justify-center h-[50px] lg:h-auto lg:py-[13px] lg:px-[20px] xl:py-[16px] my-0 mx-[5px] whitespace-nowrap 
      ${isButton ? 'bg-button-primary' : 'bg-transparent'} ${visibilityCSS} border border-solid border-[#ffffff1a] rounded-[10px] gap-[7px] lg:gap-[13px]  
      cursor-pointer transition-all duration-150 ease-in-out active:scale-95 active:opacity-80`} 
    >
      <span className='w-[23px] h[23px] leading-[1]'>
        <Image
          src={iconLink} // Update with the correct path to your image
          alt={altText} // Provide an appropriate alt text
          width={23} // Set the width of the image (in pixels or use other units like 'rem')
          height={23} // Set the height of the image (in pixels or use other units like 'rem')
          className='object-contain' // Ensures the image maintains aspect ratio
        />
        {/* <svg
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
              d='M15.4695 11.2929C15.0789 10.9024 14.4458 10.9024 14.0553 11.2929C13.6647 11.6834 13.6647 12.3166 14.0553 12.7071C14.4458 13.0976 15.0789 13.0976 15.4695 12.7071C15.86 12.3166 15.86 11.6834 15.4695 11.2929Z'
              fill='#ffffff'
            ></path>
            <path
              d='M16.1766 9.17156C16.5671 8.78103 17.2003 8.78103 17.5908 9.17156C17.9813 9.56208 17.9813 10.1952 17.5908 10.5858C17.2003 10.9763 16.5671 10.9763 16.1766 10.5858C15.7861 10.1952 15.7861 9.56208 16.1766 9.17156Z'
              fill='#ffffff'
            ></path>
            <path
              d='M19.7121 11.2929C19.3216 10.9024 18.6885 10.9024 18.2979 11.2929C17.9074 11.6834 17.9074 12.3166 18.2979 12.7071C18.6885 13.0976 19.3216 13.0976 19.7121 12.7071C20.1027 12.3166 20.1027 11.6834 19.7121 11.2929Z'
              fill='#ffffff'
            ></path>
            <path
              d='M16.1766 13.4142C16.5671 13.0237 17.2003 13.0237 17.5908 13.4142C17.9813 13.8048 17.9813 14.4379 17.5908 14.8284C17.2003 15.219 16.5671 15.219 16.1766 14.8284C15.7861 14.4379 15.7861 13.8048 16.1766 13.4142Z'
              fill='#ffffff'
            ></path>
            <path
              d='M6 13H4V11H6V9H8V11H10V13H8V15H6V13Z'
              fill='#ffffff'
            ></path>
            <path
              fillRule='evenodd'
              clipRule='evenodd'
              d='M7 5C3.13401 5 0 8.13401 0 12C0 15.866 3.13401 19 7 19H17C20.866 19 24 15.866 24 12C24 8.13401 20.866 5 17 5H7ZM17 7H7C4.23858 7 2 9.23858 2 12C2 14.7614 4.23858 17 7 17H17C19.7614 17 22 14.7614 22 12C22 9.23858 19.7614 7 17 7Z'
              fill='#ffffff'
            ></path>
          </g>
        </svg> */}
      </span>
      <p className='leading-[100%] text-[14px] md:text-[15px] md:leading-[140%] lg:text-[16px]'>
        {text}
      </p>
    </Link>
  )
}

export default MainTilesButton
