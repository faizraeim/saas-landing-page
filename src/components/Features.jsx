import React from 'react';
import Img1 from '../assets/collb.png';
import Img2 from '../assets/storage.png';
import Img3 from '../assets/daily.png';
import { Link } from 'react-router-dom';

const Features = () => {
  return (
    <div>
      {/* Header section */}
      <div className='container mx-auto flex flex-col lg:flex-row items-center mt-10 p-8 md:p-12 lg:p-20 gap-8 md:gap-12 lg:gap-16 w-full justify-between text-center lg:text-left'>
        <h1 className='text-4xl lg:text-6xl leading-tight font-semibold lg:w-sm'>
          Our Features you can get
        </h1>
        <div className='flex flex-col lg:flex-row items-center gap-8 md:gap-12 lg:gap-16'>
          <p className='text-secondary text-base lg:text-lg lg:w-2xl'>
            We offer a variety of interesting features that you can help increase your productivity at work and manage your project easily
          </p>
          <Link to="login" className='text-white px-6 py-4 rounded-full bg-primary'>
            Get Started
          </Link>
        </div>
      </div>

      {/* Features grid */}
      <div className='container mx-auto flex flex-col md:flex-row items-center mb-20 p-8 md:p-12 lg:p-20 gap-8 md:gap-16 w-full justify-center'>
        {/* Feature 1 */}
        <div className='flex flex-col items-center md:items-start gap-6 text-center md:text-left max-w-sm'>
          <img src={Img1} alt="Collaboration" className="w-full h-auto" />
          <h1 className='text-xl md:text-2xl lg:text-3xl font-semibold'>Collaboration Teams</h1>
          <p className='text-lg text-secondary leading-8'>Here you can handle projects together with team virtually</p>
        </div>
        {/* Feature 2 */}
        <div className='flex flex-col items-center md:items-start gap-6 text-center md:text-left max-w-sm'>
          <img src={Img2} alt="Cloud storage" className="w-full h-auto" />
          <h1 className='text-xl md:text-2xl lg:text-3xl font-semibold'>Cloud Storage</h1>
          <p className='text-lg text-secondary leading-8'>No need to worry about storage because we provide storage up to 2 TB</p>
        </div>
        {/* Feature 3 */}
        <div className='flex flex-col items-center md:items-start gap-6 text-center md:text-left max-w-sm'>
          <img src={Img3} alt="Daily analytics" className="w-full h-auto" />
          <h1 className='text-xl md:text-2xl lg:text-3xl font-semibold'>Daily Analytics</h1>
          <p className='text-lg text-secondary leading-8'>We always provide useful information to make it easier for you every day</p>
        </div>
      </div>
    </div>
  );
};

export default Features;
