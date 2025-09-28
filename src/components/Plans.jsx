import React, { useState } from 'react';
import { PlansData } from '../data/data';
import { RiCheckboxCircleFill } from '@remixicon/react';
import { Link } from 'react-router-dom';

const Plans = () => {
  const [price, setPrice] = useState(0)

  return (
    <>
      <div className='text-center mt-20 md:mt-30 mb-10 px-4'>
        {/* Responsive Heading */}
        <h1 className='text-4xl md:text-5xl lg:text-6xl font-semibold max-w-xl mx-auto my-8'>{PlansData[0].title}</h1>
        <p className='text-base md:text-lg font-bold my-6 text-secondary'>{PlansData[0].subtitle}</p>
        
        {/* Responsive Duration Buttons */}
        <div className='flex justify-center my-4'>
          {PlansData.map((plan) => (
            plan.id === 0 && (
              <div key={plan.id} className='flex flex-col sm:flex-row gap-4 bg-white rounded-lg shadow-md p-2 text-lg'>
                <button className={price === 0 ? 'bg-primary text-white px-8 py-4 rounded-lg' : 'text-black px-6 py-2 rounded-full bg-white'} onClick={()=> setPrice(0)}>{plan.duration.monthly}</button>
                <button className={price === 1 ? 'bg-primary text-white px-8 py-4 rounded-lg ': 'text-black px-6 py-2 rounded-full bg-white'} onClick={()=> setPrice(1)}>{plan.duration.yearly}</button>
              </div>
            )
          ))}
        </div>
      </div>
      
      {/* Responsive Plans Grid */}
      <div className='container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center gap-8 md:gap-10 mb-20 px-4'>
        {PlansData.slice(1).map((plan) => (
          <div key={plan.id} className='rounded-4xl p-8 shadow-lg text-center'>
            {/* Plan Card Content */}
            <div className='mb-6 flex flex-col items-center'>
              <h2 className='text-3xl font-semibold mb-4'>{plan.name}</h2>
              <p className='text-secondary mb-4 text-lg leading-normal max-w-sm'>{plan.desc}</p>
              <p className='text-5xl font-semibold mb-4'><sup className='text-secondary mr-1'>$</sup>{plan.price[price]}</p>
            </div>
            
            {/* Features and Button Section */}
            <div className='bg-gray-50 rounded-xl p-6 flex flex-col items-center '>
              <ul className='mb-6 flex flex-col items-start w-full px-4 '>
                {plan.features.map((feature, index) => (
                  <li key={index} className='text-black mb-2 flex items-center justify-start gap-4 text-lg leading-12'>
                    <RiCheckboxCircleFill size={30} color='#54bd95' />
                    <span className='text-left'>{feature}</span>
                  </li>
                ))}
              </ul>
              <Link to="login"><button className='bg-primary font-semibold text-white  px-6 py-3 shadow-md rounded-xl text-lg cursor-pointer'>{plan.btn}</button></Link>
            </div>
          </div>
        ))} 
      </div>
    </>
  );
};

export default Plans;
  