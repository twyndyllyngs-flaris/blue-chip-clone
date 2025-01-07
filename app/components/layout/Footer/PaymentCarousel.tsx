'use client'

import React from 'react'
import Image from 'next/image'

import useEmblaCarousel from 'embla-carousel-react'
import AutoScroll from 'embla-carousel-auto-scroll'

const PaymentCarousel = () => {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [AutoScroll()])

  return (
    <div
      className='embla flex flex-nowrap justify-between py-[10px] md:py-[20px] px-[15px] overflow-x-scroll leading-[0] whitespace-nowrap text-center bg-[#1a3157] cursor-grab active:cursor-grabbing'
      style={{ scrollbarWidth: 'none' }}
      ref={emblaRef}
    >
      <div className='embla__container'>
        {Array.from({ length: 20 }).map((_, index) => (
          <div
            key={index}
            className='embla__slide !opacity-100 max-w-[100px] relative flex flex-grow-0 flex-shrink-0 basis-auto mr-[15px] w-[75px] h-[47px]'
          >
            <Image
              src={'/assets/visa.svg'} // Use passed icon link
              alt={'Visa Icon'} // Use passed alt text
              unoptimized={true} // Disable optimization for SVG
              fill={true}
              className='absolute w-full h-full left-0 right-0 top-0 bottom-0 text-transparent'
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default PaymentCarousel
