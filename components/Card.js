import React from 'react'
import CardList from './CardList'
import Link from 'next/link'
import LionelMessi from '../components/images/lionel-messi.jpg'
import SteveJobs from '../components/images/steve-jobs.jpg'
import CristianoRonaldo from '../components/images/cristiano-ronaldo.jpg'


const Card = () => {
  return (
    <div>
        <div className='mb-12 md:flex md:flex-wrap'>
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
                            pricing="From $127"
                        />
                    </div>
                </a>
            </Link>
        </div>
    </div>
  )
}

export default Card