import React from 'react'
import CardProps from './CardProps'
import Link from 'next/link'
// Images
import LionelMessi from '../public/images/lionel-messi.jpg'
import SteveJobs from '../public/images/steve-jobs.jpg'
import KhabyLame from '../public/images/khaby-lame.jpg'
import CristianoRonaldo from '../public/images/cristiano-ronaldo.jpg'
import ElonMusk from '../public/images/elon-musk.jpg'
import WarrenBuffet from '../public/images/warren-buffet.jpg'



const Card = () => {
  return (
    <div>
        <div className='mb-12 md:flex md:flex-wrap lg:flex lg:flex-wrap'>

           <Link href='https://messi.com/en/' passHref>
                <a target="_blank" rel="noopener noreferrer">
                    <div className='md:ml-12 md:w-52 lg:ml-36 lg:w-52'>
                        <CardProps
                            img={LionelMessi}
                            rating="5.0"
                            reviewCount="(6)"
                            country="ARG"
                            description="Life & Football Lessons with Leo Messi"
                            pricing="From $100"
                            openSpots={0}
                        />
                    </div>
                </a>
            </Link>

            <Link href='https://www.apple.com/' passHref>
                <a target="_blank" rel="noopener noreferrer">
                    <div className='md:ml-6 md:w-52 lg:ml-8 lg:w-52'>
                        <CardProps
                            img={SteveJobs}
                            rating="5.0"
                            reviewCount="(23)"
                            country="USA"
                            description="Creative Lessons with Steve Jobs"
                            pricing="From $123"
                            onlineSpots="Online"
                        />
                </div>
                </a>
            </Link>
            

            <Link href='https://www.cristianoronaldo.com/#cr7' passHref>
                <a target="_blank" rel="noopener noreferrer">
                    <div className='hidden sm:block md:ml-6 md:w-52 lg:ml-8 lg:w-52'>
                        <CardProps
                            img={CristianoRonaldo}
                            rating="5.0"
                            reviewCount="(7)"
                            country="POR"
                            description="Football Lessons with Cristiano Ronaldo"
                            pricing="From $100"
                            onlineSpots="Online"
                        />
                    </div>
                </a>
            </Link>
            

            <Link href='https://www.tesla.com/' passHref>
                <a target="_blank" rel="noopener noreferrer">
                    <div className='hidden sm:block md:ml-12 md:w-52 lg:ml-8 lg:w-52'>
                        <CardProps
                            img={ElonMusk}
                            rating="5.0"
                            reviewCount="(12)"
                            country="USA"
                            description="Fun Talk with Elon Musk"
                            pricing="From $112"
                            openSpots={0}
                        />
                    </div>
                </a>
            </Link>

            <Link href='https://www.instagram.com/khaby00/?hl=en' passHref>
                <a target="_blank" rel="noopener noreferrer">
                    <div className='hidden sm:block md:ml-6 md:w-52 lg:ml-8 lg:w-52'>
                        <CardProps
                            img={KhabyLame}
                            rating="5.0"
                            reviewCount="(22)"
                            country="ITA"
                            description="Content Creator Lessons with Khaby Lame"
                            pricing="From $100"
                            onlineSpots="Online"
                        />
                </div>
                </a>
            </Link>

            <Link href='https://www.forbes.com/profile/warren-buffett/?sh=1ba7e92e4639' passHref>
                <a target="_blank" rel="noopener noreferrer">
                    <div className='md:ml-6 md:w-52 lg:ml-8 lg:w-52'>
                        <CardProps
                            img={WarrenBuffet}
                            rating="5.0"
                            reviewCount="(11)"
                            country="USA"
                            description="Investing Lessons with Warren Buffet"
                            pricing="From $112"
                            openSpots={0}
                        />
                </div>
                </a>
            </Link>
            
        </div>
    </div>
  )
}

export default Card