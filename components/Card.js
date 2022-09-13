import React from 'react'
import CardList from './CardList'
import Link from 'next/link'
import LionelMessi from '../components/images/lionel-messi.jpg'
import SteveJobs from '../components/images/steve-jobs.jpg'
import KhabyLame from '../components/images/khaby-lame.jpg'
import CristianoRonaldo from '../components/images/cristiano-ronaldo.jpg'
import ElonMusk from '../components/images/elon-musk.jpg'
import WarrenBuffet from '../components/images/warren-buffet.jpg'



const Card = () => {
  return (
    <div>
        <div className='mb-12 md:flex md:flex-wrap lg:flex lg:flex-wrap'>

           <Link href='https://messi.com/en/' passHref>
                <a target="_blank" rel="noopener noreferrer">
                    <div className='md:ml-12 md:w-52 lg:ml-36 lg:w-64'>
                        <CardList
                            img={LionelMessi}
                            rating="5.0"
                            number="(6)"
                            country="ARG"
                            description="Life & Football Lessons with Leo Messi"
                            pricing="From $100"
                        />
                    </div>
                </a>
            </Link>

            <Link href='https://www.apple.com/' passHref>
                <a target="_blank" rel="noopener noreferrer">
                    <div className='md:ml-6 md:w-52 lg:w-64'>
                        <CardList
                            img={SteveJobs}
                            rating="5.0"
                            number="(23)"
                            country="USA"
                            description="Creative Lessons with Steve Jobs"
                            pricing="From $123"
                        />
                </div>
                </a>
            </Link>
            

            <Link href='https://www.cristianoronaldo.com/#cr7' passHref>
                <a target="_blank" rel="noopener noreferrer">
                    <div className='md:ml-6 md:w-52 lg:w-64'>
                        <CardList
                            img={CristianoRonaldo}
                            rating="5.0"
                            number="(7)"
                            country="POR"
                            description="Football Lessons with Cristiano Ronaldo"
                            pricing="From $100"
                        />
                    </div>
                </a>
            </Link>
            
            {/* Tablet and Desktop */}
            <Link href='https://www.tesla.com/' passHref>
                <a target="_blank" rel="noopener noreferrer">
                    <div className='hidden sm:block md:ml-12 md:w-52 lg:ml-6 lg:w-64'>
                        <CardList
                            img={ElonMusk}
                            rating="5.0"
                            number="(12)"
                            country="USA"
                            description="Fun Talk with Elon Musk"
                            pricing="From $112"
                        />
                    </div>
                </a>
            </Link>

            <Link href='https://www.instagram.com/khaby00/?hl=en' passHref>
                <a target="_blank" rel="noopener noreferrer">
                    <div className='hidden sm:block md:ml-6 md:w-52 lg:w-64'>
                        <CardList
                            img={KhabyLame}
                            rating="5.0"
                            number="(22)"
                            country="ITA"
                            description="Content Creator Lessons with Khaby Lame"
                            pricing="From $100"
                        />
                </div>
                </a>
            </Link>

            <Link href='https://www.forbes.com/profile/warren-buffett/?sh=1ba7e92e4639' passHref>
                <a target="_blank" rel="noopener noreferrer">
                    <div className='hidden sm:block md:ml-6 md:w-52 lg:ml-36 lg:w-64'>
                        <CardList
                            img={WarrenBuffet}
                            rating="5.0"
                            number="(11)"
                            country="USA"
                            description="Investing Lessons with Warren Buffet"
                            pricing="From $112"
                        />
                </div>
                </a>
            </Link>
            
        </div>
    </div>
  )
}

export default Card