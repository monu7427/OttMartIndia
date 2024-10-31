import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { products } from './ApiData';
import { Helmet } from 'react-helmet';
import { FaThLarge, FaTh, FaList, FaMobileAlt } from 'react-icons/fa';

const OurProduct = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [viewStyle, setViewStyle] = useState('grid'); // State for selected view style

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    setFilteredProducts(
      products.filter(product =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  }, [searchTerm]);

  return (
    <>
      <Helmet>
        <title>Our Services - OTTMartIndia</title>
        <meta name="description" content="Explore our affordable OTT (Over-The-Top) services and software subscriptions. Get access to a wide range of entertainment and productivity tools at discounted rates." />
        <meta name="keywords" content="OTT, Over-The-Top, streaming, software, subscription, cheap, affordable, entertainment, productivity, services" />
        <meta name="author" content="Manoj Sharma" />
        <meta name="robots" content="index, follow" />
      </Helmet>

      <section className="container mx-auto py-16 mb-4 bg-orange-100">
        <h2 className="text-4xl font-bold mb-8 bg-orange-600 text-white p-6 text-center rounded-lg shadow-lg">Our Subscriptions</h2>
        
        {/* Search and View Options */}
        <div className="mb-8 flex justify-center items-center gap-4">
          <input
            type="text"
            placeholder="Search services..."
            className="border rounded-full p-3 md:w-1/2 w-full bg-white text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition duration-200"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          {/* Dropdown for view styles */}
          <select
            onChange={(e) => setViewStyle(e.target.value)}
            className="px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 flex items-center gap-2"
          >
            <option value="grid">
              <FaTh className="inline mr-2" /> Grid View
            </option>
            <option value="list">
              <FaList className="inline mr-2" /> List View
            </option>
            <option value="large">
              <FaThLarge className="inline mr-2" /> Large View
            </option>
            <option value="medium">
              <FaMobileAlt className="inline mr-2" /> Medium View
            </option>
          </select>
        </div>

        {/* Products Display */}
        <div
          className={
            viewStyle === 'grid'
              ? 'grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-6'
              : viewStyle === 'list'
              ? 'flex flex-col gap-4 px-6'
              : viewStyle === 'large'
              ? 'grid grid-cols-1 sm:grid-cols-2 gap-6 px-6'
              : 'grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-6 px-6' // Medium view
          }
        >
          {filteredProducts.map(product => (
            <Link to={`/product/${product.id}`} key={product.id} className="text-black">
              <div
                className={`border rounded-lg p-4 bg-white shadow-md transition-transform transform hover:scale-105 cursor-pointer hover:shadow-lg h-full ${
                  viewStyle === 'large' ? 'flex flex-col items-center text-center' : ''
                } ${viewStyle === 'list' ? 'flex items-center gap-4' : ''}`}
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className={`rounded-lg shadow-sm ${
                    viewStyle === 'large' ? 'w-48 h-48 object-cover mb-4' : 'w-full h-32 object-contain mb-2'
                  }`}
                />
                <div className={viewStyle === 'list' ? 'flex flex-col' : ''}>
                  <h3 className="text-lg font-semibold mb-1 hover:text-orange-600 transition duration-300">
                    {product.name}
                  </h3>
                  <p
                    className={
                      product.availability === 'available'
                        ? 'text-green-600 mb-1'
                        : 'text-red-600 mb-1'
                    }
                  >
                    {product.availability}
                  </p>
                  <div className="flex items-center justify-between mt-2">
                    <p className="text-gray-600 text-sm">Starting From</p>
                    <p className="text-orange-600 font-bold text-lg">{product.price}&#8377;</p>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
};

export default OurProduct;
