import type { Metadata } from 'next'
import localFont from 'next/font/local'
import './globals.css'
import { APP_DESCRIPTION, APP_LANGUAGE, APP_NAME } from '@/lib/constants'

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
})
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
})

export const metadata: Metadata = {
  title: APP_NAME,
  description: APP_DESCRIPTION,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang={APP_LANGUAGE} className="">
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-background antialiased`}
      >
        {children}
      </body>
    </html>
  )
}
