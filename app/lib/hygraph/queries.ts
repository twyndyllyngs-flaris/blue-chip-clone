import { gql } from 'graphql-request';

export const GET_GAMES_AND_PROVIDERS = gql`
  query GetGamesAndProviders {
    games {
      id
      name
      description
        releaseDate
        provider {
            id
            name
            logo {
            url
            }
        }
        }
    }
    `;
