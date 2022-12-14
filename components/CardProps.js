import React from 'react'
import Image from 'next/image'


const CardProps = (props) => {

  let badgeText 
  if (props.openSpots === 0) {
    badgeText = "SOLD OUT"
  } else if (props.onlineSpots === "Online") {
    badgeText = "ONLINE"
  }

  return (
    <div>
        <div className="pt-12 rounded-lg grid justify-center">
            <div>
                {badgeText && <div class="bg-white text-black text-sm font-medium mt-2 ml-2 px-2 py-0.5 rounded absolute z-10 shadow-md">{badgeText}</div>}
                <Image 
                    width={300}
                    height={370}
                    src={props.img}
                    alt=''
                    className='rounded-2xl'
                />
            </div>
           
  
            <div className='inline-flex'>
                <svg aria-hidden="true" class="w-6 h-6 align-middle text-pinkRauschAir" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                
                <p className='ml-1'>{props.rating}</p>
                <p className='ml-1 text-gray-500'>{props.reviewCount}</p>
                <p className='ml-1'>{props.country}</p>
            </div>

            <div>
                <p>{props.description}</p>
                <p className='font-bold'>{props.pricing}<span className='font-normal'>/ person</span></p> 
            </div> 
        </div>
    </div>
  )
}

export default CardProps

