import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import signatureScent from '../../../assets/v5.png'
const SignatureScent = () => {
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

  // else {
  // setIsVisible(false)}

      },
      { threshold: 0.15, rootMargin: '0px 0px -5% 0px' },
    )

    observer.observe(section)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
        className={`border-t border-[#c9a76a]/30 bg-gradient-to-br from-[#22251d] via-[#34372a] to-[#4b4430] px-6 py-24 text-[#f5ead8] tablet:py-32 laptop:py-40 transition-[opacity,transform] duration-1000 ease-out motion-reduce:transform-none motion-reduce:transition-none ${isVisible ? 'translate-y-0 opacity-100 ' : 'translate-y-6 opacity-0'}`}
    >
      <div className="mx-auto grid max-w-[1800px] items-center gap-12 tablet:grid-cols-2 laptop:gap-20">

        {/* Image */}
        <div
          className={`overflow-hidden transition-[opacity,transform] duration-1000 ease-out motion-reduce:transform-none motion-reduce:transition-none ${
            isVisible ? 'translate-y-0 opacity-100 delay-100' : 'translate-y-6 opacity-0'
          }`}
        >
          <img
            src={signatureScent}
            alt="Velora signature fragrance"
            className="h-full w-full object-cover"
          />
        </div>

        {/* Content */}
        <div
          className={`max-w-xl transition-[opacity,transform] duration-1000 ease-out motion-reduce:transform-none motion-reduce:transition-none ${
            isVisible
              ? 'translate-y-0 opacity-100 delay-150'
              : 'translate-y-6 opacity-0'
          }`}
        >
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-[#dfbd7a]">
            Signature Scent
          </p>

          <h2 className="mt-5 font-serif text-3xl font-normal leading-tight tracking-tight mobile-lg:text-4xl tablet:text-5xl laptop:text-6xl">
            A scent that leaves a lasting impression.
          </h2>

          <p className="mt-7 text-base leading-relaxed text-[#dfd0bc] tablet:text-lg">
            Discover a fragrance created to linger beyond the moment,
            balancing depth, character, and refined elegance in every note.
          </p>

          <div className="mt-8">
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
              Discover the Scent
            </Link>
          </div>
        </div>

      </div>
    </section>
  )
}

export default SignatureScent