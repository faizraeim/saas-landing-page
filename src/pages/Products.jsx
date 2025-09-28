import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { products } from '../data/data'
import { RiCheckLine } from '@remixicon/react'
import { Link } from 'react-router-dom'

const Products = () => {
  return (
    <>
    <Header />
     <div className=' w-screen bg-primary/20 h-100 text-black text-center flex flex-col items-center justify-center py-16 px-4 md:px-8 lg:px-16'>
        <h1 className='text-6xl font-semibold mb-8 '>Explore Our Products</h1>
        <p className='text-lg text-gray-500 mb-4'>See what tools and modules Taskio offers to help you stay organized, collaborate better, and make data-driven decisions.</p>
      </div>
      <section className='product-section flex justify-between bg-gray-50 '>
      <div className="m-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 md:px-8 lg:px-16 py-12 ">
        {products.map((product) => (
          <div className="product-card bg-white shadow-lg/10 w-sm p-8 max-w-7xl rounded-lg text-center flex flex-col items-center justify-between" key={product.id}>
            <i className='text-primary my-4'><product.icon size={70} /></i>
            <h3 className='product-title text-3xl font-semibold mb-4'>{product.name}</h3>
            <p className='product-desc text-secondary text-lg mb-4'>{product.description}</p>
            <div className=' mb-6 text-lg text-gray-500'>
            {product.features.map((feature, index) => (
              <p key={index} className='product-feature flex items-center gap-2 ' ><RiCheckLine color='#54bd95'/> {feature}</p>
            ))}
            </div>
           <Link to={`/product/${product.id}`} className='w-auto text-lg text-white bg-primary rounded-lg py-2 px-6 font-semibold border border-transparent hover:border-primary hover:bg-white hover:text-primary transition-colors cursor-pointer'>Learn More</Link>
           
          </div>
          
        ))}
      </div>
    </section>
      <Footer />
    </>
  )
}

export default Products
