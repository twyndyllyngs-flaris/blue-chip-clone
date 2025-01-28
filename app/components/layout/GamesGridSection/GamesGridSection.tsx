import React from 'react'

import Link from 'next/link'
import Image from 'next/image'

//interfaces
import { Card } from '@/types/interfaces'

interface GamesGridSectionProps {
  sectionName: string
  Cards: Card[] 
  isLastChild: boolean
  hasBackground: boolean
  numberOfCards: number
}

const GamesGridSection: React.FC<GamesGridSectionProps> = ({
  sectionName,
  Cards,
  isLastChild,
  hasBackground,
  numberOfCards
}) => {

  // Randomly shuffle and select number of items
  Cards = [...Cards].sort(() => Math.random() - 0.5).slice(0, numberOfCards);

  return (
    <section
      className={`${
        hasBackground &&
        "bg-[url('/assets/bg-red.svg')] bg-cover bg-opacity-80 py-[48px]"
      } flex flex-col flex-shrink-0 ${
        isLastChild
          ? 'mb-[70px] xl:mb-[100px] 2xl:mb-[180px]'
          : 'mb-[35px] md:mb-[38px] lg:mb-[48px]'
      }`}
    >
      {/* Section and See All Container */}
      <div
        className='flex items-center justify-between w-full max-w-[1440px] mb-[20px] px-[15px]
      md:mb-[25px] md:px-[23px] lg:mb-[30px] lg:px-[30px] xl:px-[40px] 2xl:mx-[auto] 2xl:mb-[40px]'
      >
        {/* Section Name */}
        <div className='flex gap-[7px] items-center'>
          <h2 className='text-[14px] uppercase font-medium leading-normal lg:text-[21px] lg:tracking-normal lg:capitalize xl:text-[24px] 2xl:text-[32px]'>
            {sectionName}
          </h2>
        </div>

        {/* See All Button */}
        <Link
          role='button'
          href={'/'}
          passHref
          aria-label={'See all ' + sectionName + ' button'}
          className='flex items-center transition-all duration-[.2s] ease-in-out  active:scale-95 active:opacity-80'
        >
          <p className='text-[15px] leading-[140%] uppercase mr-[12px] ml-auto cursor-pointer hidden sm:inline'>
            See All
          </p>

          <span className='relative bottom-[1px] font-bold text-[18px]'>
            {' '}
            𓃑{' '}
          </span>
        </Link>
      </div>

      {/* cards */}
      <div
        className='w-full max-w-[1440px] px-[15px] overflow-auto scrollbar-hide md:px-[23px] lg:px-[30px] xl:px-[40px] 2xl:overflow-visible 2xl:mx-auto'
        style={{ scrollbarWidth: 'none' }}
      >
        <div
          className={`${
            hasBackground && 'drop-shadow-[0_16px_20px_rgba(83,10,12,0.58)]'
          } grid grid-cols-[repeat(auto-fill,minmax(120px,1fr))] grid-flow-col gap-[12px] grid-rows-[1fr] w-max pr-[15px] 
        md:grid-flow-row md:grid-cols-[repeat(8,112px)]
        lg:grid-cols-[repeat(8,142px)] lg:pr-[30px] xl:gap-[16px] xl:pr-[40px] xl:grid-cols-[repeat(8,_156px)]`}
        >
          {Cards.map((card, index) => (
            <Link
              key={index}
              role='card'
              href={'/'}
              passHref
              aria-label={card.provider + 's game card'}
              className={` w-full transition-all duration-[.2s] ease-in-out active:scale-95 active:opacity-80 relative flex flex-col h-min rounded-[8px] cursor-pointer aspect-[1/1.35]
      max-md:min-h-[160px] md:min-w-min lg:w-[112px] xl:w-[132px] 2xl:w-[156px] `}
            >
              <Image
                src={card.imgUrl}
                alt={card.provider + ' image'}
                layout='responsive'
                width={128} // provide width for the aspect ratio calculation
                height={256} // adjust to your image's aspect ratio (500 / 675 = 1:1.35 ratio)
                className='object-cover rounded-[8px] text-transparent'
              />

              <p
                className='absolute right-0 bottom-0 left-0 flex items-center justify-center pb-2 text-white opacity-80 transiton-all duration-[.3s] ease-in-out
                text-[8px] font-medium uppercase leading-[100%] tracking-[.14em]'
              >
                {card.provider}
              </p>

              {/* hot tag or new tag */}
              {(card.isHot || card.isNew) && (
                <div className='absolute top-[7%] left-[-2px] z-[1] transition-all duration-[.3s] ease-in-out 2xl:left-[-3px]'>
                  <div className='w-[36px] h-[21px] relative'>
                    <Image
                      src={`/assets/${
                        card.isHot ? 'hot-tag.svg' : 'new-tag.svg'
                      }`}
                      alt='Hot Tag'
                      layout='responsive'
                      width={500}
                      height={500}
                      unoptimized={true}
                      className='object-cover absolute inset-0 text-transparent'
                    />
                  </div>
                </div>
              )}

              {/* hot tag or new tag */}
              {card.isLive && (
                <div className='tracking-normal rounded-[3px] bg-[#ff0960] leading-[130%] text-[10px] text-white py-[1px] pr-[3px] pl-[11px] left-[5px] top-[5px] absolute
                before:absolute before:top-[calc(50%-3px)] before:left-[3px] before:w-[4px] before:h-[4px] before:bg-white before:rounded-[50%] before:content-[""] 
                before:animate-pulse'>
                  {/* <div className='absolute bg-white rounded-full w-[3px] h-[3px]'>

                  </div> */}
                  <span className=''>
                    LIVE
                  </span>
                </div>
              )}

              {card.isDiscounted && (
                <div className='absolute top-[7%] right-[-2px] z-[1] transition-all duration-[.3s] ease-in-out 2xl:right-[-3px]'>
                  <div className='w-[36px] h-[21px] relative'>
                    <Image
                      src='/assets/discounted-tag.svg'
                      alt='Discount Tag'
                      layout='responsive'
                      width={500}
                      height={500}
                      unoptimized={true}
                      className='object-cover absolute inset-0 text-transparent'
                    />
                  </div>
                </div>
              )}

              {/* hover component */}
              <div
                role='button'
                aria-label={card.provider + ' on hover play button'}
                className='opacity-0 hover:opacity-100 rounded-[8px] w-full h-full absolute flex flex-col items-center justify-end box-border p-[24px] bg-[#111315cc]
                  transition-all duration-[.35s] ease-in-out'
              >
                <div className='relative flex items-center justify-center w-[50px] h-[50px] xl:w-[70px] xl:h-[70px] my-auto mx-0 bg-[#ff0960] rounded-full cursor-pointer transition-all duration-[.3s] ease-in-out'>
                  <span className='text-[150%] xl:text-[200%] relative left-[5%]'>
                    ►
                  </span>
                  <div className='animate-ping absolute flex items-center justify-center w-[50px] h-[50px] xl:w-[70px] xl:h-[70px] my-auto mx-0 bg-[#ff0960] rounded-full cursor-pointer transition-all duration-[.3s] ease-in-out'></div>
                </div>

                {card.hasDemo && (
                  <button
                    className='flex items-center justify-center font-medium uppercase bg-[#90a2bd99]
                 hover:bg-[#aab8ffaf] active:scale-95 active:opacity-80  rounded-[10px] cursor-pointer transition-all duration-[.3s] ease-in-
                 px-[10px] py-[4px] text-[10px] xl:px-[18px] xl:py-[8px] xl:text-[13px]'
                  >
                    Demo
                  </button>
                )}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export default GamesGridSection
