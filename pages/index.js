import React from 'react'
import Image from 'next/image'
import ProfilePic from './../public/profile.png'

export default function Home() {
  return (
    <div className='relative py-20'>
      <div className='absolute mx-auto top-[50px] left-1/2 -translate-x-1/2'>
        <svg width="572" height="488" viewBox="0 0 572 488" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" clipRule="evenodd" d="M238.461 444.096C239.689 444.719 240.926 445.319 242.173 445.898C365.958 503.002 585.244 338.463 571.36 199.063C557.476 59.6632 310.476 -54.0819 201.091 28.1608C164.141 55.8295 142.747 105.652 135.31 161.776C94.874 162.332 57.3332 173.551 33.5226 197.952C-37.8767 271.122 14.4472 462.549 111.741 485.096C151.329 494.352 198.321 475.803 238.461 444.096Z" fill="url(#paint0_linear_109_191)"/>
          <defs>
            <linearGradient id="paint0_linear_109_191" x1="0.405823" y1="0.438385" x2="571.989" y2="0.438385" gradientUnits="userSpaceOnUse">
              <stop stopColor="#1C455B"/>
              <stop offset="1" stopColor="#3F3F40"/>
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className='card card-glass max-w-[572px] mx-auto'>
        <div className='flex flex-col justify-center items-center px-3 gap-3'>
          <Image src={ProfilePic} width={200} height={200} />
          <h5 className='font-semibold text-base text-white'>Hi kawan! Perkenalkan saya</h5>
          <h1 className='font-extrabold text-4xl text-[#40142A]'>Dean Abner Julian</h1>
          <div className='flex justify-center space-x-4 items-center'>
            <span className='badge badge-gradient'>Fullstack Developer</span>
            <span className='text-white font-bold text-base'>|</span>
            <span className='badge badge-gradient'>DevOps Engineer</span>
          </div>
        </div>
      </div>


    </div>
  )
}
