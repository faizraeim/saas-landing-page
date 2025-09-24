import { RiLineChartLine, RiPieChartLine, RiStarFill, RiUserCommunityLine } from '@remixicon/react'
import React from 'react'

const Support = () => {
  return (
  

    <div className='flex flex-row justify-center items-start gap-16  m-auto p-20 bg-[#F9F8FE] w-full'>
      <div className='w-1/2 max-w-xl'>
       <h1 className='text-5xl leading-tight font-semibold '>How we support our pratner all over the world</h1>
       <p className='text-secondary  text-lg mt-10 mb-20'>SaaS become a common delivery model for many business application, including office software, messaging software, payroll processing software, DBMS software, management software</p>
       <div className='flex gap-20'>
        <div>
          <div className='flex gap-1 flex-row mb-6'>
            <RiStarFill size={25} color='#FFB800' />
            <RiStarFill size={25} color='#FFB800' />
            <RiStarFill size={25} color='#FFB800' />
            <RiStarFill size={25} color='#FFB800' />
            <RiStarFill size={25} color='#FFB800' />
          </div>
            <p className='text-lg mb-4'><span className='text-lg font-bold'>4.9</span> / 5 rating</p>
            <p className='text-lg font-bold text-secondary'>databricks</p>
          </div>

        <div>
          <div className='flex gap-1 flex-row mb-6'>
            <RiStarFill size={25} color='#FFB800' />
            <RiStarFill size={25} color='#FFB800' />
            <RiStarFill size={25} color='#FFB800' />
            <RiStarFill size={25} color='#FFB800' />
            <RiStarFill size={25} color='lightgray' />
          </div>
            <p className='text-lg mb-4'><span className='text-lg font-bold'>4.8</span> / 5 rating</p>
            <p className='text-lg font-bold text-secondary'>Chainalysis</p>
          </div>
          </div>
      </div>

    <div className='w-1/2 max-w-sm flex flex-col gap-y-6 '>
      <div className='flex flex-row'>
        <div className='bg-white flex items-center px-4 h-16 text-primary shadow-lg '>
          <RiLineChartLine size={30}/>
        </div>
        <div className='ml-4'>
          <h1 className='text-3xl font-bold mb-4'>Publishing</h1>
          <p className='text-secondary w-100 text-lg'>Plan, collaborate, and publishing your content that drives meaningful engagement and growth for your brand</p>
        </div>
      </div>

    <div className='flex flex-row'>
        <div className='bg-white flex items-center px-4 h-16 text-primary shadow-lg '>
          <RiPieChartLine size={30}/>
        </div>
        <div className='ml-4'>
          <h1 className='text-3xl font-bold mb-4'>Analytics</h1>
          <p className='text-secondary w-100 text-lg'>Analyze your performance and create gorgeous report</p>
        </div>
        </div>
     <div className='flex flex-row'>
        <div className='bg-white flex items-center px-4 h-16 text-primary shadow-lg '>
          <RiUserCommunityLine size={30}/>
        </div>
        <div className='ml-4'>
          <h1 className='text-3xl font-bold mb-4'>Engagement</h1>
          <p className='text-secondary w-100 text-lg'>Quickly navigate you and engage with your audience</p>
        </div>
        </div>
    </div>

    </div>
  )
}

export default Support
