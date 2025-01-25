"use client"
import React, { useState } from 'react';
import Link from 'next/link';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className='h-16 navbar flex justify-between items-center py-4 px-7 bg-purple-800 text-white'>
      <div className="logo text-xl lg:text-2xl font-bold font-sans">
        <Link href='/'>Smallr</Link>
      </div>
      <div className="lg:hidden">
        <button onClick={toggleMenu} className="text-white focus:outline-none">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        </button>
      </div>
      <ul className={`flex-col lg:flex-row justify-center gap-4 items-center text-lg font-sans ${isOpen ? 'flex' : 'hidden'} lg:flex absolute lg:static top-16 left-0 w-full lg:w-auto bg-purple-800 lg:bg-transparent p-4 lg:p-0`}>
        <li className="py-2 lg:py-0"><Link href="/" onClick={closeMenu}>Home</Link></li>
        <li className="py-2 lg:py-0"><Link href="/about" onClick={closeMenu}>About</Link></li>
        <li className="py-2 lg:py-0"><Link href="/shorten" onClick={closeMenu}>Shorten</Link></li>
        <li className="py-2 lg:py-0"><Link href="/contact" onClick={closeMenu}>Contact Us</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;