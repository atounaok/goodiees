import Image from 'next/image'
import img from '../../public/images/hero3.jpg'

export default function Home() {
  console.log(img.src);
  return (
    <div className='min-h-screen text-white'>
      <div className="h-full ">
        <Image className='absolute -z-10 brightness-75 bg-black' alt='bg' objectFit='cover' src={img.src} fill />
      </div>
      <div>
        <h1 className='text-8xl mb-4 font-bold'>
          Find the unique product.
        </h1>
        <h1 className='text-6xl py-4 px-6 w-fit bg-white text-[#141414] font-bold'>
          Wear the unique logo.
        </h1>
      </div>
    </div>
  )
}
