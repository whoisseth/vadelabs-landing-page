import Image from "next/image"
import Link from "next/link"
function Navbar() {
  return (
      <div className=" shadow ">
           <div className="max-w-[1440px] px-16 flex items-center justify-between py-3 font-poppins mx-auto">
              <Link href='/'>
              <a className="h-12 w-[186px] relative">
                <Image src='/Images/Navbar/logo.png' layout="fill" objectFit="cover"/>  
                  </a>
                  </Link>
              <div className=" flex items-center gap-12 text-lg  " >
                  <a href="#hassle" className="hover:text-blue-400" >Skip the hassle</a>
                  <a href="#backend" className="hover:text-blue-400" >Cruise through backend</a>
              </div>
              <button className="text-white  text-[22px] font-medium  bg-[#2C4BFF] px-7 py-3 rounded-xl  ">Get Early Access</button>
           </div>

    </div>
  )
}

export default Navbar