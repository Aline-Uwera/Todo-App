'use client'
import { queryClient } from '@/utils/react-query-client'
import '../styles/globals.css'
import { QueryClientProvider } from '@tanstack/react-query'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const metadata = {
  title: 'Todo App',
  description: 'todo app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <QueryClientProvider client={queryClient}>
      <html lang="en">
        <head>
          <title>TaskFlow</title>
          <link
            rel="icon"
            href="/assets/images/todoLogo.png"
            type="image/x-icon"
          />
        </head>
        <body>
          <ToastContainer/>
          <main>
              {children}
          </main>
        </body>
      </html>
    </QueryClientProvider>
  )
}
