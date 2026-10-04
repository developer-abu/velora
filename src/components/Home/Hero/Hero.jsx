import React from 'react'
import HeroContent from './HeroContent';
import HeroImage from './HeroImage';
const Hero = () => {
  return (
    <section className="relative min-h-screen overflow-hidden">
      
      {/* Hero Image */}
      <HeroImage />

      {/* Hero Content */}
      <div className="relative z-10 flex min-h-screen items-center">
        <div className="mx-auto w-full max-w-[1800px] px-6">
          <HeroContent />
        </div>
      </div>

    </section>
  )
}

export default Hero