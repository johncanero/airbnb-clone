import Head from 'next/head'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'

export default function Home() {
  return (
    <div>
      <Head>
        <title>AirBnb Clone</title>
        <meta name="description" content="AirBnb Clone" />
        <meta itemprop="name" content="AirBnb" />
        <meta itemprop="description" content="AirBnb Clone created with Next JS and Tailwind CSS" />
        <meta itemprop="image" content="AirBnb Props" />
        <link rel="icon" href="/airbnbFavicon.png" />     
      </Head>
      
      <nav>
         <Navbar />
      </nav>

      <main>
          <Hero />
      </main>

      <footer>
    
      </footer>
    </div>
  )
}
