import Head from 'next/head'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Card from '../components/Card'

import LionelMessi from '../components/images/lionel-messi.jpg'


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
          <Card 
              img={LionelMessi}
              rating="5.0"
              number="(6)"
              country="ARG"
              description="Life & Football Lessons with Leo Messi"
              pricing="From $136"
          />

          <Card 

          />
      </main>

      <footer>
    
      </footer>
    </div>
  )
}
