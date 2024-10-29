import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { products } from './ApiData';
import { Helmet } from 'react-helmet';

const OurProduct = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredProducts, setFilteredProducts] = useState(products);

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
        <div className="mb-8 flex justify-center">
          <input
            type="text"
            placeholder="Search services..."
            className="border rounded-full p-3 md:w-1/2 w-full mx-7 bg-white text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition duration-200"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 ml-6 mr-6">
          {filteredProducts.map(product => (
            <Link to={`/product/${product.id}`} key={product.id} className="text-black">
              <div className="border rounded-lg p-4 bg-white shadow-md transition-transform transform hover:scale-105 cursor-pointer hover:shadow-lg h-full">
                <img src={product.image} alt={product.name} className="w-full h-32 object-contain mb-2 rounded-lg shadow-sm" />
                <h3 className="text-lg font-semibold mb-1 hover:text-orange-600 transition duration-300">{product.name}</h3>
                <p className={product.availability === 'available' ? 'text-green-600 mb-1' : 'text-red-600 mb-1'}>
                  {product.availability}
                </p>
                <div className="flex items-center justify-between mt-2">
                  <p className="text-gray-600 text-sm">Starting From</p>
                  <p className="text-orange-600 font-bold text-lg">{product.price}&#8377;</p>
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
