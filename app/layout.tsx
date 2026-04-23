import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

// 1. IMPORT THE CUSTOM CURSOR HERE
import { CustomCursor } from '@/components/sections/CustomCursor'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Efaj Hossain | Researcher, Entrepreneur, Photographer',
  description: 'Portfolio of Efaj Hossain - Researcher in Edge AI & TinyML, Entrepreneur, and Photographer',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark bg-zinc-950">
      <body className="font-sans antialiased bg-zinc-950 text-zinc-100">
        
        {/* 2. INJECT THE CURSOR COMPONENT HERE */}
        <CustomCursor />
        
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}