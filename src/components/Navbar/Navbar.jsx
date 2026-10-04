import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import NavLinks from './NavLinks'
import MobileMenu from './MobileMenu'
import logoImg from '/favicon.png'
const Navbar = () => {
const [isOpen, setIsOpen] = useState(false)
  return (
    <nav className="fixed top-0 left-0 z-50 w-full">
      <div className="mx-auto flex h-20 max-w-[1800px] items-center justify-between px-6">

        {/* Logo */}
        <Link to="/" className="shrink-0">
          <img
            src={logoImg}
            alt="Velora"
            className="h-12 w-12 object-contain"
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden laptop:flex items-center gap-10">
          <NavLinks />
        </div>

        {/* Desktop CTA */}
        <div className="hidden laptop:block">
          <Link
            to="/collection"
            className="inline-flex min-h-11 items-center justify-center px-6"
          >
            Explore Collection
          </Link>
        </div>

        {/* Mobile Menu */}
        <div className="laptop:hidden">
        <MobileMenu
            isOpen={isOpen}
            setIsOpen={setIsOpen}
          />
        </div>

      </div>
    </nav>
  )
}

export default Navbar