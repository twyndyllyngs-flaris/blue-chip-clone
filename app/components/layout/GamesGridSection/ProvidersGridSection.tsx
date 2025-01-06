import React from 'react'

// interfaces
import { ProviderCardData } from '@/types/interfaces'
import Link from 'next/link'
import Image from 'next/image'

interface ProviderGridSectionProps {
  sectionName: string
  providerCards: ProviderCardData[] 
}

const ProvidersGridSection: React.FC<ProviderGridSectionProps> = ({
  sectionName,
  providerCards
}) => {
  return (
    <section className='flex flex-col flex-shrink-0 mb-[35px] md:mb-[38px] lg:mb-[48px]'>
      {/* Section and See All Container */}
      <div
        className='flex items-center justify-between w-full max-w-[1440px] mb-[20px] px-[15px]
      md:mb-[38px] md:px-[23px] lg:mb-[48px] lg:px-[30px] xl:px-[40px] 2xl:mx-[auto]'
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
            .fill(providerCards[0])
            .map((providerCard, index) => (
              <Link
                key={index}
                href={'/'}
                passHref
                aria-label={providerCard.providerName + ' card'}
                className='w-full transition-all duration-[.2s] ease-in-out active:scale-95 active:opacity-80 relative flex flex-col h-min rounded-[8px] cursor-pointer
       sm:min-w-min md:w-[112px] lg:w-[132px] xl:w-[156px] '
              >
                <div
                  role='navigation'
                  className='group hover:h- h-[122px] w-[120px] transition-all duration-[.2s] ease-in-out md:w-auto relative overflow-hidden bg-[#12294a] rounded-[8px] cursor-pointer
                '
                >
                  <div className='relative trasition-all duration-[.3s] ease-in-out h-[calc(100%-60px)] group-hover:h-full'>
                    <div
                      className='absolute flex justify-center items-center w-full top-[50%] left-[50%] max-w-[93px] h-full transform translate-x-[-50%] translate-y-[-50%] 
                        trasition-all duration-[.3s] ease-in-out'
                    >
                      <Image
                        src={'https://ap-south-1.graphassets.com/cm5go70wv029u08o0f4t7di6a/cm5jqww8q1dup07o9q1tyme9e'}
                        alt={providerCard.providerName + ' logo'}
                        layout='responsive'
                        unoptimized={true} // Disable optimization for SVG
                        width={93} // provide width for the aspect ratio calculation
                        height={30} // adjust to your image's aspect ratio (500 / 675 = 1:1.35 ratio)
                        className='object-contain text-transparent filter-none'
                      />
                    </div>
                  </div>
                  <div className='group-hover:opacity-0 absolute flex flex-col flex-wrap items-center justify-center w-full h-[54px] bottom-0 px-[5px] bg-[#f5f9ff0d] transition-all duration-[.3s] ease-in-out'>
                    <p className='text-[13px] leading-[140%] tracking-normal pb-[3px] text-white text-center'>
                      {providerCard.providerName}
                    </p>
                    <p className='text-[11px] leading-[100%] tracking-normal text-[#90a2bd]'>
                     
                      {providerCard.numberOfGames}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
        </div>
      </div>
    </section>
  )
}

export default ProvidersGridSection
