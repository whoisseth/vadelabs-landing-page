import Image from 'next/image'
import { BiFullscreen } from 'react-icons/bi'
import { IoMdSettings } from 'react-icons/io'
import { ImVolumeMute2 } from 'react-icons/im'
import { FaShare } from 'react-icons/fa'

function HeroSection() {
  return (
    <div className="relative   h-[1028px] overflow-hidden  ">
      <div className="absolute -top-10 -z-10  h-full  w-full ">
              <Image
                  className='bg-gray-100'
          src="/Images/HeroSection/dots.png"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="flex h-[calc(1028px-200px)]">
        <LeftText />
        <RightImage />
      </div>
    </div>
  )
}
export default HeroSection
//

function LeftText() {
  return (
    <div className="flex w-full flex-col items-center justify-center  ">
      <div className="w-[544px]">
        <h1 className="mb-4 text-7xl font-bold text-[#2E3B4E]  ">
          Integrate APIs In Minutes
        </h1>
        <p className="mb-14 text-2xl font-semibold">
          Get ridiculously creative with your products and let us do the hard
          work for you!
        </p>
        <div className="flex h-[60px] w-[512px]  justify-center overflow-hidden rounded-xl border-[1px] border-[#2C4BFF] bg-white">
          <input
            type="email"
            placeholder="email@example.com"
            className="h-full w-[289px] px-5 text-lg  outline-none  "
          />
          <button className="h-full w-[223px] bg-[#2C4BFF] text-[22px] font-medium text-white  ">
            Get Early Access
          </button>
        </div>
      </div>
    </div>
  )
}

function RightImage() {
  return (
    <div className="flex  w-full items-center justify-end">
      <div className="relative h-[620px] w-[650px] rounded-tl-[64px] rounded-bl-[64px] border-[1px] border-r-0 border-[#333C47] bg-white ">
        <div className="relative mt-[106px] mr-[62px] mb-[162px] ml-[124px] h-[351px] w-[464px] ">
          <Image
            src="/Images/HeroSection/circles.png"
            objectFit="cover"
            layout="fill"
          />
        </div>
        <div className="hero-rightSide-blur absolute right-0 top-0 mt-9 h-[calc(620px-75px)]  w-[610px] rounded-tl-[60px] rounded-bl-[60px]">
          <div className="mt-10 ml-[52px] flex gap-3 text-lg">
            <BiFullscreen className="cursor-pointer" />
            <IoMdSettings className="cursor-pointer" />
            <ImVolumeMute2 className="cursor-pointer" />
            <FaShare className="cursor-pointer" />
          </div>
          <div className="absolute top-1/2 left-1/2  h-14 w-24 cursor-pointer   ">
            <Image
              src="/Images/HeroSection/youtube.png"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className="absolute bottom-20  left-64 h-[121px] w-36">
            <Image
              src="/Images/HeroSection/arrow.png"
              layout="fill"
              objectFit="contain"
            />
          </div>
          <h1 className="absolute bottom-16 left-24 font-exp2 text-2xl font-extrabold">
            TAKE A TOUR
          </h1>
        </div>
      </div>
    </div>
  )
}
