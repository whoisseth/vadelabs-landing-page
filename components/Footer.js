import { FaTwitter, FaLinkedin } from 'react-icons/fa'
import { GiEarthAmerica } from 'react-icons/gi'
import { BsFillTelephoneFill } from 'react-icons/bs'
function Footer() {
  return (
   <div className='bg-[#2E3B4E]'>
      <footer className=" max-w-[1440px] mx-auto flex justify-between  px-32 pt-12 pb-20 text-lg text-white ">
        {/* section 1 */}
        <section className="flex flex-col items-center  gap-4 ">
          <p>© 2022 Vade Labs Pvt. Ltd.</p>
          <p className="flex  justify-center gap-3 text-2xl">
            <a href="#">
              <FaTwitter />
            </a>
            <a href="#">
              <FaLinkedin />
            </a>
          </p>
        </section>
        {/* section 2 */}
        <section className="text-center w-96">
          <div className="text-[#999999] mb-5">About us</div>
          <p className="">
            We're a group of enthusiasts who love helping creatives build software
            applications.
          </p>
        </section>
        {/* section 3 */}
        <section className="text-center flex  flex-col items-center">
          <div className="text-[#999999]  mb-5">Contact</div>
          <p className=" flex gap-2 items-center">
            <GiEarthAmerica  /> <span>hello@vadelabs.com</span>
          </p>
          <p className="flex gap-2 items-center">
          
            <BsFillTelephoneFill className='text-sm' /> <span>+91-7829887887</span>
          </p>
        </section>
      </footer>
   </div>
  )
}

export default Footer
