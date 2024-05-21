"use client"
import { SessionProvider } from 'next-auth/react'
import {ThemeProvider} from 'next-themes'
const Provider = ({children,session}) => {
  return (
    <SessionProvider session={session}>
      <div className='text-gray-700 dark:text-gray-200 dark:bg-gray-700 min-h-screen select-none transition-colors duration-300'>
      {children}

      </div>
    </SessionProvider>
  )
}

export default Provider