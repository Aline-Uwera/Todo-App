'use client'

import Nav from '@/components/Nav'
import Link from 'next/link'

const Home: React.FC = () => {
  return (
    <section className="w-full flex flex-col justify-center">
      <div className="flex flex-col h-screen">
        <Nav />
        <div className="flex-grow bg flex flex-col justify-center items-center">
          <span className="font-[600]  text-[60px] xs:text-[40px]">
            Stay organized, <br />
          </span>
          <p className="text-[40px] text-center font-[400] xs:text-[30px]">
            boost productivity, and
            <br /> achieve your goals <br />
            effortlessly.
          </p>

          <Link
            href={'/auth/login'}
            className=" h-[50px] bg-[#39d0bc] hover:bg-slate-300 p-2 font-medium leading-none shadow-lg m-[20px]"
          >
            <p className="text-[30px]">Get Started</p>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Home
