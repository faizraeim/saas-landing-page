import React from 'react'
import Img1 from '../assets/collb.png'
import Img2 from '../assets/storage.png'
import Img3 from '../assets/daily.png'

const Features = () => {
  return (
    <div>
      <div className='container m-auto flex flex-row items-center mt-10 gap-9 w-full p-20  justify-between'>
        <h1 className='text-6xl leading-tight w-sm font-semibold '>Our Features you can get</h1>
        <p className='text-secondary w-2xl text-lg'>We offer a variety of interesting features that you can help increase your productivity at work and manage your project easily</p>
        <button className='text-white px-6 py-4 rounded-full bg-primary'>Get Started</button>
      </div>

      <div className='container m-auto flex flex-row items-center mb-50 gap-16 w-7xl justify-center'>
        <div className='flex flex-col items-start gap-6 text-start max-w-sm'>
          <img src={Img1} alt="" />
          <h1 className='text-3xl font-semibold'>Collaboration Teams </h1>
          <p className='text-lg text-secondary leading-8'>Here you can handle projects together with team virtually</p>
        </div>
        <div className='flex flex-col items-start gap-6 text-start max-w-sm'>
          <img src={Img2} alt=""/>
          <h1 className='text-3xl font-semibold'>Cloud Storage</h1>
          <p className='text-lg text-secondary leading-8'>No need to worry about storage because we provide storage up to 2 TB</p>
        </div>
        <div className='flex flex-col items-start gap-6 text-start max-w-sm'>
          <img src={Img3} alt="" />
          <h1 className='text-3xl font-semibold'>Daily Analytics</h1>
          <p className='text-lg text-secondary leading-8'>We always provide useful information to make it easier for you every day</p>
        </div>
      </div>
    </div>
  )
}

export default Features
