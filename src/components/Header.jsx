import React from 'react'

const Header = () => {
  return (
    <div className='container m-auto flex justify-center mt-4'>

      <div className='header flex align-center justify-between p-4 w-full'>
        <div>
          <p className='text-4xl font-bold text-primary'>Biccas</p>          
        </div>
        <div className='flex justify-between w-96 text-secondary'>
          <a href="#" className='text-black'>Home</a>
          <a href="#">Product</a>
          <a href="#">FAQ</a>
          <a href="#">Blog</a>
          <a href="#">About Us</a>
        </div>
        <div className='flex justify-between w-32 text-secondary'>
          <button>Login</button>
          <button className='bg-primary p-2 text-[#F8F8FA] rounded-lg'>Sign Up</button>
        </div>
      </div>
    </div>
  )
}

export default Header
