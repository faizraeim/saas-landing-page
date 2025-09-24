import { RiPlayCircleLine } from '@remixicon/react'
import HeroImg from '../assets/hero-img.png'
import BrandLogo from '../assets/unsplash.png'
import React from 'react'

const Hero = () => {
  return (
    <>
    <div className='container m-auto flex justify-center mt-20'>
      <div className='w-6xl'>
        <div className='text-8xl font-bold w-5/6'>
          <h1>We’re here to Increase your Productivity</h1>
        </div>
        <div className='w-120 text-lg h-24 text-black my-8'>
          <p>Let's make your work more organize and easily using the Taskio Dashboard with many of the latest featuresin managing work every day.</p>
        </div>
        <div className='flex justify-between w-80'>
          <button className='bg-primary p-4 text-white rounded-full px-8'>Try free trial</button>
            <div className='flex align-center gap-4 justify-center'>
              <RiPlayCircleLine size={30} color='black' className=''/>
              <button>View Demo</button>
            </div>
        </div>
      </div>
      <div className='w-6xl '>
        <img src={HeroImg} alt="" />
      </div>
    </div>
      <div className='flex flex-col items-center mt-20 mb-50'>
        <h1 className='text-5xl font-bold '>More than 25,000 teams use Collabs</h1>
        <div className='flex flex-row items-center gap-20 mt-15'>
          <img src={BrandLogo} alt="" className='w-60'/>
          <img src={BrandLogo} alt="" className='w-60'/>
          <img src={BrandLogo} alt="" className='w-60'/>
          <img src={BrandLogo} alt="" className='w-60'/>
          <img src={BrandLogo} alt="" className='w-60'/>
        </div>
      </div>
    </>
  )
}

export default Hero
