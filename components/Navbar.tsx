"use client"

import React from 'react'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import menu from '../public/menu.svg'
import x from '../public/x.svg'
import HamburguerMenu from './HamburguerMenu'
import logo from '@/public/logo.png'

const Navbar = () => {

  const [navStyle, setNavStyle] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50 && !navStyle) {
        console.log("Passou de 150");
        setNavStyle(true);
      } else if (window.scrollY <= 50 && navStyle) {
        console.log("Retornou de 150");
        setNavStyle(false);
      }
    };
  
    window.addEventListener("scroll", handleScroll);
  
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [navStyle]);

  return (
    <nav className={
      'fixed top-0 w-full flex transition-all items-center bg-zinc-900 justify-between px-6 left-0 z-50 '+(
        navStyle ? 'bg-zinc-900 h-16' :' h-20 '
      )
    
    }>
      <div className="flex flex-col text-white">
        <p className=' font-bold text-lg'>TROPA DE CHOQUE</p>
        <p >Paintball Club</p>
      </div>
      <HamburguerMenu></HamburguerMenu>
    </nav>
  )
}



export default Navbar