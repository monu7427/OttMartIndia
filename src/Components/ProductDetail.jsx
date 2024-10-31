import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { products } from './ApiData';
import { Helmet } from 'react-helmet';
import Process from './Process';

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find(p => p.id === parseInt(id, 10)); // Parse the ID to base 10
  const [selectedDuration, setSelectedDuration] = useState(Object.keys(product.subPrices)[0]); // Default to the first available duration

  const handleDurationChange = (duration) => {
    setSelectedDuration(duration);
  };

  const whatsappMessage = `Good day! I'm interested in purchasing ${product.name} for ${selectedDuration} at a rate of ${product.subPrices[selectedDuration]}/- each (as seen on the website). Could you please provide further details? Thank you.`;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!product) {
    return (
      <div className="container mx-auto py-16">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">Product not found</h2>
          <Link to="/products" className="text-blue-500 hover:underline">Back to Products</Link>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="md:flex items-start justify-center py-12 2xl:px-20 md:px-6 px-4 bg-gray-100">
        <Helmet>
          <title>{product.name}</title>
          <meta name="description" content="Explore our affordable OTT (Over-The-Top) services and software subscriptions. Get access to a wide range of entertainment and productivity tools at discounted rates." />
          <meta name="keywords" content="OTT, Over-The-Top, streaming, software, subscription, cheap, affordable, entertainment, productivity, services" />
          <meta name="author" content="Manoj Sharma" />
          <meta name="robots" content="index, follow" />
        </Helmet>
        <div className="xl:w-2/6 lg:w-2/5 w-full md:w-auto">
          <img className="w-full h-auto rounded-lg shadow-lg transform transition-transform duration-200 hover:scale-105" alt={product.name} src={product.image} />
        </div>

        <div className="xl:w-2/5 md:w-1/2 lg:ml-8 md:ml-6 md:mt-0 mt-6 bg-white rounded-lg shadow-lg p-6 border border-orange-400">
          <div className="border-b border-gray-200 pb-6">
            <p className="text-sm leading-none text-orange-600">Service Category</p>
            <h1 className="lg:text-2xl text-xl font-semibold leading-7 text-gray-800 mt-2">{product.name}</h1>
            <p className={product.availability === 'available' ? 'text-green-600 mb-2' : 'text-red-600 mb-2'}>
              {product.availability}
            </p>
          </div>
          <div className="py-4 border-b border-gray-200 flex items-center justify-between">
            <p className="text-lg leading-4 text-gray-800">Price</p>
            <p className="text-2xl leading-none text-orange-600 font-bold">{product.subPrices[selectedDuration]}&#8377;</p>
          </div>
          <div className="py-4 border-b border-gray-200 flex items-center justify-between">
            <p className="leading-4 text-gray-800 text-lg">Select Duration</p>
            <div>
              <select className="text-lg px-4 py-2 border border-orange-300 rounded-md focus:outline-none focus:ring focus:ring-orange-200" value={selectedDuration} onChange={(e) => handleDurationChange(e.target.value)}>
                {Object.keys(product.subPrices).map(duration => (
                  <option key={duration} value={duration}>{duration}</option>
                ))}
              </select>
            </div>
          </div>
          <div className="py-4 border-b border-gray-200">
            <p className="leading-4 text-gray-800 text-lg">Description</p>
            <p className="text-base leading-none text-gray-600 p-6">{product.description}</p>
          </div>
          <Link
            to={`https://wa.me/918875867661?text=${encodeURIComponent(whatsappMessage)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full text-center bg-orange-600 text-white font-bold py-4 rounded hover:bg-orange-500 mt-6 transition-colors duration-200"
          >
            Buy Now
          </Link>
          <div className="py-4">
            <p className="text-base leading-4 text-gray-600 mt-4">Service Code: <span className="font-semibold">{product.id}</span></p>
          </div>
        </div>
      </div>
      <Process />
    </>
  );
};

export default ProductDetail;
