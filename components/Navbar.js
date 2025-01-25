import React from 'react'
import Link from 'next/link'

function Navbar() {
  return (
    <nav className='h-16 navbar flex justify-between items-center py-4 px-7 bg-purple-800 text-white'>
      <div className="logo text-2xl font-bold font-sans">
        <Link href='/'>Smallr</Link>
      </div>
      <ul className='flex justify-center gap-4 items-center text-lg font-sans'>
        <li><Link href="/">Home</Link></li>
        <li><Link href="/about">About</Link></li>
        <li><Link href="/shorten">Shorten</Link></li>
        <li><Link href="/contact">Contact Us</Link></li>
        <li className='flex gap-3'>
          <Link href='/shorten'><button className='bg-purple-600 text-white shadow-lg p-2 rounded-lg'>Try Now</button></Link>
          <Link target="_blank" href='https://github.com/sayantann7/smallr.git'><button className='bg-purple-600 text-white shadow-lg p-2 rounded-lg'>GitHub</button></Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar