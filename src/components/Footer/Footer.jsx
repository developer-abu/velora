import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="border-t border-[#c9a76a]/40 bg-gradient-to-br from-[#392a2a] via-[#251d1c] to-[#171514] px-6 py-16 text-[#f5ead8] tablet:py-20">
      <div className="mx-auto max-w-[1800px]">

        {/* Main Footer */}

        <div className="grid gap-12 tablet:grid-cols-2 laptop:grid-cols-4">

          {/* Brand */}

          <div className="border-b border-[#c9a76a]/20 pb-10 laptop:col-span-2 laptop:border-b-0 laptop:border-r laptop:pb-0 laptop:pr-12">
            <Link
              to="/"
              className="inline-block"
              aria-label="Velora home"
            >
              <img
                src="/favicon.png"
                alt="Velora"
                className="h-14 w-14 object-contain"
              />
            </Link>

            <p className="mt-6 max-w-md font-serif text-2xl leading-relaxed text-[#e2c68d]">
              A fragrance beyond the ordinary.
            </p>

            <p className="mt-4 max-w-md text-sm leading-relaxed text-[#d2c5b7]">
              Refined fragrances created to become part of your most
              unforgettable moments.
            </p>
          </div>

          {/* Navigation */}

          <div>
            <p className="text-xs font-medium uppercase tracking-[0.3em] text-[#e2c68d]">
              Explore
            </p>

            <nav className="mt-6 flex flex-col items-start gap-4 text-sm text-[#e9dfd2]">
              <Link
                to="/"
                className="transition-colors duration-300 hover:text-[#e2c68d]"
              >
                Home
              </Link>

              <Link
                to="/collection"
                className="transition-colors duration-300 hover:text-[#e2c68d]"
              >
                Collection
              </Link>

              <Link
                to="/brand-story"
                className="transition-colors duration-300 hover:text-[#e2c68d]"
              >
                Brand Story
              </Link>

              <Link
                to="/gallery"
                className="transition-colors duration-300 hover:text-[#e2c68d]"
              >
                Gallery
              </Link>
            </nav>
          </div>

          {/* Contact */}

          <div>
            <p className="text-xs font-medium uppercase tracking-[0.3em] text-[#e2c68d]">
              Contact
            </p>

            <div className="mt-6 space-y-5 text-sm text-[#d2c5b7]">

              <div>
                <p className="mb-2 text-[#f5ead8]">
                  Email
                </p>

                <a
                  href="mailto:hello@velora.com"
                  className="transition-colors duration-300 hover:text-[#e2c68d]"
                >
                  hello@velora.com
                </a>
              </div>

              <div>
                <p className="mb-2 text-[#f5ead8]">
                  Address
                </p>

                <p className="leading-relaxed">
                  Velora House
                  <br />
                  Kolkata, India
                </p>
              </div>

            </div>
          </div>

        </div>

        {/* Bottom Footer */}

        <div className="mt-16 flex flex-col gap-4 border-t border-[#c9a76a]/25 pt-6 text-xs text-[#b8aa9b] tablet:flex-row tablet:items-center tablet:justify-between">

          <p>
            © {new Date().getFullYear()} Velora. All rights reserved.
          </p>

          <p>
            Crafted with intention.
          </p>

        </div>

      </div>
    </footer>
  )
}

export default Footer