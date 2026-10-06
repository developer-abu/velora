import React from 'react'
import HeroCTA from './HeroCTA';

const HeroContent = () => {
  return (
    <div className="max-w-xl text-[#fff6e8]">
      
      {/* Eyebrow */}
      <p className="mb-5 text-xs font-semibold uppercase tracking-[0.3em] text-[#f0d18f] drop-shadow-[0_2px_8px_rgba(20,12,8,0.9)] tablet:text-sm">
        The Essence of Velora
      </p>

      {/* Heading */}
      <h1 className="max-w-[13ch] font-serif text-4xl font-normal leading-[1.08] tracking-tight text-[#fff8ed] drop-shadow-[0_3px_16px_rgba(20,12,8,0.85)] mobile-lg:text-5xl tablet:text-6xl laptop:text-7xl">
        Find your scent for every chapter.
      </h1>

      {/* Description */}
      <p className="mt-6 max-w-md text-base leading-relaxed text-[#fff3e2] drop-shadow-[0_2px_10px_rgba(20,12,8,0.9)] tablet:text-lg tablet:leading-8">
        Explore refined, long-lasting fragrances crafted to become part of
        your most memorable moments.
      </p>

      {/* CTA */}
      <HeroCTA />

    </div>
  )
}

export default HeroContent