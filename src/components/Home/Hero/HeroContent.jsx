import React from 'react'
import HeroCTA from './HeroCTA';

const HeroContent = () => {
  return (
    <div className="max-w-xl">
      
      {/* Eyebrow */}
      <p className="mb-5 text-sm uppercase tracking-[0.25em]">
        The Essence of Velora
      </p>

      {/* Heading */}
      <h1 className="text-4xl font-medium leading-tight mobile-lg:text-5xl tablet:text-6xl laptop:text-7xl">
        A Fragrance Beyond the Ordinary
      </h1>

      {/* Description */}
      <p className="mt-6 max-w-md text-base leading-relaxed tablet:text-lg">
        Discover a world of refined fragrance, crafted to become part of
        every unforgettable chapter.
      </p>

      {/* CTA */}
      <HeroCTA />

    </div>
  )
}

export default HeroContent