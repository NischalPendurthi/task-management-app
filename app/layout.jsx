// This is the root layout component for your Next.js app.
// Learn more: https://nextjs.org/docs/app/building-your-application/routing/pages-and-layouts#root-layout-required

import { Inter } from 'next/font/google'
import Header from '@/components/Header'
import '@/styles/globals.css';
import NavBar from '@/components/NavBar'
import Provider from "@/components/Provider"

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export default function Layout({ children }) {
  return (
    <html lang="en">
      <body className={inter.variable}>
        <Provider>
          <Header/>
          {/* <NavBar/> */}
          {children}
        </Provider>
      </body>
    </html>
  )
}