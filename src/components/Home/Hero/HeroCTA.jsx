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
          border
          border-current
          px-7
          text-sm
          uppercase
          tracking-[0.2em]
          transition-colors
          duration-300
        "
      >
        Explore Collection
      </Link>
    </div>
  )
}

export default HeroCTA