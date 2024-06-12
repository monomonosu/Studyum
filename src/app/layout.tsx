import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '@/styles/reset.css'
import '@/styles/globals.css'
import { Providers } from '@/app/providers'
import HeaderMain from '@/components/Layouts/HeaderMain'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Studyum',
  description:
    'Studyumは学ぶ人同士を繋ぐプラットフォームです。GoogleMeet・Skype・Zoom・Discordなど、様々なプラットフォームに対応しています。気軽にもくもく会を開いてみましょう！'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <Providers>
        <body className={inter.className}>
          <HeaderMain />
          {children}
        </body>
      </Providers>
    </html>
  )
}
