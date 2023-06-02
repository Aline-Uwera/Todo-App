import Image from 'next/image'
import loader from '../public/assets/icons/loader.svg'

function PageLoading() {
  return (
    <div className="w-full flex justify-center items-center p-[100px]">
      <Image
        src={loader}
        width={50}
        height={50}
        alt="loader"
        color="black"
        priority={true}
        className="object-contain"
      />
    </div>
  )
}

export default PageLoading
