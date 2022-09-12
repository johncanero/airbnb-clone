import React from 'react'
import CardList from './CardList'
import LionelMessi from '../components/images/lionel-messi.jpg'
import SteveJobs from '../components/images/steve-jobs.jpg'
import CristianoRonaldo from '../components/images/cristiano-ronaldo.jpg'


const Card = () => {
  return (
    <div>
        <div className='md:flex'>
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
        </div>
    </div>
  )
}

export default Card