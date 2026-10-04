import React from 'react'

const BrandIntro = () => {
  return (
    <section className="border-t border-[#c9a76a]/30 bg-gradient-to-b from-[#241612] via-[#3b2118] to-[#57301f] px-6 py-24 text-[#f5ead8] tablet:py-32 laptop:py-40">
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