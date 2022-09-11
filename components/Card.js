import React from 'react'
import CardList from './CardList'
import LionelMessi from '../components/images/lionel-messi.jpg'
import SteveJobs from '../components/images/steve-jobs.jpg'


const Card = () => {
  return (
    <div>
        
        <CardList
            img={LionelMessi}
            rating="5.0"
            number="(6)"
            country="ARG"
            description="Life & Football Lessons with Leo Messi"
            pricing="From $136"
        />
    </div>
  )
}

export default Card