import React, { useEffect, useRef, useState } from 'react'
import ProductCard from './ProductCard'
import fragrances from './fragrances'

const ProductGrid = () => {
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
      <div className="mx-auto max-w-[1800px]">

        <div
          className={`mb-14 transition-[opacity,transform] duration-1000 ease-out motion-reduce:transform-none motion-reduce:transition-none tablet:mb-20 ${
            isVisible ? 'translate-y-0 opacity-100 delay-100' : 'translate-y-6 opacity-0'
          }`}
        >
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-[#dfbd7a]">
            The Collection
          </p>

          <h2 className="mt-5 max-w-3xl font-serif text-3xl font-normal leading-tight tracking-tight text-[#fff8ed] mobile-lg:text-4xl tablet:text-5xl laptop:text-6xl">
            Discover the fragrances of Velora.
          </h2>
        </div>

        <div
          className={`grid gap-x-8 gap-y-14 transition-[opacity,transform] duration-1000 ease-out motion-reduce:transform-none motion-reduce:transition-none tablet:grid-cols-2 laptop:grid-cols-3 laptop:gap-x-10 laptop:gap-y-20 ${
            isVisible ? 'translate-y-0 opacity-100 delay-200' : 'translate-y-6 opacity-0'
          }`}
        >
          {fragrances.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}
        </div>

      </div>
    </section>
  )
}

export default ProductGrid