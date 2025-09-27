import { RiCheckboxCircleFill } from '@remixicon/react'
import LaptopImg from '../assets/laptop.png'
import React from 'react'

const Benefits = () => {
  return (
    <div className='flex flex-row m-auto gap-10  my-40'>

      <div className='container flex flex-col gap-6 w-1/2 ml-60'>
        <h1 className='text-6xl font-semibold w-lg leading-18'>What Benefit Will You Get</h1>
        
        <ul className='list-none flex flex-col gap-6 text-xl leading-8 mt-10'>
          <li className='flex items-center gap-3'><RiCheckboxCircleFill size={30} color='#54bd95'/> Free Consulting With Experts Saving Money</li>
          <li className='flex items-center gap-3'><RiCheckboxCircleFill size={30} color='#54bd95'/> Online Banking</li>
          <li className='flex items-center gap-3'><RiCheckboxCircleFill size={30} color='#54bd95'/> Investment Report Every Month</li>
          <li className='flex items-center gap-3'><RiCheckboxCircleFill size={30} color='#54bd95'/> Saving Money For The Future</li>
        </ul>

        </div>  

        <div className='w-1/2 flex justify-start items-start'>
          <img src={LaptopImg} alt="" className='w-120'/>
        </div>    
    </div>
  )
}

export default Benefits
