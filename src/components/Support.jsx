import { RiLineChartLine, RiPieChartLine, RiStarFill, RiUserCommunityLine } from '@remixicon/react'
import React from 'react'

const Support = () => {
  return (
    <div className='flex flex-col lg:flex-row justify-center items-start lg:items-center gap-12 md:gap-16 lg:gap-20 mx-auto p-10 md:p-20 bg-[#F9F8FE]'>
      {/* Left section: Text content and ratings */}
      <div className='w-full lg:w-1/2 max-w-xl text-center lg:text-left'>
        <h1 className='text-3xl md:text-4xl lg:text-5xl leading-tight font-semibold'>How we support our partner all over the world</h1>
        <p className='text-secondary text-base md:text-lg mt-6 md:mt-10 mb-10 md:mb-16'>
          SaaS become a common delivery model for many business application, including office software, messaging software, payroll processing software, DBMS software, management software
        </p>
        
        {/* Ratings */}
        <div className='flex flex-col sm:flex-row gap-8 sm:gap-20 items-center justify-center lg:justify-start'>
          {/* Databricks rating */}
          <div className='flex flex-col items-center sm:items-start'>
            <div className='flex gap-1 mb-4'>
              <RiStarFill size={25} color='#FFB800' />
              <RiStarFill size={25} color='#FFB800' />
              <RiStarFill size={25} color='#FFB800' />
              <RiStarFill size={25} color='#FFB800' />
              <RiStarFill size={25} color='#FFB800' />
            </div>
            <p className='text-base md:text-lg mb-2'><span className='text-lg font-bold'>4.9</span> / 5 rating</p>
            <p className='text-base md:text-lg font-bold text-secondary'>databricks</p>
          </div>

          {/* Chainalysis rating */}
          <div className='flex flex-col items-center sm:items-start'>
            <div className='flex gap-1 mb-4'>
              <RiStarFill size={25} color='#FFB800' />
              <RiStarFill size={25} color='#FFB800' />
              <RiStarFill size={25} color='#FFB800' />
              <RiStarFill size={25} color='#FFB800' />
              <RiStarFill size={25} color='lightgray' />
            </div>
            <p className='text-base md:text-lg mb-2'><span className='text-lg font-bold'>4.8</span> / 5 rating</p>
            <p className='text-base md:text-lg font-bold text-secondary'>Chainalysis</p>
          </div>
        </div>
      </div>

      {/* Right section: Features */}
      <div className='w-full lg:w-1/2 max-w-sm flex flex-col gap-y-8 mt-10 lg:mt-0'>
        {/* Feature: Publishing */}
        <div className='flex flex-col sm:flex-row items-center sm:items-start'>
          <div className='bg-white flex items-center justify-center p-4 h-16 w-16 text-primary shadow-lg rounded-lg flex-shrink-0'>
            <RiLineChartLine size={30} />
          </div>
          <div className='ml-0 sm:ml-4 mt-4 sm:mt-0 text-center sm:text-left'>
            <h1 className='text-xl md:text-2xl lg:text-3xl font-bold mb-2'>Publishing</h1>
            <p className='text-secondary text-base md:text-lg'>
              Plan, collaborate, and publishing your content that drives meaningful engagement and growth for your brand
            </p>
          </div>
        </div>

        {/* Feature: Analytics */}
        <div className='flex flex-col sm:flex-row items-center sm:items-start'>
          <div className='bg-white flex items-center justify-center p-4 h-16 w-16 text-primary shadow-lg rounded-lg flex-shrink-0'>
            <RiPieChartLine size={30} />
          </div>
          <div className='ml-0 sm:ml-4 mt-4 sm:mt-0 text-center sm:text-left'>
            <h1 className='text-xl md:text-2xl lg:text-3xl font-bold mb-2'>Analytics</h1>
            <p className='text-secondary text-base md:text-lg'>Analyze your performance and create gorgeous report</p>
          </div>
        </div>

        {/* Feature: Engagement */}
        <div className='flex flex-col sm:flex-row items-center sm:items-start'>
          <div className='bg-white flex items-center justify-center p-4 h-16 w-16 text-primary shadow-lg rounded-lg flex-shrink-0'>
            <RiUserCommunityLine size={30} />
          </div>
          <div className='ml-0 sm:ml-4 mt-4 sm:mt-0 text-center sm:text-left'>
            <h1 className='text-xl md:text-2xl lg:text-3xl font-bold mb-2'>Engagement</h1>
            <p className='text-secondary text-base md:text-lg'>Quickly navigate you and engage with your audience</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Support
