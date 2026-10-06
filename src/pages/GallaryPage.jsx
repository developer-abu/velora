import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'
import CampaignGallery from '../components/gallary/CampaignGallery'

const GallaryPage = () => {
  return (
    <>
      <Navbar/>
      <main>
           <CampaignGallery/>
      </main>
      <Footer/>
    </>
  )
}

export default GallaryPage
