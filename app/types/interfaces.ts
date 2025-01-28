export interface Card {
  imgUrl: string
  provider: string
  isHot: boolean
  isNew: boolean
  isDiscounted: boolean
  isLive: boolean
  hasDemo: boolean
}

export interface Provider {
  imgUrl: string
  name: string
  numberOfGames: number
}

export interface ProviderCardData {
  id: string
  providerName: string
  numberOfGames: number
  providerLogo: {
    url: string
  }
}

export interface PromoCard {
  imgUrl: string
  bgUrl: string
  promoTitle: string
  badgeText: string
  buttonText: string
  promoDescription: string
}
