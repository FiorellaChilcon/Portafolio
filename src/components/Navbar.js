import React, { useState } from 'react';
import menu from '../assets/images/menu.png';
import useClickOutside from '../customHooks/useClickOutside';

export default function Navbar() {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu((prev) => !prev)
    menuLinks.current.classList.toggle('flex');
  }

  const closeMenu = () => {
    setShowMenu(false)
    menuLinks.current.classList.remove('flex');

  }
  const [menuLinks, trigger] = useClickOutside(showMenu, closeMenu);

  return (
    <nav>
      <button ref={trigger} onClick={toggleMenu}className='menu-btn'>
        <img src={menu} alt={menu}/>
      </button>
      <div ref={menuLinks}>
        <a href='#about-me' onClick={closeMenu}>Fiorella Chilcon</a>
        <a href='#projects' onClick={closeMenu}>Projects</a>
        <a href='#skills' onClick={closeMenu}>Skills</a>
        <a href='#contact' onClick={closeMenu}>Contact</a>
      </div>
    </nav>
  )
}
