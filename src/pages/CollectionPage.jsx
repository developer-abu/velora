import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'
import CollectionHero from '../components/collection/CollectionHero'
import ProductGrid from '../components/collection/product/ProductGrid'

const CollectionPage = () => {
  return (
    <div>
      <Navbar/>
      <CollectionHero/>
      <ProductGrid/>
      <Footer/>
    </div>
  )
}

export default CollectionPage
