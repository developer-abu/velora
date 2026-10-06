import React from 'react'
import { Link } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

const MobileMenu = ({ isOpen, setIsOpen }) => {

  const navLinks = [
    {
      name: 'Home',
      path: '/',
    },
    {
      name: 'Collection',
      path: '/collection',
    },
    {
      name: 'Brand Story',
      path: '/brand-story',
    },
    {
      name: 'Gallery',
      path: '/gallery',
    },
    {
      name: 'Contact',
      path: '/contact',
    },
  ]

  const handleClose = () => {
    setIsOpen(false)
  }

  return (
    <>
      {/* Menu Button */}
      {!isOpen && (
        <button
          type="button"
          onClick={() => setIsOpen(true)}
          aria-label="Open navigation menu"
          className="
            flex
            min-h-11
            min-w-11
            items-center
            justify-center
            text-[#d4af5a]
            transition-colors
            duration-300
            hover:text-[#e6c56f]
          "
        >
          <Menu
            size={24}
            strokeWidth={1.5}
          />
        </button>
      )}

      {/* Mobile Menu */}
      {isOpen && (
        <div
          className="
            fixed
            inset-0
            z-50
            min-h-screen
            bg-linear-to-b
from-[#241612]
via-[#3B2118]
to-[#57301F]
            text-[#d4af5a]
          "
        >

          {/* Menu Header */}
          <div className="flex h-20 items-center justify-between px-6">

            {/* Logo */}
            <Link
              to="/"
              onClick={handleClose}
              className="shrink-0"
            >
              <img
                src="/favicon.png"
                alt="Velora"
                className="h-12 w-12 object-contain"
              />
            </Link>

            {/* Close Button */}
            <button
              type="button"
              onClick={handleClose}
              aria-label="Close navigation menu"
              className="
                flex
                min-h-11
                min-w-11
                items-center
                justify-center
                text-[#d4af5a]
                transition-colors
                duration-300
                hover:text-[#e6c56f]
              "
            >
              <X
                size={26}
                strokeWidth={1.5}
              />
            </button>

          </div>

          {/* Navigation */}
          <nav
            className="
              flex
              min-h-[calc(100vh-5rem)]
              flex-col
              items-center
              justify-center
              gap-8
              px-6
            "
          >

            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={handleClose}
                className="
                  text-base
                  font-serif
                  text-xl
                  tracking-[0.04em]
                  text-[#fff0d8]
                  transition-colors
                  duration-300
                  hover:text-[#e6c56f]
                "
              >
                {link.name}
              </Link>
            ))}

            {/* CTA */}
            <Link
              to="/collection"
              onClick={handleClose}
              className="
                mt-6
                flex
                min-h-11
                items-center
                justify-center
                border
                border-[#d4af5a]/70
                px-8
                text-xs
                font-semibold
                uppercase
                tracking-[0.16em]
                text-[#241612]
                bg-[#e2c68d]
                transition-all
                duration-300
                hover:border-[#f0dcae]
                hover:bg-[#f0dcae]
              "
            >
              Explore Collection
            </Link>

          </nav>

        </div>
      )}
    </>
  )
}

export default MobileMenu