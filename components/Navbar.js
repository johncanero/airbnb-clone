import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import AirbnbLogo from '../public/images/airbnbLogo.png'

const Navbar = () => {
  return (
    <div>
        <nav className='px-8 p-6 bg-white border-gray-200 dark:border-gray-700 shadow-md md:px-10'>
            <div className='container flex flex-wrap justify-between items-center mx-auto'>
                <Link href='https://www.airbnb.com/'>
                    <a target="_blank" rel="noopener noreferrer" className='w-32 flex items-center'>
                        <Image 
                          src={AirbnbLogo}
                          alt='airbnbLogo.png'
                          className=''
                        />
                        <span></span>
                    </a>
                </Link>
            </div>
        </nav>
    </div>
  )
}

export default Navbar