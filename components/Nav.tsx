import Link from 'next/link'
import Image from 'next/image'
import Logo from '../public/assets/images/todoLogo.png'

const Nav = (): JSX.Element => {
  return (
    <div>
      <nav className=" px-[50px] py-4 bg-[#f8f7fc] flex justify-between">
        <Link href="/" className=" flex">
          <Image
            src={Logo}
            alt="Logo"
            width={25}
            height={25}
            className="rounded-[50%] bg-white"
          />
          <p className="xs:hidden">TaskFlow</p>
        </Link>
        <div className="sm:flex">
          <div className="flex gap-3">
            <Link href="/todos" className="">
              My Tasks
            </Link>
            <Link href="/auth/login" className="">
              Login
            </Link>
            <Link href="/auth/register" className="text-[#39d0bc] font-extrabold">
              Register
            </Link>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Nav
