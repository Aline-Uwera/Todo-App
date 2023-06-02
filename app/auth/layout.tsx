'use client'
import '../../styles/globals.css'
import Nav from '@/components/Nav'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="">
      <div className="flex flex-col h-screen">
        <Nav />
        <div className="flex-grow bg flex justify-center items-center">
          {children}
        </div>
      </div>
    </div>
  )
}
