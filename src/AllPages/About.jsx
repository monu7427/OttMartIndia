import React from 'react';
import { Helmet } from 'react-helmet';
import { useEffect } from 'react';

function About() {
  useEffect(() => {
    window.scrollTo(0, 0); 
  }, []); 

  return (
    <>
      <Helmet>
        <title>About-OttMartIndia</title>
        <meta name="description" content="OttMartIndia is your go-to destination for streaming content. Discover the latest movies, TV shows, and more." />
        <meta name="keywords" content="OttMartIndia, cheap ott subscription, streaming, movies, TV shows, entertainment" />
        <meta name="author" content="Manoj Sharma" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="About-OttMartIndia" />
        <meta property="og:description" content="OttMartIndia is your go-to destination for streaming content. Discover the latest movies, TV shows, and more." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ottmartindia.com/about" />
        <meta name="twitter:title" content="About-OttMartIndia" />
        <meta name="twitter:description" content="OttMartIndia is your go-to destination for streaming content. Discover the latest movies, TV shows, and more." />
      </Helmet>

      <div>
        <div className="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4">
          <div className="lg:w-10/12 w-full">
            <p className="font-normal leading-3 text-indigo-700 hover:text-indigo-800 cursor-pointer text-2xl mb-7">About OttMartIndia</p>
            <h2 className="xl:w-8/12 lg:w-10/12 w-full font-bold text-gray-800 lg:text-4xl text-3xl lg:leading-10 leading-9 mt-2">Your Ultimate Destination for Premium OTT Entertainment</h2>
            <p className="font-normal text-base leading-6 text-gray-600 mt-6">OttMartIndia is your one-stop destination for premium OTT entertainment, offering a wide range of exclusive content to satisfy every viewer's craving for top-notch entertainment. Our platform is dedicated to providing high-quality streaming experiences that redefine the way you enjoy your favorite shows and movies.</p>
          </div>

          <div className="lg:mt-14 sm:mt-10 mt-12">
            <img className="lg:block hidden w-full" src="https://selectra.in/sites/selectra.in/files/2022-12/list_of_ott_apps.png" alt="Group of people Chilling" />
            <img className="lg:hidden sm:block hidden w-full" src="" alt="Group of people Chilling" />
            <img className="sm:hidden block w-full" src="https://selectra.in/sites/selectra.in/files/2022-12/list_of_ott_apps.png" alt="Group of people Chilling" />
          </div>

          <div className="lg:mt-16 sm:mt-12 mt-16 flex lg:flex-row justify-between flex-col lg:gap-8 gap-12">
            <div className="w-full xl:w-5/12 lg:w-6/12">
              <h2 className="font-bold lg:text-4xl text-3xl lg:leading-9 leading-7 text-gray-800">Our Vision</h2>
              <p className="font-normal text-base leading-6 text-gray-600 mt-4">At OttMartIndia, we envision a future where entertainment knows no boundaries. Our mission is to connect audiences worldwide with the best of OTT content, fostering cultural exchange and creativity in the digital age.</p>
              <p className="font-normal text-base leading-6 text-gray-600 mt-6">We are committed to pushing the boundaries of innovation to deliver unparalleled streaming experiences that captivate and inspire audiences across the globe.</p>
            </div>
            <div className="lg:flex items-center w-full lg:w-1/2 ">
              <img className="lg:block hidden w-full" src="https://ik.imagekit.io/ionicfirebaseapp/getwidget//2024/03/Best-Regional-OTT-Platforms-in-India.png" />
              <img className="lg:hidden sm:block hidden w-full h-3/4" src="https://img.freepik.com/free-vector/realistic-horizontal-cinema-movie-time-poster-with-3d-glasses-snacks-tickets-clapper-reel-blue-background-with-bokeh-vector-illustration_1284-77013.jpg?t=st=1715189576~exp=1715193176~hmac=285f7ba50e1418c4b869bb4835c701643213441e7aeabd4948ce8c4d4443f9e7&w=1060" alt="people discussing on board" />
              <img className="sm:hidden block w-full" src="https://ik.imagekit.io/ionicfirebaseapp/getwidget//2024/03/Best-Regional-OTT-Platforms-in-India.png" />
            </div>
          </div>
          
          {/* Contact Information */}
          <div className="mt-10 text-gray-700">
            <p className="font-semibold">Contact Us:</p>
            <p>Phone: 8875867661</p>
            <p>Email: ottmartindia@gmail.com</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
