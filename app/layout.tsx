import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'

// components
import Navbar from './components/layout/Navbar/Navbar'
import SearchDrawer from './components/layout/Navbar/SearchDrawer'
import LinksMobile from './components/layout/Footer/LinksMobile'
import FooterAbout from './components/layout/Footer/FooterAbout'
import LinksDesktop from './components/layout/Footer/LinksDesktop'
import PaymentCarousel from './components/layout/Footer/PaymentCarousel'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin']
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin']
})

export const metadata: Metadata = {
  title: 'Bluechip Casino: Play for Real Money | Welcome Bonus Up To 500%',
  description:
    'Join Bluechip Online Casino and play 3150+ Games. Welcome Pack Up To 500%, The Fastest Withdrawals, Provably Fair, 24/7 Support, Multiple currencies',
  robots: {
    index: true,
    follow: true
  },
  metadataBase: new URL('https://blue-chip-clone.vercel.app/'),
  alternates: {
    canonical: '/'
  },
  openGraph: {
    title: 'Bluechip Casino: Play for Real Money | Welcome Bonus Up To 500%',
    url: 'https://blue-chip-clone.vercel.app',
    description:
      'Join Bluechip Online Casino and play 3150+ Games. Welcome Pack Up To 500%, The Fastest Withdrawals, Provably Fair, 24/7 Support, Multiple currencies',
    type: 'website',
    images: [
      {
        url: '/assets/bluechip-casino-logo-2.png',
        width: 180,
        height: 180,
      },
    ],
  },
  twitter: {
    card: 'summary',
    title: 'Bluechip Casino: Play for Real Money | Welcome Bonus Up To 500%',
    description:
      'Join Bluechip Online Casino and play 3150+ Games. Welcome Pack Up To 500%, The Fastest Withdrawals, Provably Fair, 24/7 Support, Multiple currencies',
    images: ['/assets/bluechip-casino-logo-2.png']
  }
}

export default function RootLayout ({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <head>
        <meta charSet='UTF-8' />
        <meta content='width=device-width, initial-scale=1.0' name='viewport' />
        <meta
          name='keywords'
          content='casino, games, online casino, betting, real money'
        />
        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Casino',
              name: 'Bluechip Casino',
              url: 'https://blue-chip-clone.vercel.app',
              description: 'Join Bluechip Online Casino and play 3150+ Games.',
              logo: 'https://blue-chip-clone.vercel.app/assets/logo.png'
            })
          }}
        />
        <link
          rel='preload'
          href='/fonts/Jost-Regular.woff2'
          as='font'
          type='font/woff2'
          crossOrigin='anonymous'
        />
        <link
          rel='preload'
          href='/fonts/Jost-Medium.woff2'
          as='font'
          type='font/woff2'
          crossOrigin='anonymous'
        />
        <link
          rel='preload'
          href='/fonts/Jost-SemiBold.woff2'
          as='font'
          type='font/woff2'
          crossOrigin='anonymous'
        />
        <link
          rel='preload'
          href='/fonts/Jost-ExtraBold.woff2'
          as='font'
          type='font/woff2'
          crossOrigin='anonymous'
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-theme-primary  overflow-x-hidden`}
      >
        <header className='fixed top-0 w-full z-10'>
          <Navbar />
          <SearchDrawer></SearchDrawer>
        </header>

        <main className='w-full h-fit pt-[64px]'>{children}</main>

        <footer className='bg-theme-primary w-full'>
          <LinksDesktop />
          <LinksMobile />
          <PaymentCarousel />
          <FooterAbout />
        </footer>
      </body>
    </html>
  )
}
