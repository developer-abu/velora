import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import campaignImage from '../../../assets/v3.webp'

const CampaignSection = () => {
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
      className="border-t border-[#c9a76a]/30 bg-gradient-to-br from-[#49332e] via-[#3d2b28] to-[#30231f] px-4 py-12 text-[#f5ead8] tablet:px-8 tablet:py-16 laptop:px-12 laptop:py-20"
    >
      <div className="mx-auto grid max-w-[1500px] overflow-hidden border border-[#c9a76a]/25 bg-[#30231f]/50 shadow-2xl shadow-black/20 laptop:grid-cols-[1.1fr_0.9fr]">
        {/* Campaign Image */}
        <div className="aspect-square overflow-hidden bg-[#d8bea3]">
          <img
           loading="lazy"
            decoding="async"
            src={campaignImage}
            alt="Velora fragrance campaign"
            className="h-full w-full object-contain"
          />
        </div>

        {/* Content */}
        <div className="flex items-center px-8 py-14 text-left tablet:px-12 tablet:py-20 laptop:px-14">
          <div
            className={`max-w-2xl border-l border-[#dfbd7a]/70 pl-6 transition-[opacity,transform] duration-1000 ease-out motion-reduce:transform-none motion-reduce:transition-none tablet:pl-10 ${
              isVisible
                ? 'translate-y-0 opacity-100'
                : 'translate-y-6 opacity-0'
            }`}
          >
            <p className="text-xs font-medium uppercase tracking-[0.35em] text-[#dfbd7a]">
              The Velora Campaign
            </p>

            <h2 className="mt-6 font-serif text-4xl font-normal leading-tight tracking-tight mobile-lg:text-5xl tablet:text-6xl laptop:text-7xl">
              An expression of timeless elegance.
            </h2>

            <p className="mt-7 max-w-xl text-base leading-relaxed text-[#eee1cf] tablet:text-lg">
              Discover the world of Velora through moments shaped by
              fragrance, atmosphere, and refined expression.
            </p>

            <div className="mt-9">
              <Link
                to="/gallery"
                className="
                  inline-flex
                  min-h-11
                  items-center
                  justify-center
                  border
                  border-[#dfbd7a]/80
                  px-7
                  text-sm
                  uppercase
                  tracking-[0.2em]
                  text-[#dfbd7a]
                  transition-all
                  duration-300
                  hover:border-[#dfbd7a]
                  hover:bg-[#dfbd7a]
                  hover:text-[#241612]
                "
              >
                Explore Campaign
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CampaignSection