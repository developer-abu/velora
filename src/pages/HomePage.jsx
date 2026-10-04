import React from 'react'
import Hero from './../components/Home/Hero/Hero';
import BrandIntro from '../components/Home/BrandIntro/BrandIntro';
import FeaturedCollection from '../components/Home/FeaturedCollection/FeaturedCollection';
import SignatureScent from '../components/Home/SignatureScent/SignatureScent';

const HomePage = () => {
  return (
    <>
      <Hero/>
      <BrandIntro/>
      <FeaturedCollection/>
      <SignatureScent/>
    </>
  )
}

export default HomePage
