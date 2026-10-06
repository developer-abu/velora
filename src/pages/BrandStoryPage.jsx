import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'
import BrandStoryIntro from '../components/brandStory/BrandStoryIntro'
import Philosophy from './../components/brandStory/Philosophy';
import CraftsmanshipStory from '../components/brandStory/CraftsmanshipStory';

const BrandStoryPage = () => {
  return (
    <>
      <Navbar/>
  <main>
        <BrandStoryIntro />
        <Philosophy />
        <CraftsmanshipStory />
      </main>

      <Footer/>
    </>
  )
}

export default BrandStoryPage
