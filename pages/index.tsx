import type { NextPage } from 'next'
import Head from 'next/head'
import  Header from '../components/Header'

const Home: NextPage = () => {
  return (
    <div className="min-h-screen">
      <Head>
        <title>coin market site</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header/>
      <div className='mt-10'/>
      {/* <Trending/> */}
      <div className='mt-20'/>
      {/* <CMCtable/> */}
      
    </div>
  )
}

export default Home
