import { useEffect, useState } from 'react'
import extractRoute from '@/utils/extractRoute'
import Image from 'next/image'
import logo from '../public/assets/images/todoLogo.png'
import Link from 'next/link'
import all from '../public/assets/icons/all.svg'
import pending from '../public/assets/icons/pending.svg'
import completed from '../public/assets/icons/completed.svg'

const Sidebar = (): JSX.Element => {
  const [activeTab, setActiveTab] = useState<number | null>(null)
  const [inSmallMode, setInSmallMode] = useState<boolean>(false)

  const menuItems = [
    {
      path: '/todos',
      name: 'All Tasks',
      index: 0,
      icon: all
    },
    {
      path: '/todos/active',
      name: 'Active Tasks',
      index: 1,
      icon: pending
    },
    {
      path: '/todos/complete',
      name: 'Completed Tasks',
      index: 2,
      icon: completed
    },
  ]

  const toggleSmallMode = () => {
    setInSmallMode(!inSmallMode)
  }

  return (
    <div className="flex bg-[#F8F7FC] h-[100vh] md:sticky top-0 shadow-sm mb-2 ">
      <div
        className={`${
          inSmallMode ? 'bg-transparent' : ''
        }bg-white xs:hidden dark:bg-[#1f2937]`}
      >
        <div
          className={`flex py-[25px] h-[80px] px-2 xs:p-6 ${
            inSmallMode ? 'p-2 ' : ''
          }`}
        >
          <Link href="/" passHref className="flex items-center">
            <Image
              src={logo}
              width={25}
              height={25}
              className={`mr-1 pr-1 ${
                inSmallMode ? 'hidden m-0' : ''
              } xs:hidden xs:m-0`}
              alt="Logo"
            />
            <span
              className={`self-center text- font-semibold whitespace-nowrap mr-6 xs:hidden ${
                inSmallMode ? 'hidden' : ''
              }`}
            >
              TaskFlow
            </span>
          </Link>
          <button
            type="button"
            className={`inline-flex items-center p-2 text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 ml-3 xs:m-0 ${
              inSmallMode ? 'ml-0 border' : ''
            }`}
            onClick={toggleSmallMode}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
        <div className="flex flex-col gap-[400px]">
          <div>
            {menuItems.map((item, index) => (
              <Link
                href={item.path}
                key={item.path}
                onClick={() => setActiveTab(index)}
                className={`flex p-4 hover:bg-[#f0fcfb] dark:hover:bg-[#6a7070] ${
                  activeTab === index ? 'bg-[#c8e6e3] dark:bg-[#3d4645]' : ''
                } ${inSmallMode ? 'hidden' : ''}`}
              >
                <div className={`${inSmallMode ? 'hidden' : ''}`}>
                  {item.name}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className="xs:flex hidden dark:bg-[#1f2937] bg-white bottom-0 fixed w-full border border-t-2 justify-between p-4 z-50">
        {menuItems.map((item, index) => (
          <Link
            href={item.path}
            key={item.path}
            onClick={() => setActiveTab(index)}
            className={` ${
              activeTab === index ? 'bg-[#c8e6e3] dark:bg-[#3d4645]' : ''
            } p-2`}
          >
            <Image src={item.icon} alt="Icon" className="w-[18px] h-[18px]" />
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Sidebar
