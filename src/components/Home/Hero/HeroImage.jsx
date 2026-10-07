import React from 'react'
// import heroImg from '../../../assets/v10.png'
import heroMobile from './hero-mobile.webp'
import heroMobileLg from './hero-mobile-lg.webp'
import heroTablet from './hero-tablet.webp'
import heroLaptop from './hero-laptop.webp'
import heroDesktop from './hero-dekstop.webp'
import heroLergerDesktop from './hero-desktop-lerger.webp'
const HeroImage = () => {
  return (
    <div className="absolute inset-0">
   <picture>
  <source
    media="(max-width: 479px)"
    srcSet={heroMobile}
  />

  <source
    media="(max-width: 767px)"
    srcSet={heroMobileLg}
  />

  <source
    media="(max-width: 1023px)"
    srcSet={heroTablet}
  />

  <source
    media="(max-width: 1279px)"
    srcSet={heroLaptop}
  />

  <source
    media="(max-width: 1535px)"
    srcSet={heroDesktop}
  />

  <img
    src={heroLergerDesktop}
    alt="Velora luxury fragrance collection"
    className="h-full w-full object-fill min-w-[520px]:object-cover"
  />
</picture>
    </div>
  )
}

export default HeroImage