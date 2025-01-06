import React from 'react'

// export const revalidate = 86400

async function fetchBTCPrice (): Promise<string | null> {
  try {
    const response = await fetch(
      'https://api.coindesk.com/v1/bpi/currentprice/USD.json',
      {
        next: { revalidate: 86400 } // Revalidate once a day
      }
    )
    const data = await response.json()
    return data.bpi.USD.rate // Return the BTC price in USD
  } catch (error) {
    console.error('Error fetching BTC price:', error)
    return null
  }
}

const BTCButton = async () => {
  const btcPrice = await fetchBTCPrice()

  return (
    <div className='flex justify-center w-[200px] min-w-[187px] mb-[40px] p-[10px] whitespace-nowrap bg-[#1a3157] rounded-[10px]'>
      <p>{btcPrice ? `1 BTC = ${btcPrice} USD` : 'Unable to fetch price'}</p>
    </div>
  )
}

export default BTCButton
