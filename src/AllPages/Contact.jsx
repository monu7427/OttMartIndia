import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

export default function Contact() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <Helmet>
                <title>Contact - OttMartIndia</title>
                <meta
                    name="description"
                    content="Get in touch with OttMartIndia for affordable OTT subscriptions and streaming services."
                />
                <meta
                    name="keywords"
                    content="OttMartIndia, contact, support, affordable streaming, OTT subscriptions"
                />
                <meta name="author" content="Manoj Sharma" />
                <meta name="robots" content="index, follow" />
                <meta property="og:title" content="Contact - OttMartIndia" />
                <meta
                    property="og:description"
                    content="Get in touch with OttMartIndia for affordable OTT subscriptions and streaming services."
                />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://ottmartindia.xyz/contact" />
                <meta name="twitter:title" content="Contact - OttMartIndia" />
                <meta
                    name="twitter:description"
                    content="Get in touch with OttMartIndia for affordable OTT subscriptions and streaming services."
                />
            </Helmet>

            <div className="py-8 lg:py-12 relative bg-orange-100">
                <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZa3R5Ny5LSCm562EtvKy_zvyQBEYEitP0Sg&s" // Background image
                    className="absolute inset-0 w-full h-full object-cover opacity-30"
                    alt="Background"
                />
                <div className="relative z-10 flex flex-col items-center px-6 lg:px-12 text-center">
                    <h1 className="text-4xl lg:text-5xl font-bold text-gray-800 tracking-wide">Contact Us</h1>
                    <p className="mt-4 text-gray-700 text-lg">Reach out to OttMartIndia for any inquiries about our OTT services.</p>
                </div>
            </div>

            <div className="py-12 px-6 lg:px-20 bg-white">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl font-bold text-gray-800 mb-8">We’re Here to Help</h2>
                    <p className="text-gray-600 mb-8">For inquiries, feedback, or assistance, please get in touch using the contact details below. We're committed to providing quality service and prompt support.</p>
                    <div className="space-y-6">
                        <div>
                            <h3 className="text-orange-600 text-lg font-semibold">Company Name</h3>
                            <p className="text-gray-800">OttMartIndia</p>
                        </div>
                        <div>
                            <h3 className="text-orange-600 text-lg font-semibold">Address</h3>
                            <p className="text-gray-800">Malviya Nagar, Jaipur, Rajasthan, India</p>
                        </div>
                        <div>
                            <h3 className="text-orange-600 text-lg font-semibold">Phone</h3>
                            <p className="text-gray-800">+91 8875867661</p>
                        </div>
                        <div>
                            <h3 className="text-orange-600 text-lg font-semibold">Email</h3>
                            <p className="text-gray-800">ottmartindia@gmail.com</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
