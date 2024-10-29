import React from 'react'
import Feature from './Components/Feature'
import HeroSection from './Components/HeroSection'
import ImageSlider from './Components/ImageSlider'
import OurProduct from './Components/OurProduct'
import Process from './Components/Process'
import Faq from './Components/Faq'
import Review from './Components/Review'
import { Helmet } from 'react-helmet'

function Page() {
  <Helmet>
  <title>StreamNation - Your Ultimate OTT Subscription Destination</title>
  <meta name="description" content="StreamNation offers genuine OTT subscriptions at unbeatable prices. Enjoy a vast library of content with our reliable service. Sign up now and start streaming!" />
  <meta name="keywords" content="StreamNation, OTT subscriptions, streaming service, affordable, genuine, reliable, vast library, movies, TV shows" />
  <link rel="icon" type="image/x-icon" href="/images/favicon.ico" />
</Helmet>

  return (
    <div>

        <ImageSlider/>
        <OurProduct/>
        <Process/>
        <Feature/>
        <HeroSection/>
        <Faq/>
        <Review/>

    </div>
  )
}

export default Page