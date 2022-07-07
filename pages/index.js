import React from 'react'
import Image from 'next/image'
import ProfilePic from './../public/profile.png'
import Head from 'next/head'

const site = "https://julian-portfolios.herokuapp.com";
const canonicalURL = site;

export default function Home() {
  return (
    <>
    <Head>
        <title>Dean Abner Julian</title>
        <meta name="description" content="Dean Abner Julian Portfolio" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="canonical" href={canonicalURL} />
        <meta property="og:title" content="Dean Abner Julian" />
        <meta property="og:description" content="Dean Abner Julian Portfolio" />
        <meta property="og:image" content={site + "/profile.png"} />
        <meta property="og:url" content={site} />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Dean Abner Julian" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
    </Head>
    <div className='relative py-2 md:py-20 overflow-hidden'>
      <div className='absolute mx-auto top-0 md:top-[50px] bottom-0 left-2 md:left-1/2 md:-translate-x-1/2 overflow-hidden'>
        <svg width="572" height="488" className='scale-50 md:scale-100' fill="none" xmlns="http://www.w3.org/2000/svg">
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
          <Image src={ProfilePic} width={200} height={200} alt='Dean Abner Julian' />
          <h1 className='text-3xl font-bold hidden'>Dean Abner Julian Portfolio, Webdeveloper</h1>
          <h2 className='font-medium md:font-semibold text-sm md:text-base text-white'>Hi kawan! Perkenalkan saya</h2>
          <h2 className='font-extrabold text-2xl md:text-4xl text-[#40142A]'>Dean Abner Julian</h2>
          <div className='flex justify-center space-x-4 items-center'>
            <span className='badge badge-gradient'>Fullstack Developer</span>
            <span className='text-white font-bold text-base'>|</span>
            <span className='badge badge-gradient'>DevOps Engineer</span>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}
