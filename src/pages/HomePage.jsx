import React from 'react'
import Hero from './../components/Home/Hero/Hero';
import BrandIntro from '../components/Home/BrandIntro/BrandIntro';
import FeaturedCollection from '../components/Home/FeaturedCollection/FeaturedCollection';
import SignatureScent from '../components/Home/SignatureScent/SignatureScent';
import CampaignSection from '../components/Home/Craftsmanship/CampaignSection';
import HomeCTA from '../components/Home/HomeCTA/HomeCTA';
import Navbar from '../components/Navbar/Navbar';
import Footer from './../components/Footer/Footer';


const HomePage = () => {
  return (
    <>
    
      <Navbar/>
      <Hero/>
      <BrandIntro/>
      <FeaturedCollection/>
      <SignatureScent/>
      <CampaignSection/>
      <HomeCTA/>
      <Footer/>
    </>
  )
}

export default HomePage
