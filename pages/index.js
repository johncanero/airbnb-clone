import Head from 'next/head'
import Main from '../components/Main'

export default function Home() {
  return (
    <div>
      <Head>
        <title>AirBnb Clone</title>
        <meta name="description" content="AirBnb Clone" />
        <meta itemprop="name" content="AirBnb" />
        <meta itemprop="description" content="AirBnb Clone created with Next JS and Tailwind CSS" />
        <meta itemprop="image" content="AirBnb Props" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
         <Main />
      </main>

      <footer>
    
      </footer>
    </div>
  )
}
