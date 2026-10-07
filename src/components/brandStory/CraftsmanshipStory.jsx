import React, { useEffect, useRef, useState } from 'react'
import craftsmanshipImage from '../../assets/v25.png'

const CraftsmanshipStory = () => {
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
      className="border-t border-[#c9a76a]/20 bg-gradient-to-b from-[#241612] via-[#2d1b15] to-[#1c110d] px-6 py-24 text-[#f5ead8] tablet:py-32 laptop:py-40"
    >
      <div className="mx-auto grid max-w-[1800px] items-center gap-12 tablet:grid-cols-2 laptop:gap-24">

        {/* Image */}

        <div
          className={`overflow-hidden border border-[#c9a76a]/15 bg-[#241612]/40 transition-[opacity,transform] duration-1000 ease-out motion-reduce:transform-none motion-reduce:transition-none ${
            isVisible ? 'translate-y-0 opacity-100 delay-100' : 'translate-y-6 opacity-0'
          }`}
        >
          <img
            src={craftsmanshipImage}
             loading="lazy"
              decoding="async"
            alt="Velora fragrance craftsmanship"
            className="aspect-[4/5] h-full w-full object-cover"
          />
        </div>

        {/* Story */}

        <div
          className={`max-w-xl transition-[opacity,transform] duration-1000 ease-out motion-reduce:transform-none motion-reduce:transition-none ${
            isVisible ? 'translate-y-0 opacity-100 delay-150' : 'translate-y-6 opacity-0'
          }`}
        >

          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#dfbd7a]">
            The Art of Craftsmanship
          </p>

          <h2 className="mt-5 font-serif text-3xl font-normal leading-tight tracking-tight text-[#fff8ed] mobile-lg:text-4xl tablet:text-5xl laptop:text-6xl">
            Thoughtful details shape every expression.
          </h2>

          <div className="mt-8 space-y-5 text-base leading-relaxed text-[#dfd0bc] tablet:text-lg">
            <p>
              A refined fragrance begins with attention to detail. At
              Velora, every composition is considered as a complete
              experience, where character, balance, and atmosphere come
              together.
            </p>

            <p>
              We believe craftsmanship is not about excess. It is about
              knowing what to refine, what to preserve, and what makes
              a fragrance feel distinct.
            </p>

            <p>
              The result is an experience designed to feel considered,
              personal, and quietly memorable.
            </p>
          </div>

        </div>

      </div>
    </section>
  )
}

export default CraftsmanshipStory