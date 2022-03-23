import Head from 'next/head'
import Navbar from '../components/Navbar';
import Footer from './../components/Footer';
import HeroSection from './../components/HeroSection';

const Home = () => {
  return (
    <div className="max-w-[1440px]  mx-auto font-poppins">
      <Head>
        <title>Vadelabs</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <HeroSection/>
      <Footer/>

      
    </div>
  )
}

export default Home
