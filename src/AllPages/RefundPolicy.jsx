import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { useEffect } from 'react';

const RefundPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0); 
  }, []); 

  return (
    <>
      <Helmet>
        <title>Refund Policy - OttMartIndia</title>
        <meta name="description" content="Discover the refund policy of OttMartIndia. Understand the terms for refunds on purchases made through our platform." />
        <meta name="keywords" content="OttMartIndia, refund policy, returns, refunds, terms and conditions" />
        <meta name="author" content="Manoj Sharma" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Refund Policy - OttMartIndia" />
        <meta property="og:description" content="Discover the refund policy of OttMartIndia. Understand the terms for refunds on purchases made through our platform." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ottmartindia.xyz/refund-policy" />
        <meta name="twitter:title" content="Refund Policy - OttMartIndia" />
        <meta name="twitter:description" content="Discover the refund policy of OttMartIndia. Understand the terms for refunds on purchases made through our platform." />
      </Helmet>

      <div className="bg-orange-100 p-6 rounded-lg shadow-lg my-9">
        <h1 className="text-3xl font-bold mb-4 text-center text-orange-800">Refund Policy</h1>
        <p className="mb-4 text-gray-700">
          At OttMartIndia, we prioritize customer satisfaction and have implemented a straightforward refund policy. If you do not receive your account details within 15 hours after payment, you qualify for a complete refund. However, refunds cannot be processed once the account credentials have been sent to you. We are committed to providing high-quality service and timely delivery to ensure you have an excellent experience with us. Should you have any inquiries or concerns, please reach out to our customer service team, who are always ready to assist you.
        </p>
        <div className="text-center">
          <button className="bg-orange-600 text-white py-2 px-4 rounded-lg hover:bg-orange-700 transition duration-300 ease-in-out">
            <Link to="/Contact">Contact Us</Link>
          </button>
        </div>
      </div>
    </>
  );
};

export default RefundPolicy;
