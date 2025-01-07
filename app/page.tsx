import React from 'react'
import { fetchGameCards, fetchProviders } from './lib/hygraph/hygraph' // Adjust the path based on your file structure

// components
import MainTilesButtonGroup from './components/layout/MainTilesButtonGroup/MainTilesButtonGroup'
import GamesGridSection from './components/layout/GamesGridSection/GamesGridSection'
import ProvidersGridSection from './components/layout/GamesGridSection/ProvidersGridSection'
import MainPageCarousel from './components/layout/Carousel/MainPageCarousel'

// interface
import { GameCardData, ProviderCardData } from './types/interfaces'

// Fetch data inside the server component
export const revalidate = 86400 // revalidate after a day (86400 seconds)

export default async function Home () {
  const { gamesCards } = await fetchGameCards()
  const gameCards: GameCardData[] = gamesCards || []

  const { providers } = await fetchProviders()
  const providerCards: ProviderCardData[] = providers || []

  return (
    <div className='bg-theme-primary w-full'>

      <MainPageCarousel />

      <MainTilesButtonGroup />

      <GamesGridSection
        sectionName='All Games'
        gameCards={gameCards}
        isLastChild={false}
      />

      <ProvidersGridSection
        sectionName='All Providers'
        providerCards={providerCards}
      />

      <GamesGridSection
        sectionName='Popular Games'
        gameCards={gameCards}
        isLastChild={true}
      />
    </div>
  )
}
