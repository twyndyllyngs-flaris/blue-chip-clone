import React from 'react'

// styles
// import './styles/base.css'

// components
// import EmblaCarousel from './components/layout/Carousel/EmblaCarousel'
// import { EmblaOptionsType } from 'embla-carousel'
import MainTilesButton from './components/ui/MainTilesButton'

// constants
// const OPTIONS: EmblaOptionsType = { loop: true }
// const SLIDE_COUNT = 5
// const SLIDES = Array.from(Array(SLIDE_COUNT).keys())
const buttonData = [
  {
    isButton: false,
    iconLink: '/assets/slots.webp',
    altText: 'Slots icon',
    text: 'Slots',
    linkTo: '/',
    visibilityCSS: 'hidden md:flex'
  },
  {
    isButton: false,
    iconLink: '/assets/black-jack.webp',
    altText: 'Blackjack icon',
    text: 'Blackjack',
    linkTo: '/',
    visibilityCSS: 'hidden md:flex'
  },
  {
    isButton: false,
    iconLink: '/assets/buy-bonus.webp',
    altText: 'Buy Bonus icon',
    text: 'Buy Bonus',
    linkTo: '/',
    visibilityCSS: 'hidden md:flex'
  },
  {
    isButton: false,
    iconLink: '/assets/jackpot.webp',
    altText: 'Jackpot icon',
    text: 'Jackpot',
    linkTo: '/',
    visibilityCSS: 'hidden lg:flex'
  },
  {
    isButton: false,
    iconLink: '/assets/table-games.webp',
    altText: 'Table games icon',
    text: 'Table Games',
    linkTo: '/',
    visibilityCSS: 'hidden xl:flex'
  },
  {
    isButton: true,
    iconLink: '/assets/search.png',
    altText: 'Providers Icon',
    text: 'Search',
    linkTo: '/',
    visibilityCSS: 'md:hidden'
  },
  {
    isButton: true,
    iconLink: '/assets/games.png',
    altText: 'Games Icon',
    text: 'Game',
    linkTo: '/',
    visibilityCSS: ''
  },
  {
    isButton: true,
    iconLink: '/assets/providers.png',
    altText: 'Providers Icon',
    text: 'Providers',
    linkTo: '/',
    visibilityCSS: ''
  }
]

export default function Home () {
  return (
    <div className='bg-theme-primary w-full'>
      <section className='pt-[50px] bg-red-200'>
        {/* <EmblaCarousel slides={SLIDES} options={OPTIONS} /> */}
      </section>

      {/* main tiles */}
      <section className='flex justify-between my-[35px] mx-[35px] md:pb-[24px] md:border-b md:border-solid md:border-[#ffffff0a] text-white
      lg:py-[35px] lg:px-[22px] xl:pb-[30px] xl:mx-[30px] xl:mt-[35px] xl:mb-[50px]
      2xl:w-[1360px] 2xl:mt-[35px] 2xl:mb-[auto] 2xl:mx-auto'>
        {buttonData.map((button, index) => (
          <MainTilesButton
            key={index}
            isButton={button.isButton}
            iconLink={button.iconLink}
            altText={button.altText}
            text={button.text}
            linkTo={button.linkTo}
            visibilityCSS={button.visibilityCSS}
          />
        ))}
      </section>
    </div>
  )
}
