import React from 'react'

// components
import MainTilesButtonGroup from './components/layout/MainTilesButtonGroup/MainTilesButtonGroup'
import GamesGridSection from './components/layout/GamesGridSection/GamesGridSection'
import ProvidersGridSection from './components/layout/GamesGridSection/ProvidersGridSection'
import MainPageCarousel from './components/layout/Carousel/MainPageCarousel'

// values/data
import { Games } from './constants/Games'
import { Sports } from './constants/Sports'
import { Providers } from './constants/Providers'
import { Promos } from './constants/Promos'
const CardsData = [
  {
    sectionName: 'Exclusive Games',
    cards: Games,
    isLastChild: false,
    hasBackground: false,
    numberOfCards: 16
  },
  {
    sectionName: 'Top Games',
    cards: Games,
    isLastChild: false,
    hasBackground: false,
    numberOfCards: 16
  },
  {
    sectionName: 'Popular',
    cards: Games,
    isLastChild: false,
    hasBackground: false,
    numberOfCards: 16
  },
  {
    sectionName: 'Live Casino',
    cards: Games,
    isLastChild: false,
    hasBackground: false,
    numberOfCards: 16
  },
  {
    sectionName: 'New Games',
    cards: Games,
    isLastChild: false,
    hasBackground: false,
    numberOfCards: 16
  },
  {
    sectionName: 'Recommended Games',
    cards: Games,
    isLastChild: false,
    hasBackground: false,
    numberOfCards: 16
  },
  {
    sectionName: 'Crash Games',
    cards: Games,
    isLastChild: false,
    hasBackground: false,
    numberOfCards: 16
  },
  {
    sectionName: 'Discount',
    cards: Games,
    isLastChild: false,
    hasBackground: true,
    numberOfCards: 16
  },
  {
    sectionName: 'Instant Games',
    cards: Games,
    isLastChild: false,
    hasBackground: false,
    numberOfCards: 16
  },
  {
    sectionName: 'Jackpot Games',
    cards: Games,
    isLastChild: false,
    hasBackground: false,
    numberOfCards: 16
  },
  {
    sectionName: 'Buy Bonus',
    cards: Games,
    isLastChild: false,
    hasBackground: false,
    numberOfCards: 16
  },
  {
    sectionName: 'Megaways',
    cards: Games,
    isLastChild: false,
    hasBackground: false,
    numberOfCards: 16
  },
  {
    sectionName: 'Table Games',
    cards: Games,
    isLastChild: false,
    hasBackground: false,
    numberOfCards: 16
  },
  {
    sectionName: 'TV Games',
    cards: Games,
    isLastChild: false,
    hasBackground: false,
    numberOfCards: 16
  },
  {
    sectionName: 'Sports Bets',
    cards: Sports,
    isLastChild: false,
    hasBackground: false,
    numberOfCards: 8
  },
  {
    sectionName: 'All Games',
    cards: Games,
    isLastChild: true,
    hasBackground: false,
    numberOfCards: 16
  }
]

export default async function Home () {
  return (
    <div className='bg-theme-primary w-full'>
      <MainPageCarousel PromoCard={Promos} />

      <MainTilesButtonGroup />

      {CardsData.slice(0, 4).map((cardData, index) => (
        <GamesGridSection
          key={index}
          sectionName={cardData.sectionName}
          Cards={cardData.cards}
          isLastChild={cardData.isLastChild}
          hasBackground={cardData.hasBackground}
          numberOfCards={cardData.numberOfCards}
        />
      ))}

      <ProvidersGridSection
        sectionName='All Providers'
        providerCards={Providers}
      />

      {CardsData.slice(4).map((cardData, index) => (
        <GamesGridSection
          key={index}
          sectionName={cardData.sectionName}
          Cards={cardData.cards}
          isLastChild={cardData.isLastChild}
          hasBackground={cardData.hasBackground}
          numberOfCards={cardData.numberOfCards}
        />
      ))}
    </div>
  )
}
