import React from 'react'
import Image from 'next/image'
import LionelMessi from '../components/images/lionel-messi.jpg'


const Card = () => {
  return (
    <div>
        <div className='px-8 md:px-12 lg:px-36 font-Poppins'>
            <div className='scale-90'>
                <Image 
                    src={LionelMessi}
                    alt='lionel-messi.jpg'
                    className=' rounded-2xl'
                />

                <div className='inline-flex'>
                    <svg aria-hidden="true" class="w-6 h-6 align-middle text-pinkRauschAir" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                    <p className='ml-1'>5.0</p>
                    <p className='ml-1'>(6)</p>
                    <p className='ml-1'>•</p>
                    <p className='ml-1'>ARG</p>
                </div>

                <p>Life & Football Lessons with Leo Messi</p>
                <p className='font-bold'>From $136 <span className='font-normal'>/ person</span></p>    
            </div>
        </div>
    </div>
  )
}

export default Card