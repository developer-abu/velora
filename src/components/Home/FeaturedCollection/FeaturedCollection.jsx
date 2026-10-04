import React from 'react'
import { Link } from 'react-router-dom'
import v2 from '../../../assets/v2.png'
import v8 from '../../../assets/v8.png'
const FeaturedCollection = () => {
  return (
    <section className="border-t border-[#c9a76a]/30 bg-gradient-to-br from-[#684638] via-[#49332e] to-[#30231f] px-6 py-24 text-[#f5ead8] tablet:py-32 laptop:py-40">
      <div className="mx-auto max-w-[1800px]">

        {/* Section Header */}
        <div className="mb-14 text-center tablet:mb-20">
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-[#dfbd7a]">
            The Collection
          </p>

          <h2 className="mt-5 font-serif text-3xl font-normal leading-tight tracking-tight mobile-lg:text-4xl tablet:text-5xl laptop:text-6xl">
            Fragrances Worth Remembering
          </h2>
        </div>

        {/* Featured Products */}
        <div className="grid gap-8 tablet:grid-cols-2 laptop:gap-10">
          
          <article>
            <div className="aspect-[4/5] overflow-hidden">
              <img
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

          <article>
            <div className="aspect-[4/5] overflow-hidden">
              <img
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
        <div className="mt-14 text-center tablet:mt-20">
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