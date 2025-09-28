import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { products } from '../data/data'; // Assuming products are in data.js
import Header from './Header';
import Footer from './Footer';
import { RiCheckLine } from '@remixicon/react';

const ProductPage = () => {
  const { id } = useParams();

  // Scroll to top when page loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  // The id from useParams is a string, so we use parseInt for comparison
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return <div>Product not found!</div>;
  }

  // Render the detailed product information
  return (
    <>
    <Header />
    <div className="product-page m-auto mt-20 flex justify-center items-center flex-col ">
     <i className='text-primary my-4'><product.icon size={70} /></i>
      <h1 className='product-title text-3xl font-semibold mb-4'>{product.name}</h1>
      <p className='product-desc text-secondary text-lg mb-4'>{product.description}</p>
      <h3 className='text-lg mb-2'>Features</h3>
      <ul>
        {product.features.map((feature, index) => (
          <li key={index} className='product-feature flex items-center gap-2 text-gray-500'><RiCheckLine color='#54bd95'/> {feature}</li>
        ))}
      </ul>
      <p className='mb-20 mt-4'>Included in: {product.includedIn.join(', ')}</p>

    </div>
    <Footer />
    </>
  );
};

export default ProductPage;
