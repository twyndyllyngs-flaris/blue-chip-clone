import React from 'react'

// interfaces
import { GameCardData } from '@/types/interfaces'
import Link from 'next/link'
import Image from 'next/image'

interface GamesGridSectionProps {
  sectionName: string
  gameCards: GameCardData[] // GameCardData array type for the gameCards prop
}

const GamesGridSection: React.FC<GamesGridSectionProps> = ({
  sectionName,
  gameCards
}) => {
  return (
    <section className='flex flex-col flex-shrink-0 mb-[70px] xl:mb-[100px] 2xl:mb-[180px]'>
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
          className='grid grid-cols-[repeat(auto-fill,minmax(120px,1fr))] grid-flow-col gap-[12px] grid-rows-[1fr] w-max pr-[15px] 
        md:grid-flow-row md:grid-cols-[repeat(8,112px)]
        lg:grid-cols-[repeat(8,142px)] lg:pr-[30px] xl:gap-[16px] xl:pr-[40px] xl:grid-cols-[repeat(8,_156px)]'
        >
          {Array(16)
            .fill(gameCards[0])
            .map((gameCard, index) => (
              <Link
                key={index}
                role='card'
                href={'/'}
                passHref
                aria-label={gameCard.title + ' card'}
                className='w-full transition-all duration-[.2s] ease-in-out active:scale-95 active:opacity-80 relative flex flex-col h-min rounded-[8px] cursor-pointer aspect-[1/1.35]
      max-md:min-h-[160px] md:min-w-min lg:w-[112px] xl:w-[132px] 2xl:w-[156px] '
              >
                <Image
                  src={gameCard.gamePoster.url}
                  alt={gameCard.title + ' image'}
                  layout='responsive'
                  width={128} // provide width for the aspect ratio calculation
                  height={256} // adjust to your image's aspect ratio (500 / 675 = 1:1.35 ratio)
                  className='object-cover rounded-[8px] text-transparent'
                />

                <p
                  className='absolute right-0 bottom-0 left-0 flex items-center justify-center pb-2 text-white opacity-80 transiton-all duration-[.3s] ease-in-out
                text-[8px] font-medium uppercase leading-[100%] tracking-[.14em]'
                >
                  {gameCard.providerName.providerName}
                </p>

                <div className='absolute top-[7%] left-[-2px] z-[1] transition-all duration-[.3s] ease-in-out 2xl:left-[-3px]'>
                  <div className='w-[36px] h-[21px] relative'>
                    <Image
                      src='https://ap-south-1.graphassets.com/cm5go70wv029u08o0f4t7di6a/cm5jq0xgp1d5k07pmm5bcansm'
                      alt='Hot Tag'
                      layout='responsive'
                      width={500} // Use the actual dimensions for the image
                      height={500} // Use the actual dimensions for the image
                      unoptimized={true} // Disable optimization for SVG
                      className='object-cover absolute inset-0 text-transparent'
                    />
                  </div>
                </div>

                <div className='absolute top-[7%] right-[-2px] z-[1] transition-all duration-[.3s] ease-in-out 2xl:right-[-3px]'>
                  <div className='w-[36px] h-[21px] relative'>
                    <Image
                      src='https://ap-south-1.graphassets.com/cm5go70wv029u08o0f4t7di6a/cm5jq1k6q1d3q07o9su57zxyj'
                      alt='Hot Tag'
                      layout='responsive'
                      width={500} // Use the actual dimensions for the image
                      height={500} // Use the actual dimensions for the image
                      unoptimized={true} // Disable optimization for SVG
                      className='object-cover absolute inset-0 text-transparent'
                    />
                  </div>
                </div>

                {/* hover component */}
                <div
                  role='button'
                  aria-label={gameCard.title + ' on hover play button'}
                  className='opacity-0 hover:opacity-100 rounded-[8px] w-full h-full absolute flex flex-col items-center justify-end box-border p-[24px] bg-[#111315cc]
                  transition-all duration-[.35s] ease-in-out'
                >
                  <div className='relative flex items-center justify-center w-[70px] h-[70px] my-auto mx-0 bg-[#ff0960] rounded-full cursor-pointer transition-all duration-[.3s] ease-in-out'>
                    <span className='text-[200%] relative left-[5%]'>►</span>
                    <div className='animate-ping absolute flex items-center justify-center w-[70px] h-[70px] my-auto mx-0 bg-[#ff0960] rounded-full cursor-pointer transition-all duration-[.3s] ease-in-out'></div>
                  </div>

                  <button className='flex items-center justify-center px-[18px] py-[8px] font-medium text-[13px] uppercase bg-[#90a2bd99] hover:bg-[#aab8ffaf] active:scale-95 active:opacity-80  rounded-[10px] cursor-pointer transition-all duration-[.3s] ease-in-out'>
                    Demo
                  </button>
                </div>
              </Link>
            ))}
        </div>
      </div>
    </section>
  )
}

export default GamesGridSection
