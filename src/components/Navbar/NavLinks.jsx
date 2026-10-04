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
    {
      name: 'Contact',
      path: '/contact',
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
              text-sm
              font-medium
              tracking-wide
              text-[#f5efe6]
              transition-colors
              duration-300
              hover:text-white
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