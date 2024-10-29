import React, { useState } from 'react';

const reviews = [
    {
        name: "Rohan Verma",
        review: `OttMartIndia is fantastic! I was skeptical at first, but the service is top-notch. 
        I got my Netflix subscription within minutes. Highly recommend!`,
        rating: 5
    },
    {
        name: "Sneha Patel",
        review: `The process was smooth, and I received my Disney+ subscription quickly. 
        Great service and very trustworthy. Will buy again!`,
        rating: 4
    },
    {
        name: "Vikram Singh",
        review: `I’ve been using OttMartIndia for a year now. The service is consistent and reliable. 
        No issues with my subscriptions at all!`,
        rating: 5
    },
    {
        name: "Meera Iyer",
        review: `Purchased a subscription for Amazon Prime. Initially faced some delays, 
        but customer service was helpful and resolved my issue promptly. Good experience overall.`,
        rating: 4
    },
    {
        name: "Nitin Kumar",
        review: `Absolutely satisfied! This service is legit, and the support team is fantastic. 
        I recommend it to all my friends!`,
        rating: 5
    },
    {
        name: "Anita Desai",
        review: `Quick service! I received my Hulu account in no time. 
        Excellent communication throughout the process. Very happy!`,
        rating: 5
    },
    {
        name: "Rajesh Gupta",
        review: `I was a bit worried at first, but OttMartIndia has proven to be a genuine service provider. 
        Great value for money!`,
        rating: 5
    },
    {
        name: "Pooja Shah",
        review: `I have tried other services before, but none compare to OttMartIndia. 
        Fast delivery and reliable service. Keep it up!`,
        rating: 4
    },
    {
        name: "Karan Bansal",
        review: `Very good service! I was amazed by the speed of delivery for my subscription. 
        Will definitely use OttMartIndia again!`,
        rating: 5
    }
];

const Review = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextReview = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
    };

    const prevReview = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + reviews.length) % reviews.length);
    };

    return (
        <>
            <h1 className='bg-orange-500 text-white text-center w-full p-4 text-3xl font-bold'>Customer Reviews</h1>
            <div className="flex flex-col items-center justify-center py-12 bg-gradient-to-r from-orange-100 to-orange-200">
                <div className="w-full max-w-xl p-8">
                    <div className="bg-white p-6 rounded-lg shadow-xl transition-transform transform hover:scale-105">
                        <h3 className="text-2xl font-semibold mb-2 text-orange-600">{reviews[currentIndex].name}</h3>
                        <p className="mb-2 text-gray-700">{reviews[currentIndex].review}</p>
                        <p className="mb-4 text-lg text-orange-600">
                            Rating: {'★'.repeat(reviews[currentIndex].rating) + '☆'.repeat(5 - reviews[currentIndex].rating)}
                        </p>
                    </div>
                    <div className="flex justify-between mt-6">
                        <button 
                            className="bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-400 transition duration-200"
                            onClick={prevReview}
                        >
                            Previous
                        </button>
                        <button 
                            className="bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-400 transition duration-200"
                            onClick={nextReview}
                        >
                            Next
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Review;
