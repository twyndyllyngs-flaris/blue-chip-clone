import React from 'react'

//components
import MainTilesButton from './MainTilesButton'

const buttonData = [
  {
    isButton: false,
    iconLink: '/assets/slots.webp',
    altText: 'Slots icon',
    text: 'Slots',
    linkTo: '/',
    visibilityCSS: 'hidden md:flex',
    ariaLabel: 'Slots game button'
  },
  {
    isButton: false,
    iconLink: '/assets/black-jack.webp',
    altText: 'Blackjack icon',
    text: 'Blackjack',
    linkTo: '/',
    visibilityCSS: 'hidden md:flex',
    ariaLabel: 'Blackjack game button'
  },
  {
    isButton: false,
    iconLink: '/assets/buy-bonus.webp',
    altText: 'Buy Bonus icon',
    text: 'Buy Bonus',
    linkTo: '/',
    visibilityCSS: 'hidden md:flex',
    ariaLabel: 'Buy bonus button'
  },
  {
    isButton: false,
    iconLink: '/assets/jackpot.webp',
    altText: 'Jackpot icon',
    text: 'Jackpot',
    linkTo: '/',
    visibilityCSS: 'hidden lg:flex',
    ariaLabel: 'Jackpot game button'
  },
  {
    isButton: false,
    iconLink: '/assets/table-games.webp',
    altText: 'Table games icon',
    text: 'Table Games',
    linkTo: '/',
    visibilityCSS: 'hidden xl:flex',
    ariaLabel: 'Table games button'
  },
  {
    isButton: true,
    iconLink: '/assets/search.png',
    altText: 'Providers Icon',
    text: 'Search',
    linkTo: '/',
    visibilityCSS: 'md:hidden',
    ariaLabel: 'Search button'
  },
  {
    isButton: true,
    iconLink: '/assets/games.png',
    altText: 'Games Icon',
    text: 'Game',
    linkTo: '/',
    visibilityCSS: '',
    ariaLabel: 'Game button'
  },
  {
    isButton: true,
    iconLink: '/assets/providers.png',
    altText: 'Providers Icon',
    text: 'Providers',
    linkTo: '/',
    visibilityCSS: '',
    ariaLabel: 'Providers button'
  }
]

const MainTilesButtonGroup = () => {
  return (
    <section
      className='flex justify-between my-[35px] mx-[15px] md:pb-[24px] md:border-b md:border-solid md:border-[#ffffff0a] text-white
    lg:mx-[22px] xl:pb-[30px] xl:mx-[30px] xl:mt-[35px] xl:mb-[50px]
    2xl:w-[1360px] 2xl:mt-[35px] 2xl:mb-[75px] 2xl:mx-auto'
      role='region'
      aria-label='Main game tiles'
    >
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
  )
}

export default MainTilesButtonGroup
