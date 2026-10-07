import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import v2 from '../../../assets/v2.webp'
import v8 from '../../../assets/v8.webp'
const FeaturedCollection = () => {
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
        //   observer.disconnect()
        }else {
  setIsVisible(false)
}
      },
      { threshold: 0.15, rootMargin: '0px 0px -5% 0px' },
    )

    observer.observe(section)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      className={`border-t border-[#c9a76a]/30 bg-gradient-to-br from-[#684638] via-[#49332e] to-[#30231f] px-6 py-24 text-[#f5ead8] transition-[opacity,transform] duration-1000 ease-out motion-reduce:transform-none motion-reduce:transition-none tablet:py-32 laptop:py-40 ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
      }`}
    >
      <div className="mx-auto max-w-[1800px]">

        {/* Section Header */}
        <div
          className={`mb-14 text-center transition-[opacity,transform] duration-1000 ease-out motion-reduce:transform-none motion-reduce:transition-none tablet:mb-20 ${
            isVisible ? 'translate-y-0 opacity-100 delay-100' : 'translate-y-6 opacity-0'
          }`}
        >
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-[#dfbd7a]">
            The Collection
          </p>

          <h2 className="mt-5 font-serif text-3xl font-normal leading-tight tracking-tight mobile-lg:text-4xl tablet:text-5xl laptop:text-6xl">
            Fragrances Worth Remembering
          </h2>
        </div>

        {/* Featured Products */}
        <div className="grid gap-8 tablet:grid-cols-2 laptop:gap-10">
          
          <article
            className={`transition-[opacity,transform] duration-1000 ease-out motion-reduce:transform-none motion-reduce:transition-none ${
              isVisible ? 'translate-y-0 opacity-100 delay-150' : 'translate-y-6 opacity-0'
            }`}
          >
            <div className="aspect-[4/5] overflow-hidden">
              <img  loading="lazy"
                decoding="async"
                src={v2}
                alt="Velora fragrance"
                className="h-full w-full object-cover"
              />
            </div>

            <div className="mt-6">
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-[#dfbd7a]">
                Velora
              </p>

              <h3 className="mt-2 font-serif text-xl font-normal text-[#f5ead8]">
                Signature No. 01
              </h3>
            </div>
          </article>

          <article
            className={`transition-[opacity,transform] duration-1000 ease-out motion-reduce:transform-none motion-reduce:transition-none ${
              isVisible ? 'translate-y-0 opacity-100 delay-300' : 'translate-y-6 opacity-0'
            }`}
          >
            <div className="aspect-[4/5] overflow-hidden">
              <img
               loading="lazy"
                decoding="async"
                src={v8}
                alt="Velora fragrance"
                className="h-full w-full object-cover"
              />
            </div>

            <div className="mt-6">
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-[#dfbd7a]">
                Velora
              </p>

              <h3 className="mt-2 font-serif text-xl font-normal text-[#f5ead8]">
                Signature No. 02
              </h3>
            </div>
          </article>

        </div>

        {/* CTA */}
        <div
          className={`mt-14 text-center transition-[opacity,transform] duration-1000 ease-out motion-reduce:transform-none motion-reduce:transition-none tablet:mt-20 ${
            isVisible ? 'translate-y-0 opacity-100 delay-300' : 'translate-y-6 opacity-0'
          }`}
        >
          <Link
            to="/collection"
            className="
              inline-flex
              min-h-11
              items-center
              justify-center
              border
              border-[#c9a76a]/70
              px-7
              text-sm
              uppercase
              tracking-[0.2em]
              text-[#dfbd7a]
              transition-all
              duration-300
              hover:border-[#dfbd7a]
              hover:bg-[#c9a76a]
              hover:text-[#241612]
            "
          >
            Discover Collection
          </Link>
        </div>

      </div>
    </section>
  )
}

export default FeaturedCollection