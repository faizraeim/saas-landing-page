import React from 'react'
import {TestimonialsData, FooterData, FormData, FooterLinks, CopyrightData} from '../data/data'
import { RiDoubleQuotesL, RiMoneyDollarCircleFill, RiPlayCircleLine } from '@remixicon/react'

const Footer = () => {
  return (
    <>
  {/* upon zoom in our out every div should be in the center */}
      <div className='bg-midnight text-white p-10 m-auto flex justify-center items-center flex-col'>
        <div className='flex justify-between items-center'>
        <div className='w-1/2'>
          {/* testimonials */}
          <h2 className='text-5xl font-semibold w-100 leading-tight'>{TestimonialsData[0].title}</h2>
          <p className='text-secondary w-120 text-lg leading-normal my-7'>{TestimonialsData[0].desc}</p>
          <RiDoubleQuotesL size={70} color='lightgray'/>
          <div>
            {TestimonialsData[0].thoughts.map((thought) => (
              <div key={thought.id}>
                <p className='text-secondary w-120 text-lg leading-normal'>{thought.comment}</p>
                <h3 className=' text-secondary text-lg my-8'>_ {thought.name}</h3>
                <div className=' flex flex-row gap-4 items-center'>
                  {thought.img.map((img, index) => (
                    <img key={index} src={img} alt={thought.name} className='rounded-full w-20 h-20 object-cover' />
                  ))}
                  <button className=''><RiPlayCircleLine size={90} /></button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className='w-1/2 bg-[#222938] rounded-xl p-10 m-5 flex flex-col justify-center items-center'>
          {/* form */}
          <i><RiMoneyDollarCircleFill size={100} className='text-primary' /></i>
          <h2 className='text-3xl '>{FormData[0].title}</h2>
          <div className='flex flex-col w-full my-5'>
            <label className='text-lg mb-4'>{FormData[0].label[0]}</label>
            <input className='bg-white placeholder:text-secondary p-3 rounded-md text-sm mb-4 w-md' type="text" placeholder={FormData[0].placeholder[0]} />

            <label className='text-lg mb-4'>{FormData[0].label[1]}</label>
            <textarea className='bg-white placeholder:text-secondary p-5 rounded-md text-sm  w-md' placeholder={FormData[0].placeholder[1]}></textarea>
          </div>
          <button className='w-md bg-primary p-4 rounded-md cursor-pointer'><a href="https://www.google.com" target='_blank'>{FormData[0].btn}</a> </button>
          <a className='text-sm m-2 cursor-pointer' href='https://www.google.com' target='_blank'>{FormData[0].link}</a>
        </div>
        </div>
       
        <div className='flex justify-between items-start my-10'>
          <div className='w-1/3'>
            {/* footer data */}
            <h2>{FooterData[0].logo}</h2>
            <p>{FooterData[0].desc}</p>
            <input type="text" placeholder={FooterData[0].placeholder} />
            <button>{FooterData[0].btn}</button>
          </div>
          <div className='w-2/3 flex justify-between'>
            {/* footer links */}
            {FooterLinks.map((section) => (
              <div key={section.id}>
                <h3>{section.title}</h3>
                <ul>
                  {section.links.map((link, index) => (
                    <li key={index}>{link}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
          <div>
            {/* copyrights */}
            <p>{CopyrightData[0].text}</p>
            <p>{CopyrightData[0].terms}</p>
          </div>
        
      </div>

    </>
  )
}

export default Footer
