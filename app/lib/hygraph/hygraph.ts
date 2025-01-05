import { GraphQLClient } from 'graphql-request'

const HYGRAPH_API = process.env.HYGRAPH_API as string // Add this to your .env.local

export const hygraph = new GraphQLClient(HYGRAPH_API, {
  headers: {
    Authorization: `Bearer ${process.env.HYGRAPH_TOKEN}` // Optional: if you have private API access
  }
})

type GameCard = {
  id: string
  isDiscounted: boolean
  isHot: boolean
  title: string
  gamePoster: {
    url: string
  }
}

type GameCardsResponse = {
  gamesCards: GameCard[]
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
  return hygraph.request<GameCardsResponse>(query) // Specify the return type here
}

export { fetchGameCards }
