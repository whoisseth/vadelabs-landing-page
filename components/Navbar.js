import Image from "next/image"
import Link from "next/link"
function Navbar() {
  return (
      <div className="px-16 flex items-center justify-between py-3 font-poppins ">
          <Link href='/'>
          <a className="h-12 w-[186px] relative">
            <Image src='/Images/logo.png' layout="fill" objectFit="cover"/>  
              </a>
              </Link>
          <div className=" space-x-4 text-lg  " >
              <a href="#" >Skip the hassle</a>
              <a href="#" >Cruise through backend</a>
          </div>
          <button className="text-white  text-[22px] font-medium  bg-[#2C4BFF] px-7 py-3 rounded-xl  ">Get Early Access</button>

    </div>
  )
}

export default Navbar