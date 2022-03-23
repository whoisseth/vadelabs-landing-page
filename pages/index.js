import Head from 'next/head'
import Navbar from '../components/Navbar';

const Home = () => {
  return (
    <div className="max-w-[1440px]  mx-auto">
      <Head>
        <title>Vadelabs</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
    <Navbar/>

      
    </div>
  )
}

export default Home
