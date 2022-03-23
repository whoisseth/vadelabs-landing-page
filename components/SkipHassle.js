import Image from 'next/image'
export default function SkipHassle() {
  return (
    <div className="mx-auto text-center  mt-[109px] " id='hassle'>
      <h1 className="text-[56px] font-semibold mb-[111px]">
        <span className="text-[#2C4BFF]">Skip</span> the hassle.
      </h1>
      <div className='relative h-[554px] w-[1148px] mx-auto  '>
        <Image src='/Images/SkipTheHassle.png' objectFit='cover'  layout='fill' />
          </div>
    </div>
  )
}
