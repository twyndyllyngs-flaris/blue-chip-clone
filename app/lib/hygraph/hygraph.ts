import { GraphQLClient } from 'graphql-request'

const HYGRAPH_API = process.env.HYGRAPH_API as string // Make sure this is set in your .env.local
const HYGRAPH_TOKEN = process.env.HYGRAPH_TOKEN as string // Optional: if you have private API access

import { GameCardData, ProviderCardData } from '@/types/interfaces'

export const hygraph = new GraphQLClient(HYGRAPH_API, {
  headers: {
    Authorization: `Bearer ${HYGRAPH_TOKEN}` // Optional: if you have private API access
  }
})

// Fetch Game Cards Data
type GameCardsResponse = {
  gamesCards: GameCardData[]
}

async function fetchGameCards (): Promise<GameCardsResponse> {
  const query = `
    {
      gamesCards {
        id
        isDiscounted
        isHot
        hasDemo
        title
        gamePoster {
          url
        }
        providerName {
          ... on Provider {
            providerName
          }
        }
      }
    }
  `
  return hygraph.request<GameCardsResponse>(query)
}

// Fetch Providers Data
type ProviderCardsResponse = {
  providers: ProviderCardData[]
}

async function fetchProviders (): Promise<ProviderCardsResponse> {
  const query = `
    {
      providers {
        id
        providerName
        numberOfGames
        providerLogo {
          url
        }
      }
    }
  `
  return hygraph.request<ProviderCardsResponse>(query)
}

export { fetchGameCards, fetchProviders }
