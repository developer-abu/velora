import React, { useEffect, useRef, useState } from 'react'
import v23 from "../../assets/v23.webp"
import v18 from "../../assets/v18.webp"
import v20 from "../../assets/v20.webp"
import v25 from "../../assets/v25.webp"
import v11 from "../../assets/v11.webp"
import v3 from "../../assets/v3.webp"

const CollectionHero = () => {
  const sectionRef = useRef(null)

  const [isVisible, setIsVisible] = useState(
    () => typeof IntersectionObserver === 'undefined',
  )

  useEffect(() => {
    const section = sectionRef.current

    if (!section) return

    if (typeof IntersectionObserver === 'undefined') return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      {
        threshold: 0.15,
        rootMargin: '0px 0px -5% 0px',
      },
    )

    observer.observe(section)

    return () => observer.disconnect()
  }, [])

  return (
    <section
      
      className="relative min-h-[70vh] overflow-hidden bg-[#241612] border-b border-[#c9a76a]/20"
    >
      {/* Background Image */}
       <picture>
      <source
        media="(max-width: 479px)"
        srcSet={v23}
      />
    
      <source
        media="(max-width: 767px)"
        srcSet={v18}
      />
    
      <source
        media="(max-width: 1023px)"
        srcSet={v20}
      />
    
      <source
        media="(max-width: 1279px)"
        srcSet={v25}
      />
    
      <source
        media="(max-width: 1535px)"
        srcSet={v11}
      />
    
      <img
        src={v3}
        alt="Velora luxury fragrance collection"
        className="h-full w-full object-fill min-w-[520px]:object-cover"
      />
    </picture>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/35" />

      {/* Content */}
      <div ref={sectionRef} className="relative z-10 flex min-h-[70vh] items-center justify-center px-6 pt-24 pb-16 text-center text-[#f5ead8] tablet:pt-28 tablet:pb-20 laptop:pt-32">
        <div
          className={`mx-auto max-w-3xl transition-[opacity,transform] duration-1000 delay-150 ease-out motion-reduce:transform-none motion-reduce:transition-none ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
          }`}
        >
          {/* Eyebrow */}
          <div className="inline-flex items-center justify-center gap-3">
            <span className="h-px w-6 bg-[#dfbd7a]/60 tablet:w-10" />
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#f0d18f] drop-shadow-[0_2px_8px_rgba(20,12,8,0.9)] tablet:text-sm">
              The Collection
            </p>
            <span className="h-px w-6 bg-[#dfbd7a]/60 tablet:w-10" />
          </div>

          {/* Heading */}
          <h1 className="mt-5 font-serif text-3xl font-normal leading-[1.12] tracking-tight text-[#fff8ed] drop-shadow-[0_3px_16px_rgba(20,12,8,0.85)] mobile-lg:text-4xl tablet:text-5xl laptop:text-6xl desktop:text-7xl">
            Fragrances crafted to be remembered.
          </h1>

          {/* Decorative Diamond Divider */}
          <div
            aria-hidden="true"
            className="mx-auto my-6 flex w-20 items-center gap-2 text-[#c9a76a] drop-shadow-[0_2px_8px_rgba(20,12,8,0.9)] tablet:my-7 tablet:w-24"
          >
            <span className="h-px flex-1 bg-current opacity-70" />
            <span className="h-1.5 w-1.5 rotate-45 bg-current" />
            <span className="h-px flex-1 bg-current opacity-70" />
          </div>

          {/* Description */}
          <p className="mx-auto max-w-2xl text-base leading-relaxed text-[#eee1cf] drop-shadow-[0_2px_10px_rgba(20,12,8,0.9)] tablet:text-lg tablet:leading-8">
            Explore the world of Velora through refined compositions
            created for different moods, moments, and expressions.
          </p>
        </div>
      </div>
    </section>
  )
}

export default CollectionHero