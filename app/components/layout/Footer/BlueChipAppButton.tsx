import React from 'react'
import Image from 'next/image'

interface BlueChipAppButtonProps {
  for: string
  iconLink: string
  alt: string
}

const BlueChipAppButton: React.FC<BlueChipAppButtonProps> = ({
  for: platform,
  iconLink,
  alt
}) => {
  return (
    <div
      role='button'
      tabIndex={0} // Makes it focusable for keyboard navigation
      aria-label={`Download the Bluechip App for ${platform}`} // Descriptive for screen readers
      className='mb-5 flex flex-wrap items-center justify-center p-[6px] transition-all duration-[.2s] ease-linear
        w-full bg-[#1a3157] rounded-[8px] cursor-pointer 3xsm:px-[14px] 2xsm:px-[23px]'
    >
      <Image
        src={iconLink} // Use passed icon link
        alt={alt} // Use passed alt text
        unoptimized={true} // Disable optimization for SVG
        width={42} // Set width for aspect ratio calculation
        height={42} // Adjust height accordingly
        className='text-transparent'
      />
      <div className='block ml-2'>
        {/* Added margin-left for better spacing */}
        <p className='leading-[140%] tracking-normal font-medium text-[15px]'>
          Bluechip App
        </p>
        <p className='text-[12px] leading-[140%] text-[#90a2bd] font-normal'>{`for ${platform}`}</p>
      </div>
    </div>
  )
}

export default BlueChipAppButton
