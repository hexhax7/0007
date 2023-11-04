import { Inter } from 'next/font/google'
import './globals.css'
import Head from 'next/head'
import Link from 'next/link'
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Hexhax drones',
  description: 'hexhax drone services',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
        <Head>
          <link rel="shortcut icon" href="/images/favicon.ico" />
          <link rel="apple-touch-icon" sizes="180x180" href="/images/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/images/favicon-32x32.png"/>
          <link rel="icon" type="image/png" sizes="16x16" href="/images/favicon-16x16.png"/>
</Head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
