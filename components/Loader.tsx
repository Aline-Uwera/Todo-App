import Image from 'next/image'

function Loading() {
  return (
    <div className="w-full flex-center">
      <Image
        src="assets/icons/loader.svg"
        width={28}
        height={28}
        alt="loader"
        className="object-contain"
      />
    </div>
  )
}

export default Loading
