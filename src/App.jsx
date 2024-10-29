import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import StickyNavbar from './Components/StickyNavbar';
import Footer from './Components/Footer';
import { Helmet } from 'react-helmet';
import Coupans from './AllPages/Coupans';
import Page from './Page';
import About from './AllPages/About';
import Contact from './AllPages/Contact';
import OurProduct from './Components/OurProduct';
import ProductDetail from './Components/ProductDetail';
import WhatsappIcon from './Components/WhatsappIcon';
import RefundPolicy from './AllPages/RefundPolicy';
import ErrorPage from './AllPages/ErrorPage';

function App() {
  return (
    <>
      <Helmet>
        <title>StreamNation-Home </title>
        <meta name="description" content="StreamNation - Get the cheapest subscriptions for streaming services at StreamNation. Explore our affordable plans for movies, TV shows, paid software, and more, including Netflix, Amazon Prime, Hotstar, Zee5, Sony Liv, JioCinema, and more."/>
  <meta name="keywords" content="subscription, netflix subscription, netflix, prime, prime subscription, amazon subscription, hotstar subscription, amazon prime, amazon prime subscription, zee5, zee5 subscription, netflix subscription price, ott subscription, jio subscription, prime video subscription, subscriptions, prime video, sony liv subscription, sony liv, netflix india subscription, prime subscription price, disney hotstar, disney hotstar subscription, amazon subscription price, subscription meaning, flyer hotstar subscription, jiocinema subscription promo code, jiocinema subscription free, etv win subscription, jiocinema subscription plan, jio cinema subscription offer, jiocinema subscription, jiocinema subscription plans, jio cinema subscription plans, watcho, watcho subscription, hotstar subscription plans for tv, midjourney subscription, ottplay, crunchyroll, crunchyroll subscription, ps plus subscription, amazon prime subscription plan for tv, google one subscription, microsoft 365 subscription, udemy subscription, chaupal subscription"/>
  <meta name="author" content="Manoj Sharma"/>
        <meta name="robots" content="index, follow" />
      </Helmet>
      <Router>
        <StickyNavbar />
        <Routes>
          <Route path="/" element={<Page />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/coupons" element={<Coupans/>} />
          <Route path="/product" element={<OurProduct />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/refundpolicy" element={<RefundPolicy />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
        <WhatsappIcon />
        <Footer />
      </Router>
    </>
  );
}

export default App;
