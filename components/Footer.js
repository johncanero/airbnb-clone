import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import AirbnbLogo from '../public/images/airbnbLogo.png'


import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
// import {faCoffee} from '@fortawesome/free-solid-svg-icons'
import {faFacebookF} from '@fortawesome/free-brands-svg-icons'
import {faInstagram} from '@fortawesome/free-brands-svg-icons'
import {faTwitter} from '@fortawesome/free-brands-svg-icons'
import {faGithub} from '@fortawesome/free-brands-svg-icons'
import {faDribbble} from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
  return (
    <div>
        <footer className="p-10 sm:p-6 bg-darkGrayAir">
            {/* Footer Upper Section */}
            <div className="md:flex md:justify-between">

                    {/* Logo */}
                    <div className="mb-6 md:mb-0">
                        <Link href='https://www.airbnb.com/'>
                            <a target="_blank" rel="noopener noreferrer" className='w-24 flex items-center'>
                                <Image 
                                        src={AirbnbLogo}
                                        alt=''
                                    />
                            </a>
                        </Link>
                    </div>
                    
                    {/* Resources */}   
                    <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                        <div>
                            <h2 className="mb-4 text-sm font-semibold text-gray-900 uppercase dark:text-white">Resources</h2>

                            <ul className="text-gray-400">
                                <li className="mb-4"> 
                                    <Link href='https://nextjs.org/'>
                                        <a target="_blank" rel="noopener noreferrer" className='hover:underline'>
                                            Next Js
                                        </a>
                                     </Link>
                                </li>
                                <li>
                                    <Link href='https://tailwindcss.com/'>
                                        <a target="_blank" rel="noopener noreferrer" className='hover:underline'>
                                            Tailwind CSS
                                        </a>
                                     </Link>
                                </li>
                            </ul>
                        </div>

                        {/* Follow Us */}
                        <div>
                            <h2 className="mb-4 text-sm font-semibold text-gray-900 uppercase dark:text-white">Follow us</h2>

                            <ul className=" text-gray-400">
                                 <li className="mb-4"> 
                                    <Link href='https://github.com/johncanero'>
                                        <a target="_blank" rel="noopener noreferrer" className='hover:underline'>
                                            Github
                                        </a>
                                     </Link>
                                </li>
                                <li>
                                    <Link href='https://www.linkedin.com/in/johncanero/'>
                                        <a target="_blank" rel="noopener noreferrer" className='hover:underline'>
                                            LinkedIn
                                        </a>
                                     </Link>
                                </li>
                            </ul>
                        </div>
                </div>
            </div>


            {/* Horizontal Break */}
            <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-500 lg:my-8" />
             
        <div className="sm:flex sm:items-center sm:justify-between">
            <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2022 <a href="https://flowbite.com/" className="hover:underline">Flowbite™</a>. All Rights Reserved.
            </span>

            <div className="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
                <FontAwesomeIcon icon={faFacebookF}></FontAwesomeIcon>
                <FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon>
                <FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon>
                <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon>
                <FontAwesomeIcon icon={faDribbble}></FontAwesomeIcon>
            </div>
        </div>

        </footer>
    </div>
  )
}

export default Footer