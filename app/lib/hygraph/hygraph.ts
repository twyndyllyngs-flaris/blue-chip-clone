import { GraphQLClient } from 'graphql-request'

const HYGRAPH_API = process.env.HYGRAPH_API as string // Make sure this is set in your .env.local
const HYGRAPH_TOKEN = process.env.HYGRAPH_TOKEN as string // Optional: if you have private API access

import { Card, ProviderCardData, PromoCardData } from '@/types/interfaces'

export const hygraph = new GraphQLClient(HYGRAPH_API, {
  headers: {
    Authorization: `Bearer ${HYGRAPH_TOKEN}` // Optional: if you have private API access
  }
})

// Fetch Game Cards Data
type GameCardsResponse = {
  gamesCards: Card[]
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

// Fetch Providers Data
type PromoCardsResponse = {
  gamePromoCards: PromoCardData[]
}

async function fetchPromos (): Promise<PromoCardsResponse> {
  const query = `
    {
  gamePromoCards {
    id
    promoTitle
    badgeText
    buttonText
    promoDescription
    poster {
      url
    }
  }
}
  `
  return hygraph.request<PromoCardsResponse>(query)
}

export { fetchGameCards, fetchProviders, fetchPromos }
