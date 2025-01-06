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
  title: 'Create Next App',
  description: 'Generated by create next app'
}

export default function RootLayout ({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <head>
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
          href='/fonts/bluechip.ttf'
          as='font'
          type='font/ttf'
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
