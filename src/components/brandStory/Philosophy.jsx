import React, { useEffect, useRef, useState } from 'react'

const Philosophy = () => {
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
      className="border-t border-[#c9a76a]/20 bg-gradient-to-b from-[#241612] via-[#1f130f] to-[#241612] px-6 py-24 text-[#f5ead8] tablet:py-32 laptop:py-40"
    >
      <div className="mx-auto max-w-[1800px]">

        <div className="grid gap-12 laptop:grid-cols-[0.8fr_1.2fr] laptop:gap-24">

          {/* Section Heading */}

          <div
            className={`transition-[opacity,transform] duration-1000 ease-out motion-reduce:transform-none motion-reduce:transition-none ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
            }`}
          >
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#dfbd7a]">
              Our Philosophy
            </p>

            <h2 className="mt-5 max-w-md font-serif text-3xl font-normal leading-tight tracking-tight text-[#fff8ed] mobile-lg:text-4xl tablet:text-5xl">
              Creating fragrance with intention.
            </h2>
          </div>

          {/* Philosophy Content */}

          <div
            className={`transition-[opacity,transform] duration-1000 ease-out motion-reduce:transform-none motion-reduce:transition-none ${
              isVisible ? 'translate-y-0 opacity-100 delay-150' : 'translate-y-6 opacity-0'
            }`}
          >
            <p className="max-w-2xl text-base leading-relaxed text-[#dfd0bc] tablet:text-lg">
              At Velora, fragrance is approached as an expression rather
              than simply an accessory. Every composition is imagined to
              have its own character, atmosphere, and emotional presence.
            </p>

            <div className="mt-14 grid gap-10 border-t border-[#c9a76a]/20 pt-10 tablet:grid-cols-3 tablet:gap-8">

              <div>
                <p className="font-serif text-2xl text-[#f5ead8]">
                  Timeless
                </p>

                <p className="mt-4 text-sm leading-relaxed text-[#dfd0bc]">
                  We value compositions that feel refined beyond a
                  particular moment or passing trend.
                </p>
              </div>

              <div>
                <p className="font-serif text-2xl text-[#f5ead8]">
                  Intentional
                </p>

                <p className="mt-4 text-sm leading-relaxed text-[#dfd0bc]">
                  Every detail has a purpose, from the character of a
                  fragrance to the experience surrounding it.
                </p>
              </div>

              <div>
                <p className="font-serif text-2xl text-[#f5ead8]">
                  Personal
                </p>

                <p className="mt-4 text-sm leading-relaxed text-[#dfd0bc]">
                  A fragrance becomes meaningful when it becomes part
                  of someone's own story.
                </p>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  )
}

export default Philosophy