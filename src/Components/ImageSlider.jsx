import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const ImageSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: false,
    pauseOnFocus: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className="relative">
      <Slider {...settings}>
        <div>
          <img src="https://ik.imagekit.io/ionicfirebaseapp/getwidget//2024/01/Top-OTT-Platforms-in-India-2.png" alt="Slide 1" className="w-full h-50 md:h-screen object-cover" />
        </div>
        <div>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1zRue0_ylBFsFgCSnpATGqiO14vJITCDI3w&s" alt="Slide 3" className="w-full h-50 md:h-screen object-cover" />
        </div>
        <div>
          <img src="https://www.contus.com/blog/wp-content/uploads/2022/03/banner-image-41.4-01.png" alt="Slide 2" className="w-full h-50 md:h-screen object-cover" />
        </div>
      
      </Slider>
    </div>
  );
};

export default ImageSlider;
