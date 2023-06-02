import User from './UserIcon'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

const DashboardNav = ({darkMode}:any): JSX.Element => {
  const router = useRouter()
  const [showLogout, setShowLogout] = useState(false)

  const handleLogout = async () => {
    sessionStorage.removeItem('session')
    router.push('/auth/login')
  }

  return (
    <div>
      <nav className="relative px-[50px] py-4 dark:bg-[#1f2937] bg-[#f8f7fc] flex justify-end ">
        <div
          className="w-9 h-9 rounded-full dark:text-white"
          onClick={() => {
            setShowLogout(!showLogout)
          }}
        >
          <User color={darkMode ? '#FFFFFF' : '#000000'} />
        </div>
        {showLogout ? (
          <div className="fixed right-[55px] top-[50px] border shadow-lg z-50">
            <button
              onClick={handleLogout}
              className=" bg-white dark:bg-[#1f2937] px-2 py-3 hover:text-red-300"
            >
              Logout
            </button>
          </div>
        ) : (
          ''
        )}
      </nav>
    </div>
  )
}

export default DashboardNav
