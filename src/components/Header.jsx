// src/components/Header.jsx
import React, { useState } from 'react';
import { HiMenu, HiX } from 'react-icons/hi';
import { NavbarData } from '../data/data'; // Import your data
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className='bg-transparent'>
      <div className='container mx-auto px-4 py-4 md:flex justify-between items-center'>
        {/* Header content and mobile menu button */}
        <div className='flex justify-between items-center w-full md:w-auto'>
          {/* Logo */}
          <div className='flex justify-start w-full md:w-auto'>
            <Link to="/">
              <p className='text-4xl font-bold text-primary cursor-pointer text-center'>{NavbarData.logo}</p>
            </Link>
          </div>

          {/* Hamburger menu button for mobile */}
          <div className='md:hidden'>
            <button
              onClick={toggleMenu}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
              aria-label="Toggle navigation menu"
              className='text-2xl text-secondary'
            >
              {isMenuOpen ? <HiX size={28} /> : <HiMenu size={28} />}
            </button>
          </div>
        </div>

        {/* Desktop Navigation Links (hidden on mobile, visible on md+) */}
        <div className='hidden md:flex flex-grow justify-center w-96 text-secondary space-x-8'>
          {NavbarData.links.map((item) => (
           <Link key={item.id} to={item.path} className='hover:text-primary transition-colors cursor-pointer'>
              {item.link}
            </Link>
          ))}
        </div>

        {/* Desktop Buttons (hidden on mobile, visible on md+) */}
        <div className='hidden md:flex items-center space-x-4 '>
         <Link to="login"> <button className='text-secondary hover:text-primary transition-colors cursor-pointer'>
            {NavbarData.buttons[0]}
          </button></Link>
         <Link to="signup"><button className='bg-primary p-2 text-[#F8F8FA] rounded-lg hover:bg-opacity-80 transition-colors cursor-pointer'>
            {NavbarData.buttons[1]}
          </button></Link> 
        </div>
      </div>

      {/* Mobile Menu (conditionally shown on mobile) */}
      <div
        id="mobile-menu"
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className='flex flex-col items-center bg-white py-4 shadow-md text-center'>
          {NavbarData.links.map((item) => (
            <Link
              key={item.id}
              to={item.path}
              onClick={toggleMenu}
              className='w-full text-center py-3 text-secondary hover:bg-gray-100'
            >
              {item.link}
            </Link>
          ))}

          <div className='mt-4 w-full flex flex-col items-center space-y-2 px-4 font-semibold'>
            <Link to="login" className='w-full content-center py-2 text-secondary border rounded-lg hover:bg-gray-100 text-center' onClick={toggleMenu}>
              {NavbarData.buttons[0]}
            </Link>
            <Link to="signup" className='w-full py-2 bg-primary text-[#F8F8FA] rounded-lg hover:bg-opacity-80 text-center ' onClick={toggleMenu}>
              {NavbarData.buttons[1]}
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
