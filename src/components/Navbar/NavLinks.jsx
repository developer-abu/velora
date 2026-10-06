import React from 'react'
import { Link } from 'react-router-dom'

const NavLinks = () => {
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
  ]

  return (
    <ul className="flex items-center gap-8 desktop:gap-10 wide:gap-12">
      {navLinks.map((link) => (
        <li key={link.name}>
          <Link
            to={link.path}
            className="
              relative
              text-xs
              font-medium
              uppercase
              tracking-[0.16em]
              text-[#fff6e8]
              transition-colors
              duration-300
              hover:text-[#e2c68d]
              focus-visible:outline-2
              focus-visible:outline-offset-8
              focus-visible:outline-[#e2c68d]
            "
          >
            {link.name}
          </Link>
        </li>
      ))}
    </ul>
  )
}

export default NavLinks