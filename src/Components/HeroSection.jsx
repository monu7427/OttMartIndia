import React from 'react';

export default function HeroSection() {
  const whatsappNumber = "8875867661";
  const whatsappLink = `https://wa.me/${whatsappNumber}?text='Hello! I came across your website and I'm curious to learn more. Could you provide additional information?'`;

  return (
    <div className="relative">
      {/* Hero Section */}
      <div
        className="relative bg-cover bg-center"
        style={{ 
          backgroundImage: "url('https://selectra.in/sites/selectra.in/files/2024-03/fiber_internet_0.png')", 
          height: "calc(100vh - 64px)" 
        }}
      >
        <div className="absolute inset-0 bg-black" style={{ opacity: 0.5 }}></div>
        <div className="relative z-10 flex items-center justify-center h-full text-white">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-3">Unleash Unlimited Entertainment with OttMartIndia</h1>
            <h4 className="text-lg md:text-xl mb-3">Embark on a journey of non-stop entertainment with OttMartIndia! Dive into a world of blockbuster movies, binge-worthy TV series, and captivating documentaries. Our OTT subscription service offers premium content at unbeatable prices, ensuring you never miss out on your favorite shows and movies. Elevate your streaming experience with OttMartIndia today!</h4>
            <a href={whatsappLink} className="inline-block px-6 py-3 bg-orange-500 text-white rounded-full hover:bg-orange-400 transition duration-300">Get Started</a>
          </div>
        </div>
      </div>
    </div>
  );
}
