import leftArrow from '../assets/icons/chevron-left-solid.svg'
import { useClickOutside } from '../customHooks/useClickOutside';
import { useState, useRef } from 'react';
import clsx from 'clsx';

function SidebarLink({ href, label, onClick }) {
  return (
    <li className="h-14">
      <a onClick={onClick} className="no-underline font-normal hover:font-medium text-lg hover:text-xl text-right block transition-all" href={href}>{label}</a>
    </li>
  )
}

export default function Sidebar() {
  const navRef = useRef(null);
  const btnRef = useRef(null);
  const [showSidebar, setShowSidebar] = useState(false);

  const closeSidebar = () => {
    setShowSidebar(false);
  }
  
  useClickOutside({
    refs: [navRef, btnRef],
    handler: closeSidebar
  });

  return (
    <>
    <nav ref={navRef} className={clsx('lg:bg-transparent lg:shadow-none bg-softBlue-1 shadow-lg fixed right-0 top-0 h-screen items-center pr-5 w-32 justify-end lg:flex z-10 transition-all', showSidebar ? 'flex' : 'hidden')}>
      <ul className="list-none">
        <SidebarLink href="#home" onClick={closeSidebar} label="Home" />
        <SidebarLink href="#about" onClick={closeSidebar} label="About me" />
        <SidebarLink href="#projects" onClick={closeSidebar} label="Projects" />
        <SidebarLink href="#skills" onClick={closeSidebar} label="Skills" />
        <SidebarLink href="#contact" onClick={closeSidebar} label="Contact" />
      </ul>
    </nav>
    <button
      ref={btnRef}
      onClick={() => { setShowSidebar(prev => !prev) }}
      className={clsx('bg-softBlue-1 fixed right-0 bottom-0 size-10 rounded-full m-4 border shadow-evenly border-gray-100 flex lg:hidden z-20 transition-all', showSidebar && 'right-24')}
    >
      <img className={clsx('size-4 m-auto transition-all', showSidebar && 'rotate-180')} alt="open menu" src={leftArrow} />
    </button>
    </>
  )
}
