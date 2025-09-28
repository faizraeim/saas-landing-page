import React from 'react'
import { TestimonialsData, FooterData, FooterLinks, CopyrightData, FormData } from '../data/data'
import { RiArrowRightLine, RiDoubleQuotesL, RiMoneyDollarCircleFill, RiPlayCircleLine } from '@remixicon/react'

const Footer = () => {
  return (
   
   <>
      <div className='bg-midnight text-white p-8 md:p-10 w-full'>
        <div className='container mx-auto w-full'>
        {/* Testimonials and Form Section */}
        <div className='flex flex-col lg:flex-row justify-center items-center gap-10 md:gap-20 my-10'>
          {/* Testimonials */}
          <div className='w-full lg:w-1/2 text-center lg:text-left'>
            <h2 className='text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight'>{TestimonialsData[0].title}</h2>
            <p className='text-secondary text-base md:text-lg leading-normal my-5 md:my-7 max-w-lg mx-auto lg:mx-0'>{TestimonialsData[0].desc}</p>
            <RiDoubleQuotesL size={70} color='lightgray' className='mx-auto lg:mx-0' />
            <div>
              {TestimonialsData[0].thoughts.map((thought) => (
                <div key={thought.id}>
                  <p className='text-secondary text-base md:text-lg leading-normal max-w-lg mx-auto lg:mx-0'>{thought.comment}</p>
                  <h3 className='text-secondary text-base md:text-lg my-4 md:my-8'>_ {thought.name}</h3>
                  <div className='flex flex-row gap-4 items-center justify-center lg:justify-start'>
                    {thought.img.map((img, index) => (
                      <img key={index} src={img} alt={thought.name} className='rounded-full w-16 h-16 md:w-20 md:h-20 object-cover' />
                    ))}
                    <button>
                      <RiPlayCircleLine size={90} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Form */}
          <div className='w-full lg:w-1/2 bg-[#222938] rounded-xl p-8 md:p-10 flex flex-col justify-center items-center'>
            <RiMoneyDollarCircleFill size={80} className='text-primary' />
            <h2 className='text-2xl md:text-3xl'>{FormData[0].title}</h2>
            <div className='flex flex-col w-full my-5'>
              <label className='text-base md:text-lg mb-2'>{FormData[0].label[0]}</label>
              <input className='bg-white placeholder:text-secondary p-3 rounded-md text-sm mb-4 w-full' type="text" placeholder={FormData[0].placeholder[0]} />

              <label className='text-base md:text-lg mb-2'>{FormData[0].label[1]}</label>
              <textarea className='bg-white placeholder:text-secondary p-5 rounded-md text-sm w-full' placeholder={FormData[0].placeholder[1]}></textarea>
            </div>
            <button className='w-full bg-primary p-4 rounded-md cursor-pointer'>
              <a href="login" target='' rel='noreferrer'>{FormData[0].btn}</a>
            </button>
            <a className='text-sm m-2 cursor-pointer' href='login' target='' rel='noreferrer'>{FormData[0].link}</a>
          </div>
        </div>

        {/* Footer Links and Copyright */}
        <div className='flex flex-col lg:flex-row justify-between items-center lg:items-start my-10 lg:my-20 gap-10 lg:gap-0'>
          <div className='w-full lg:w-1/3 text-center lg:text-left'>
            <h2 className='text-6xl font-semibold text-primary'>{FooterData[0].logo}</h2>
            <p className='text-secondary my-6 text-xl'>{FooterData[0].desc}</p>
            
            <div className='flex flex-col sm:flex-row gap-2 sm:gap-4 relative w-full'>
              <input type="text" placeholder={FooterData[0].placeholder} className='bg-transparent border-2 border-secondary placeholder:text-secondary placeholder:text-lg p-4 rounded-full text-sm w-full' />
              <button className='bg-primary text-white rounded-full w-auto p-2 h-auto absolute right-2 top-1/2 -translate-y-1/2 flex items-center justify-center'><RiArrowRightLine size={25}/> {FooterData[0].btn}</button>
            </div>
          </div>
          <div className='w-full lg:w-2/4 flex flex-col sm:flex-row justify-between text-center lg:text-lg lg:text-left gap-8 md:gap-12'>
            {FooterLinks.map((section) => (
              <div key={section.id}>
                <h3 className='text-lg font-bold mb-4'>{section.title}</h3>
                <ul>
                  {section.links.map((link, index) => (
                    <li key={index} className='text-secondary mb-2 hover:text-white transition-colors duration-200 cursor-pointer'>{link}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className='text-center font-semibold pt-8 flex flex-row gap-4 items-center justify-around '>
          <p className=''>{CopyrightData[0].text}</p>
          <p className=' mt-2'>{CopyrightData[0].terms}</p>
        </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
