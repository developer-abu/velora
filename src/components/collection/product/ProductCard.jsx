import React from 'react'
import { Link } from 'react-router-dom'

const ProductCard = ({ product }) => {
  return (
    <article>
      <Link to={`/collection/${product.id}`} className="group block">
        <div className="aspect-[4/5] overflow-hidden border border-[#c9a76a]/15 bg-[#241612]/40">
          <img
            src={product.image}
            alt={product.name}
            className="
              h-full
              w-full
              object-cover
              transition-transform
              duration-700
              ease-out
              group-hover:scale-[1.03]
            "
          />
        </div>

        <div className="mt-5">
          <p className="text-xs uppercase tracking-[0.25em] text-[#dfbd7a]">
            {product.category}
          </p>

          <h2 className="mt-2 font-serif text-2xl font-normal text-[#f5ead8] transition-colors duration-300 group-hover:text-[#e2c68d]">
            {product.name}
          </h2>

          <p className="mt-2 text-sm leading-relaxed text-[#dfd0bc]">
            {product.description}
          </p>
        </div>
      </Link>
    </article>
  )
}

export default ProductCard