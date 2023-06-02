'use client'
import '../../styles/globals.css'
import Sidebar from '@/components/Sidebar'
import DashboardNav from '@/components/DashboardNav'
import { useState } from 'react'
import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import React from 'react'
import { DarkModeSwitch } from 'react-toggle-dark-mode'

const metadata = {
  title: 'Todo App',
  description: 'todo app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const router = useRouter()
  const [darkMode, setDarkMode] = useState(false)
  const session: string | null =
    typeof window != 'undefined' ? window.sessionStorage.getItem('session') : ''

   const toggleDarkMode = (checked: boolean) => {
     setDarkMode(checked)
   }

  useEffect(() => {
    if (!session) {
      router.push('/auth/login') 
    } else {
      const user = session ? JSON.parse(session)?.user : null
    }
  }, [session, router])

  if (!session) {
    return null
  }
  return (
    <section className={darkMode ? 'dark' : 'bg-[#f8f7fc]'}>
      <div className="flex">
        <Sidebar />
        <div className="flex flex-col flex-grow">
          <DashboardNav darkMode={darkMode} />
          <div className="absolute right-[100px] top-5">
            <DarkModeSwitch
              style={{ marginBottom: '2rem' }}
              checked={darkMode}
              onChange={toggleDarkMode}
              size={30}
            />
          </div>
          {children}
        </div>
      </div>
    </section>
  )
}
