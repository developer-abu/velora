import React, { useEffect, useRef, useState } from 'react'

const BrandIntro = () => {
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

        // else { setIsVisible(false)}
      },
      { threshold: 0.15, rootMargin: '0px 0px -5% 0px' },
    )

    observer.observe(section)
    return () => observer.disconnect()
  }, [])


  return (
    <section
      ref={sectionRef}
      className={`border-t border-[#c9a76a]/30 bg-gradient-to-b from-[#241612] via-[#3b2118] to-[#57301f] px-6 py-24 text-[#f5ead8] transition-[opacity,transform] duration-1000 ease-out motion-reduce:transform-none motion-reduce:transition-none tablet:py-32 laptop:py-40 ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
      }`}
    >
      <div className="mx-auto max-w-[900px] text-center">

        <p className="text-xs font-medium uppercase tracking-[0.32em] text-[#dfbd7a]">
          The Essence of Velora
        </p>

        <div
          aria-hidden="true"
          className="mx-auto mt-7 flex w-24 items-center gap-2 text-[#c9a76a]"
        >
          <span className="h-px flex-1 bg-current" />
          <span className="h-1.5 w-1.5 rotate-45 bg-current" />
          <span className="h-px flex-1 bg-current" />
        </div>

        <h2 className="mt-7 font-serif text-3xl font-normal leading-tight tracking-tight mobile-lg:text-4xl tablet:text-5xl laptop:text-6xl">
          Fragrance is more than a scent.
        </h2>

        <p className="mx-auto mt-8 max-w-[650px] text-base leading-8 text-[#dfd0bc] tablet:text-lg tablet:leading-9">
          It is a presence, a memory, an expression of who you are.
          Velora creates refined fragrances designed to become part of
          your most unforgettable moments.
        </p>

      </div>
    </section>
  )
}

export default BrandIntro