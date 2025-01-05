import React from 'react'
import { fetchGameCards } from './lib/hygraph/hygraph' // Adjust the path based on your file structure

// components
import MainTilesButtonGroup from './components/layout/MainTilesButtonGroup/MainTilesButtonGroup'
import GamesGridSection from './components/layout/GamesGridSection/GamesGridSection'

// interface
import { GameCardData } from './types/interfaces'

// Fetch data inside the server component
export const revalidate = 86400 // revalidate after a day (86400 seconds)

export default async function Home () {
  const { gamesCards } = await fetchGameCards()

  const gameCards: GameCardData[] = gamesCards || []

  return (
    <div className='bg-theme-primary w-full'>
      {/* section for carousel */}
      <section className='pt-[50px] '></section>

      <MainTilesButtonGroup />

      <GamesGridSection sectionName='All Games' gameCards={gameCards} />
    </div>
  )
}
