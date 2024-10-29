import React, { useState } from "react";

const faqData = [
    {
        question: "What makes OTTMartIndia the best choice for OTT subscriptions?",
        answer: "OTTMartIndia provides the most budget-friendly OTT subscriptions, giving you access to your favorite streaming platforms without overspending. Our service is designed for convenience and reliability, ensuring you enjoy top-notch entertainment at an affordable price."
    },
    {
        question: "Which payment methods are available?",
        answer: "You can conveniently make payments using UPI ID or by scanning QR codes for secure transactions."
    },
    {
        question: "Is OTTMartIndia's service secure?",
        answer: "Absolutely! OTTMartIndia prioritizes your safety. We ensure a secure environment, and you'll receive your subscription details promptly, usually within minutes."
    },
    {
        question: "How can I start my subscription with OTTMartIndia?",
        answer: "Getting started with your subscription is easy. Just reach out to us with your preferred OTT service and plan, and provide your payment details. We’ll take care of setting it up for you, either on our number or yours, based on your choice."
    },
    {
        question: "Can I use my subscription on my existing account?",
        answer: "Yes, you have the option to set up your subscription on your personal account. Simply share the necessary details, and we'll handle everything, ensuring seamless access to your selected OTT service."
    },
    {
        question: "What should I do if I forget my password?",
        answer: "To recover your password, follow the standard recovery procedure provided by the respective OTT service. If you encounter any challenges, our customer support team is ready to assist you."
    },
    {
        question: "Which OTT services can I access through OTTMartIndia?",
        answer: "OTTMartIndia offers subscriptions for a variety of OTT platforms, including Netflix, Amazon Prime Video, Disney Hotstar, Zee5, Sony Liv, JioCinema, and many more. Feel free to contact us for a comprehensive list of services we support."
    },
    {
        question: "How can I get in touch with customer support?",
        answer: "You can easily contact our customer support team through phone, email, or by using the contact form on our website. We are dedicated to helping you with any inquiries or issues you may have."
    }
];

export default function Faq() {
    const [openIndexes, setOpenIndexes] = useState([]);

    const toggleBox = (index) => {
        setOpenIndexes((prevOpenIndexes) => {
            if (prevOpenIndexes.includes(index)) {
                return prevOpenIndexes.filter((item) => item !== index);
            } else {
                return [...prevOpenIndexes, index];
            }
        });
    };

    return (
        <div className="relative bg-orange-50 pt-16 pb-28">
            <img src="https://i.ibb.co/DQ4FZhL/pattern-bg.png" alt="orange pattern background" className="absolute w-full h-64 md:h-96 object-center object-cover z-0 opacity-30" />
            <div className="relative flex flex-col items-center justify-center z-10">
                <h1 role="heading" className="xl:text-5xl md:text-3xl text-xl font-bold leading-10 text-gray-800 text-center mb-12">
                    Frequently Asked Questions
                </h1>
                <div className="lg:w-1/2 md:w-8/12 sm:w-9/12 w-full">
                    {faqData.map((faq, index) => (
                        <div key={index} className="bg-white shadow-lg rounded-lg p-6 mt-4 cursor-pointer transition-all duration-300 transform hover:scale-105 hover:shadow-xl border-l-4 border-orange-500" onClick={() => toggleBox(index)}>
                            <div className="flex items-center justify-between">
                                <h2 className="text-lg font-semibold leading-none text-gray-800">{faq.question}</h2>
                                <button className="focus:outline-none focus:ring-2 focus:ring-orange-600 focus:ring-offset-2 ring-offset-white cursor-pointer">
                                    {openIndexes.includes(index) ? (
                                        <svg role="button" aria-label="close dropdown" width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M1 5L5 1L9 5" stroke="#4B5563" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    ) : (
                                        <svg width="10" role="button" aria-label="open dropdown" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M1 1L5 5L9 1" stroke="#4B5563" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    )}
                                </button>
                            </div>
                            {openIndexes.includes(index) && (
                                <p className="text-base leading-normal text-gray-600 mt-4">{faq.answer}</p>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
