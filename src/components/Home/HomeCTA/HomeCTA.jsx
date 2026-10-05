import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'

const HomeCTA = () => {
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
      ref={sectionRef}
      className="border-t border-[#c9a76a]/30 bg-[#241812] px-6 py-24 text-[#f5ead8] tablet:py-32 laptop:py-40"
    >
      <div
        className={`mx-auto max-w-4xl text-center transition-[opacity,transform] duration-1000 ease-out motion-reduce:transform-none motion-reduce:transition-none ${
          isVisible
            ? 'translate-y-0 opacity-100'
            : 'translate-y-6 opacity-0'
        }`}
      >
        <p className="text-xs font-medium uppercase tracking-[0.35em] text-[#dfbd7a]">
          Discover Velora
        </p>

        <h2 className="mt-6 font-serif text-4xl font-normal leading-tight tracking-tight mobile-lg:text-5xl tablet:text-6xl laptop:text-7xl">
          Find the fragrance that becomes yours.
        </h2>

        <p className="mx-auto mt-7 max-w-2xl text-base leading-relaxed text-[#dfd0bc] tablet:text-lg">
          Explore the Velora collection and discover fragrances crafted
          to leave an unforgettable impression.
        </p>

        <div className="mt-9">
          <Link
            to="/collection"
            className="
              inline-flex
              min-h-11
              items-center
              justify-center
              border
              border-[#dfbd7a]
              bg-[#dfbd7a]
              px-8
              text-sm
              uppercase
              tracking-[0.2em]
              text-[#241612]
              transition-all
              duration-300
              hover:bg-transparent
              hover:text-[#dfbd7a]
            "
          >
            Explore Collection
          </Link>
        </div>
      </div>
    </section>
  )
}

export default HomeCTA