import Head from 'next/head'
import Navbar from '../components/Navbar'
import Footer from './../components/Footer'
import HeroSection from './../components/HeroSection'
import SkipHassle from './../components/SkipHassle'
import CruiseThroughBackend from './../components/CruiseThroughBackend'

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  })
}
const Home = () => {
  return (
    <div className="mx-auto  max-w-[1440px] font-poppins ">
      <Head>
        <title>Vadelabs</title>
        <link rel="icon" href="/favicon.ico" />
        <style>
          @import
          url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap');
          @import
          url('https://fonts.googleapis.com/css2?family=Exo+2:wght@400;500;600;800&display=swap');
        </style>
      </Head>
      <Navbar />
      <HeroSection />
      <main className="-mt-20  rounded-t-[60px]   bg-white shadow-inner">
        <ParaSection />
        <SkipHassle />
        <CruiseThroughBackend />
        <ParaWithEmail />
      </main>
      <Footer />
    </div>
  )
}

export default Home
//
function ParaSection() {
  return (
    <div className="mx-auto max-w-[800px] pt-[136px]">
      <p className=" max-w-[800px] text-center font-poppins text-2xl leading-relaxed   font-medium">
        We understand your needs to &nbsp;
        <span className="bg-[#eccb65]">build integrated applications</span>
        &nbsp; in today’s hyper-connected world.&nbsp;
        <span className="bg-[#eccb65]">Skip the hassle</span> to repeat a
        &nbsp;cumbersome process for&nbsp;
        <span className="bg-[#eccb65]">each unique integration.</span>{' '}
        &nbsp;Join us to build reliable connections with multiple providers
        and&nbsp;
        <span className="bg-[#eccb65]">cruise through backend</span>&nbsp; with
        ease.
      </p>
      <img src="/Images/hrLine.svg" alt="" className="my-[50px]" />
    </div>
  )
}

function ParaWithEmail() {
  return (
    <div className="relative mx-auto  max-w-[800px] pb-[312px]">
      <img src="/Images/hrLine.svg" alt="" className="mb-[67px]" />
      <p className=" mb-[54px] max-w-[800px] text-center    font-poppins text-2xl leading-relaxed">
        We're building an ecosystem where{' '}
        <span className="bg-[#eccb65]">anyone can get inspired</span> with
        application templates, discover novel ideas from top builders, and
        &nbsp;
        <span className="bg-[#eccb65]">
          publish revolutionary applications
        </span>{' '}
        that could <span className="bg-[#eccb65]">change the world.</span>
      </p>
      {/* input mail  */}
      <div className="mx-auto  flex  h-[60px] w-[512px] justify-center overflow-hidden rounded-xl border-[1px] border-[#2C4BFF] bg-white">
        <input
          type="email"
          placeholder="email@example.com"
          className="h-full w-[289px] px-5 text-lg  outline-none  "
        />
        <button className="h-full w-[223px] bg-[#2C4BFF] text-[22px] font-medium text-white  ">
          Get Early Access
        </button>
      </div>
      {/* scroll to  top arrow */}
      <div
        onClick={() => scrollToTop()}
        className=" absolute -right-44  bottom-[92px] flex cursor-pointer flex-col items-center gap-2"
      >
        <img src="/Images/scrolltop.png" height="27" width="27" alt="" />
        <p className="text-lg text-[#333C47]">Back to top</p>
      </div>
    </div>
  )
}
