import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import AirbnnbGrid from '../components/images/airbnbGrid.png'

const Hero = () => {
  return (
    <div>
        {/* Hero Image */}
        <div className='m-auto w-80 mt-7 md:w-3/4 md:mt-9 lg:mt-12 flex justify-center'>
            <Link href='https://www.airbnb.com/' passHref>
                <a target="_blank" rel="noopener noreferrer">
                    <Image
                          src={AirbnnbGrid}
                          alt='airbnbGrid.png'
                          className=''
                    />
                </a>
            </Link>
        </div>

        {/* Hero Content */}
        <div className='mt-10 px-8 md:px-12 lg:px-36 lg:mt-16'>
            <h1 className='font-bold text-xl text-center md:text-5xl md:text-left font-Poppins'>Online Experiences</h1>
            <p className='font-light text-center mt-5 md:text-left md:text-2xl md:pr-64 font-Poppins '>Join unique interactive activities led by one-of-a-kind hosts-all without leaving home.</p>
        </div>
    

    </div>
  )
}

export default Hero