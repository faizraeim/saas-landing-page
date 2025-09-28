import { RiCheckboxCircleFill } from '@remixicon/react';
import LaptopImg from '../assets/laptop.png';
import React from 'react';

const Benefits = () => {
  return (
    <div className='container mx-auto px-4 flex flex-col lg:flex-row items-center gap-10 md:gap-20 my-20 md:my-40'>

      {/* Text and list content */}
      <div className='w-full lg:w-1/2 flex flex-col gap-6 text-center lg:text-left'>
        <h1 className='text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight'>What Benefit Will You Get</h1>
        
        <ul className='list-none flex flex-col gap-6 text-lg md:text-xl leading-8 mt-6 md:mt-10'>
          <li className='flex items-center justify-center lg:justify-start gap-3'>
            <RiCheckboxCircleFill size={30} color='#54bd95'/> Free Consulting With Experts Saving Money
          </li>
          <li className='flex items-center justify-center lg:justify-start gap-3'>
            <RiCheckboxCircleFill size={30} color='#54bd95'/> Online Banking
          </li>
          <li className='flex items-center justify-center lg:justify-start gap-3'>
            <RiCheckboxCircleFill size={30} color='#54bd95'/> Investment Report Every Month
          </li>
          <li className='flex items-center justify-center lg:justify-start gap-3'>
            <RiCheckboxCircleFill size={30} color='#54bd95'/> Saving Money For The Future
          </li>
        </ul>
      </div>  

      {/* Image content */}
      <div className='w-full lg:w-1/3 flex justify-center lg:justify-end items-center'>
        <img src={LaptopImg} alt="Laptop" className='w-full h-auto max-w-lg lg:max-w-none' />
      </div>    
    </div>
  );
};

export default Benefits;
