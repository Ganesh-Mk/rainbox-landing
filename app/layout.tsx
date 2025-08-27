import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './styles/global.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata = {
  title: 'Rainbox - Inbox for Newsletters You Care About',
  description: 'All your favorite newsletters, in one place - organized and distraction-free.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="shortcut icon" href="/logo-sm.png" type="image/png" />
      </head>
      <body className={`${inter.variable} font-sans`}>
        {children}
      </body>
    </html>
  )
}