import React from 'react'

const GalleryItem = ({ item }) => {
  return (
    <figure className="group overflow-hidden border border-[#c9a76a]/15 bg-[#241612]/40">
      <img
        src={item.image}
        alt={item.alt}
         loading="lazy"
        decoding="async"
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
    </figure>
  )
}

export default GalleryItem