import { Crimson_Pro, DM_Sans } from 'next/font/google'
import './globals.css'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'

const crimsonPro = Crimson_Pro({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-display',
  display: 'swap',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-body',
  display: 'swap',
})

export const metadata = {
  title: 'Samatat Open Scout Group - Bangladesh Scouts',
  description: 'Building character, leadership, and community through scouting in Bangladesh. Join Samatat Open Scout Group for adventure, learning, and service.',
  keywords: 'scouts, bangladesh scouts, samatat, scout group, youth development, leadership',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${crimsonPro.variable} ${dmSans.variable}`}>
      <body>
        <Header />
        <main style={{ paddingTop: '85px' }}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}