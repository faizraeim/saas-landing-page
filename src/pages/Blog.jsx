import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { blogPosts } from '../data/data'
// import { RiCheckLine } from '@remixicon/react'
// import { Link } from 'react-router-dom'

const Blog = () => {
  return (
    <>
    <Header />

      <div className=' w-screen bg-primary/20 h-100 text-black text-center flex flex-col items-center justify-center py-16 px-4 md:px-8 lg:px-16'>
        <h1 className='text-6xl font-semibold mb-8 '>Blog</h1>
        <p className='text-lg text-gray-500 mb-4'>Welcome to our blog! Here you'll find the latest news and updates.</p>
      </div>
      <div className='w-3/4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mx-auto px-4 md:px-8 lg:px-16 py-12'>
        {/* Blog post cards go here */}
        {blogPosts.map((post) => (
          <div key={post.id} className='bg-white shadow-lg rounded-lg p-6'>
            <img src={post.image} alt={post.title} className='w-full h-48 object-cover rounded-md mb-4' />
            <h2 className='text-2xl font-semibold mb-2'>{post.title}</h2>
            <p className='text-gray-600 text-sm mb-4'>By {post.author} on {post.date}</p>
            <p className='text-gray-700 mb-4'>{post.excerpt}</p>
            <p className='text-gray-900 mb-4'>{post.summary}</p>
            {/* {post.tags.map((tag, index) => (
              <span key={index} className='inline-block bg-gray-200 text-gray-800 text-xs px-2 py-1 rounded-full mr-2'>{tag}</span>
            ))} */}

            {/* <br /> */}


            <a href={post.link} className='text-primary hover:underline cursor-pointer'>Read more</a>
          </div>
        ))}
      </div>
      <div className='my-12'>
      <Footer />
      </div>
    </>
  )
}

export default Blog
