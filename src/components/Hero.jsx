import { RiPlayCircleLine } from '@remixicon/react'
import { Link } from 'react-router-dom'
import HeroImg from '../assets/hero-img.png'
import BrandLogo from '../assets/unsplash.png'
import React from 'react'

const Hero = () => {
  return (
    <>
      {/* Container for the entire hero section */}
      <div className='bg-transparent'>
        <div className='container mx-auto px-4 lg:px-8 flex flex-col lg:flex-row justify-center items-center mt-10 md:mt-20'>
          {/* Text content */}
          <div className='w-full lg:w-1/2 flex flex-col justify-center items-center lg:items-start text-center lg:text-left mb-10 lg:mb-0'>
            {/* Heading */}
            <div className='w-full lg:w-5/6'>
              <h1 className='text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold text-black leading-tight'>
                We’re here to Increase your Productivity
              </h1>
            </div>
            {/* Paragraph */}
            <div className='w-full lg:max-w-xl text-lg my-6 md:my-8 text-black'>
              <p>Let's make your work more organize and easily using the Taskio Dashboard with many of the latest featuresin managing work every day.</p>
            </div>
            {/* Buttons */}
            <div className='flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 w-auto'>
              <Link to="trial" className='bg-primary p-4 text-white rounded-full px-8 cursor-pointer'>Try free trial</Link>
              <div className='flex items-center gap-4 justify-center cursor-pointer'>
                <RiPlayCircleLine size={30} color='black' />
               <Link to="demo"><button className='text-black'>View Demo</button></Link>
              </div>
            </div>
          </div>
          
          {/* Image content */}
          <div className='w-full lg:w-1/2 flex justify-center items-center'>
            <img src={HeroImg} alt="" className="w-full h-auto max-w-xl lg:max-w-none" />
          </div>
        </div>

        {/* Brands section */}
        <div className='flex flex-col items-center mt-20 md:mt-32 mb-10 md:mb-20 px-4 text-center'>
          <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold text-black'>
            More than 25,000 teams use Collabs
          </h2>
          <div className='flex flex-wrap items-center justify-center gap-8 md:gap-12 lg:gap-20 mt-10 md:mt-12'>
            {/* Using map to render brand logos for better code management */}
            {[...Array(5)].map((_, i) => (
              <img key={i} src={BrandLogo} alt="Brand logo" className='w-24 md:w-32 lg:w-40 h-auto' />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero
