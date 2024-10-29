import React, { useState, useEffect } from 'react';
import { FiCopy, FiCheck } from 'react-icons/fi';

// Coupon data stored in a JSON-like structure
const couponData = [
  {
    id: 'stream5',
    code: 'OTT10%',
    description: '10% off on orders above ₹2500/-',
    terms: [
      'Valid for all users.',
      'Applicable to all OTT subscriptions available on OttMartIndia.',
      'Offer is valid until the end of the month.',
    ],
  },
];

const CouponCode = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, []);

  const [copied, setCopied] = useState({ stream5: false });

  const copyCouponCode = (codeKey) => {
    const coupon = couponData.find((c) => c.id === codeKey);
    if (coupon) {
      navigator.clipboard.writeText(coupon.code).then(() => {
        setCopied((prevCopied) => ({ ...prevCopied, [codeKey]: true }));
        setTimeout(() => {
          setCopied((prevCopied) => ({ ...prevCopied, [codeKey]: false }));
        }, 2000);
      }).catch(err => {
        console.error('Failed to copy: ', err);
      });
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-orange-500 to-orange-600 p-4">
      {couponData.map((coupon) => (
        <div key={coupon.id} className="bg-white text-gray-800 p-8 rounded-lg shadow-lg text-center max-w-md w-full mb-6">
          <h1 className="text-3xl font-bold mb-4">Welcome to OttMartIndia!</h1>
          <p className="text-lg mb-2">Use this coupon code to enjoy a fantastic discount!</p>
          <p id="coupon-code" className="text-4xl font-bold tracking-wide mb-4">{coupon.code}</p>
          <p className="text-md mb-4">{coupon.description}</p>
          <div className="flex justify-center">
            <button
              onClick={() => copyCouponCode(coupon.id)}
              className="flex items-center justify-center bg-orange-600 text-white px-4 py-2 rounded hover:bg-orange-700 transition relative group"
            >
              <FiCopy className={`mr-2 ${copied[coupon.id] ? 'hidden' : 'block'}`} />
              <FiCheck className={`mr-2 ${copied[coupon.id] ? 'block' : 'hidden'}`} />
              {copied[coupon.id] ? 'Copied!' : 'Copy Code'}
              <span className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-full bg-gray-800 text-white text-sm rounded py-1 px-2 opacity-0 group-hover:opacity-100 transition-opacity">
                Click to copy
              </span>
            </button>
          </div>
        </div>
      ))}
      <div className="bg-white text-gray-800 p-4 rounded-lg shadow-lg text-center max-w-md w-full">
        <h2 className="text-xl font-bold mb-2">Terms and Conditions</h2>
        {couponData[0].terms.map((term, index) => (
          <p key={index} className="text-sm mb-1">{term}</p>
        ))}
      </div>
    </div>
  );
};

export default CouponCode;
