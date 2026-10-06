import React, { useEffect, useRef, useState } from 'react'

const BrandStoryIntro = () => {
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
      className="bg-gradient-to-b from-[#241612] via-[#2d1b15] to-[#241612] px-6 pb-24 pt-32 text-[#f5ead8] tablet:pb-32 tablet:pt-40 laptop:pb-40 laptop:pt-48"
    >
      <div
        className={`mx-auto max-w-[1100px] text-center transition-[opacity,transform] duration-1000 ease-out motion-reduce:transform-none motion-reduce:transition-none ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
        }`}
      >
        <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#dfbd7a]">
          The Story of Velora
        </p>

        <h1 className="mt-6 font-serif text-4xl font-normal leading-tight tracking-tight text-[#fff8ed] mobile-lg:text-5xl tablet:text-6xl laptop:text-7xl">
          A fragrance is more than what you wear.
        </h1>

        <p className="mx-auto mt-8 max-w-[760px] text-base leading-relaxed text-[#dfd0bc] tablet:text-lg laptop:text-xl">
          It becomes part of the moments you remember, the presence you
          leave behind, and the expression that feels uniquely your own.
        </p>
      </div>
    </section>
  )
}

export default BrandStoryIntro