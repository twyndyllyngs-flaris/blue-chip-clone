export interface GameCardData {
    id: string
    isDiscounted: boolean
    isHot: boolean
    hasDemo: boolean
    title: string
    gamePoster: {
      url: string
    }
    providerName: {
      providerName: string
    }
}

export interface ProviderCardData {
  id: string
  providerName: string;
  numberOfGames: number;
  providerLogo: {
    url: string
  }
}
  