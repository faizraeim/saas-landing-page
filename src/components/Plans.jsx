import React from 'react'
import { PlansData } from '../data/data'
import { RiCheckboxCircleFill } from '@remixicon/react'

const Plans = () => {
  return (
    <>
      <div className='text-center mt-30 mb-10'>
        <h1 className='text-6xl font-semibold w-xl m-auto my-8 '>{PlansData[0].title}</h1>
        <p className='text-lg font-bold my-6 text-secondary mt-4'>{PlansData[0].subtitle}</p>
        <div className='flex justify-center my-4'>
          {PlansData.map((plan) => (
            plan.id === 0 && (
              <div key={plan.id} className='flex gap-4 bg-white rounded-lg shadow-md p-2 text-lg'>
                <button className='text-black px-6 py-2 rounded-full'>{plan.duration.monthly}</button>
                <button className='bg-primary text-white px-8 py-4 rounded-lg'>{plan.duration.yearly}</button>
              </div>
            )
          ))}
        </div>
        
      </div>
      <div className='container m-auto flex justify-center gap-10 mb-20 '>
        {PlansData.slice(1).map((plan) => (
          <div key={plan.id} className=' rounded-4xl p-8 w-100 shadow-lg'>
            <div className='mb-6 flex items-center flex-col'>
              <h2 className=' text-3xl font-semibold mb-4'>{plan.name}</h2>
              <p className='text-secondary text-center mb-4 w-62  text-lg leading-normal'>{plan.desc}</p>
              <p className='text-5xl font-semibold mb-4'>{plan.price}</p>
            </div>
            <div className=' bg-gray-50 rounded-xl p-6'>
            <ul className='mb-6'>
              {plan.features.map((feature, index) => (
                <li key={index} className='text-black mb-2 flex flex-row gap-4 text-lg leading-12 items-center '><RiCheckboxCircleFill size={30} color='#54bd95'className=''/> {feature}</li>
              ))}
            </ul>
              <button className='bg-white font-semibold text-primary w-full p-4 shadow-md rounded-2xl text-lg'>{plan.btn}</button>
            </div>
          </div>
        ))} 
      </div>
    </>
  )
}

export default Plans
