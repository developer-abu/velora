import React from 'react'
import { Link } from 'react-router-dom'

const HeroCTA = () => {
  return (
    <div className="mt-8">
      <Link
        to="/collection"
        className="
          inline-flex
          min-h-11
          items-center
          justify-center
          border border-[#e2c68d]
          bg-[#e2c68d]
          px-7
          text-xs
          font-semibold
          uppercase
          tracking-[0.16em]
          text-[#241612]
          shadow-lg shadow-black/20
          transition-all
          duration-300
          hover:border-[#f0dcae]
          hover:bg-[#f0dcae]
          focus-visible:outline-2
          focus-visible:outline-offset-4
          focus-visible:outline-[#f0dcae]
        "
      >
        Explore Collection
      </Link>
    </div>
  )
}

export default HeroCTA