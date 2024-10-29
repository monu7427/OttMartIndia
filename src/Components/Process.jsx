import React, { useState } from 'react';

const Process = () => {
  const copyUPI = () => {
    const upiID = 'streamnation@ybl';
    navigator.clipboard.writeText(upiID);
    const Btn = document.getElementById('Copy');
    const upi = document.getElementById('Upi');
    Btn.innerText = "Copied";
    upi.style.color = "#047857"; // Change color when copied
  };

  return (
    <div className="w-full bg-gray-900 text-white py-12">
      <h2 className="text-4xl font-bold mb-8 text-center text-orange-500">Process to Buy Subscription</h2>
      <div className="max-w-lg mx-auto p-8 bg-gray-800 rounded-lg shadow-xl border border-orange-400">
        <ol className="list-decimal pl-6 mb-6">
          <li className="text-white mb-2">Select the subscription you want.</li>
          <li className="text-white mb-2">Pay using my UPI ID.</li>
          <li className="text-white mb-2">After payment, I will activate your account or provide the ID and password via email or number.</li>
          <li className='bg-gray-700 text-green-400 rounded-md p-2'>You can also contact me if you have any queries.</li>
        </ol>
        <div className="flex items-center mb-4 bg-gray-700 p-4 rounded-md shadow-md">
          <p className="text-sm mr-2 text-white font-mono">UPI ID:</p>
          <div className='bg-slate-600 flex rounded-lg items-center p-2'>
            <p id='Upi' className="text-lg text-white font-mono">{'ti9549@ybl'}</p>
            <button onClick={copyUPI}
              id='Copy' className={`bg-orange-500 text-white ml-2 px-3 py-1 rounded hover:bg-orange-400 focus:outline-none transition duration-200`}>
              Copy
            </button>
          </div>
        </div>

        <div className="mt-6 flex justify-center">
          <button onClick={() => window.location.href = 'https://wa.me/8875867661'} className="bg-orange-500 text-white px-6 py-3 rounded-md shadow-lg hover:bg-orange-400 focus:outline-none transition duration-200">
            Get Deal on WhatsApp
          </button>
        </div>
      </div>
    </div>
  );
};

export default Process;
