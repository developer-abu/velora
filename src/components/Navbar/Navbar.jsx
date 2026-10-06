import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import NavLinks from './NavLinks'
import MobileMenu from './MobileMenu'
import logoImg from '/favicon.png'
const Navbar = () => {
const [isOpen, setIsOpen] = useState(false)
  return (
    <nav className="fixed left-0 top-0 z-50 w-full bg-gradient-to-b from-[#211610]/90 via-[#211610]/65 to-transparent">
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
            className="inline-flex min-h-11 items-center justify-center border border-[#e2c68d] bg-[#e2c68d] px-6 text-xs font-semibold uppercase tracking-[0.16em] text-[#241612] shadow-lg shadow-black/15 transition-all duration-300 hover:border-[#f0dcae] hover:bg-[#f0dcae]"
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