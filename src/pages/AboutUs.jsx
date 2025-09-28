import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
// import { RiCheckLine } from '@remixicon/react'
import { Link } from 'react-router-dom'

const AboutUs = () => {
  return (
    <>
    <Header />
    <div className=' w-screen bg-primary/20 h-100 text-black text-center flex flex-col items-center justify-center py-16 px-4 md:px-8 lg:px-16'>
        <h1 className='text-6xl font-semibold mb-8 '>About Us</h1>
        <p className='text-lg text-gray-500 mb-4'>Learn more about our mission, vision, and the team behind the product.</p>
      </div>
      <section className='about-section flex justify-between bg-gray-50 '>
      <div className="m-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 md:px-8 lg:px-16 py-12 ">
        <div className="about-card bg-white shadow-lg/10 w-sm p-8 max-w-7xl rounded-lg text-center flex flex-col items-center justify-between">
            <h3 className='about-title text-3xl font-semibold mb-4'>Our Mission</h3>
            <p className='about-desc text-secondary text-lg mb-4'>To empower individuals and teams to achieve more through innovative software solutions.</p>
        </div>
        <div className="about-card bg-white shadow-lg/10 w-sm p-8 max-w-7xl rounded-lg text-center flex flex-col items-center justify-between">
            <h3 className='about-title text-3xl font-semibold mb-4'>Our Vision</h3>
            <p className='about-desc text-secondary text-lg mb-4'>To be the leading provider of productivity tools that transform the way people work and collaborate.</p>
        </div>
        <div className="about-card bg-white shadow-lg/10 w-sm p-8 max-w-7xl rounded-lg text-center flex flex-col items-center justify-between">
            <h3 className='about-title text-3xl font-semibold mb-4'>Our Team</h3>
            <p className='about-desc text-secondary text-lg mb-4'>A diverse group of passionate professionals dedicated to creating exceptional software experiences.</p>
        </div>
      </div>
    </section>
    <div className='my-12'>
    <Footer />
    </div>
      
    </>
  )
}

export default AboutUs
