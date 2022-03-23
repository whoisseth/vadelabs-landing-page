import Head from 'next/head'
import Navbar from '../components/Navbar'
import Footer from './../components/Footer'
import HeroSection from './../components/HeroSection'
import SkipHassle from './../components/SkipHassle';

const Home = () => {
  return (
    <div className="mx-auto  max-w-[1440px] font-poppins ">
      <Head>
        <title>Vadelabs</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <HeroSection />
      <main className="-mt-20  rounded-t-[60px]   bg-white shadow-inner">
        <ParaSection />
        <SkipHassle/>
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
      <p className=" max-w-[800px] text-center font-poppins    text-2xl">
        We understand your needs to &nbsp;
        <span className="bg-[#eccb65]">build integrated applications</span>
        &nbsp; in today’s hyper-connected world.&nbsp;
        <span className="bg-[#eccb65]">Skip the hassle</span> to repeat a
        &nbsp;cumbersome process for&nbsp;
        <span className="bg-[#eccb65]">each unique integration.</span> &nbsp;Join us
        to build reliable connections with multiple providers and&nbsp;
        <span className="bg-[#eccb65]">cruise through backend</span>&nbsp; with ease.
      </p>
      <img src="/Images/hrLine.svg" alt=""  className='my-[50px]' />
    </div>
  )
}
