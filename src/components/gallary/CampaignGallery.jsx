import React from 'react'
import GalleryItem from './GalleryItem'
import galleryImages from './gallery'

const CampaignGallery = () => {
  return (
    <section className="bg-gradient-to-b from-[#241612] via-[#2d1b15] to-[#1c110d] px-6 pt-28 pb-24 text-[#f5ead8] tablet:pt-36 tablet:pb-32 laptop:pt-40 laptop:pb-40">
      <div className="mx-auto max-w-[1800px]">

        <div className="mb-14 max-w-3xl tablet:mb-20">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#dfbd7a]">
            The World of Velora
          </p>

          <h1 className="mt-5 font-serif text-4xl font-normal leading-tight tracking-tight text-[#fff8ed] mobile-lg:text-5xl tablet:text-6xl">
            Moments shaped by fragrance.
          </h1>
        </div>

        <div className="grid grid-cols-1 gap-4 tablet:grid-cols-2 tablet:gap-6">

          {galleryImages.map((item, index) => (
            <div
              key={item.id}
              className={
                index % 5 === 0
                  ? 'tablet:col-span-2'
                  : ''
              }
            >
              <GalleryItem item={item} />
            </div>
          ))}

        </div>

      </div>
    </section>
  )
}

export default CampaignGallery