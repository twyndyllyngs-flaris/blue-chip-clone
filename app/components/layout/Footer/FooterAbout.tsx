import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

// values
const licenses = [
  {
    url: '/assets/licenses/begamble.svg'
  },
  {
    url: '/assets/licenses/gambleResponsibly.svg'
  },
  {
    url: '/assets/licenses/gamtalk.svg'
  },
  {
    url: '/assets/licenses/guru.svg'
  },
  {
    url: '/assets/licenses/tfg.svg'
  },
  {
    url: '/assets/licenses/askgamblers.svg'
  }
]

const FooterAbout = () => {
  return (
    <div className='flex flex-col items-center pt-[40px] px-[46px] pb-[30] md:pt-[55px] md:px-[30px] md:pb-[30px] lg:pt-[55px] lg:px-[89px] xl:pt-[60px] xl:px-[120px] xl:pb-[40]'>
      <div className='flex flex-col flex-wrap items-center justify-center  border-b-[1] border-solid border-[#12294a]'>
        <div className='flex flex-wrap items-center justify-around gap-[10px] w-full mb-[40px] md:w-[80%] md:mb-0'>
          {licenses.map((_, index) => (
            <Link
              key={index}
              href={'/'}
              passHref
              className='relative flex justify-center w-[110px] h-[30px] md:w-[140px] md:h-[44px]'
            >
              <Image
                src={_.url} // Use passed icon link
                alt={'License Icon'} // Use passed alt text
                unoptimized={true} // Disable optimization for SVG
                fill={true}
                className='absolute h-full w-full left-0 right-0 bottom-0 top-0 text-transparent'
              />
            </Link>
          ))}
        </div>

        <div className='w-full max-w-[calc(100%-30px)] h-[1px] mt-[10px] mx-auto mb-[22px] bg-[#f5f9ff0d] xl:max-w-[1200px]'></div>

        <Link
          href={'/'}
          passHref
          className='relative mb-[20px] w-[57px] h-[57px]'
        >
          <Image
            src={'/assets/gcb.svg'} // Use passed icon link
            alt={'GCB Icon'} // Use passed alt text
            unoptimized={true} // Disable optimization for SVG
            fill={true}
            className='absolute h-full w-full left-0 right-0 bottom-0 top-0 text-transparent'
          />
        </Link>

        <div className='w-full md:w-[90%] 2xl:w-[70%]'>
          <p className='text-center leading-[140%] text-[12px] font-normal text-[#90a2bd]'>
            Bluechip.io is owned and operated by XZ Solutions B.V., incorporated
            under the laws of Curaçao with company registration number 159328
            and having its registered address at Dr. M. J. Hugenholtzweg 25,
            Unit 11, Curaçao. XZ Solutions B.V. is licensed by the Curaçao
            Gaming Control Board to offer games of chance under license number
            OGL/2024/609/0253 in accordance with the National Ordinance on
            Offshore Games of Hazard (Landsverordening buitengaatse
            hazardspelen, P.B. 1993, no. 63) (NOOGH). XZ Solutions Limited
            incorporated under the laws of the Republic of Cyprus with
            registration number HE 429164 and having its registered address at
            John Kennedy, 8, Iris Building, Limassol, the Republic of Cyprus,
            provides payment management services to XZ Solutions B.V.
          </p>
          <p className='relative w-full mt-[15px] mx-0 mb-[30px] py-0 px-[25px] text-center leading-[140%] text-[12px] font-normal text-[#90a2bd] md:mt-[10px] md:mx-0 md:mb-[30px]'>
            Gambling can be addictive. Play responsibly. Bluechip.io accepts
            only customers over 18 years of age.
          </p>
        </div>
      </div>

      <div className='w-full max-w-[calc(100%-30px)] h-[1px] mx-auto mb-[22px] bg-[#f5f9ff0d] xl:max-w-[1600px]'></div>

      <p className='max-w-[150px] whitespace-pre-line text-center text-[#90a2bd] font-normal text-[12px] leading-[140%] lg:max-w-none'>
        Copyright &copy; 2024 Bluechip. All rights reserved.
      </p>
    </div>
  )
}

export default FooterAbout
