"use client"

import React from 'react'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import menu from '../public/menu.svg'
import Link from 'next/link'
import x from '../public/x.svg'

const Navbar = () => {

  const [navStyle, setNavStyle] = useState(false);
  const [mobileMenuOpen,setMobileMenuOpen] = useState(false)
  
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
    <>
      <nav className={
        'fixed top-0 w-full flex border-zinc-800 transition-all items-center shadow-xl bg-zinc-900 justify-between px-6 left-0 z-50 '+(
          navStyle ? ' h-16' :' h-20 ')}>
        <div className="flex flex-col text-white">
          <p className=' font-bold text-lg'>TROPA DE CHOQUE</p>
          <p >Paintball Club</p>
        </div>
        <div className='h-full flex items-center justify-end flex-1' onClick={()=>setMobileMenuOpen(!mobileMenuOpen)}>
          <Image className='w-8 ' src={mobileMenuOpen?x:menu} alt={''}></Image>
        </div>
      </nav>      
      <div onClick={()=>setMobileMenuOpen(false)} className={'fixed w-full flex h-screen left-0 transition-all z-40 '+(mobileMenuOpen?"left-0":"left-full")+(navStyle ? ' pt-16' :' pt-20 ')}>
        <div className={'w-full text-white h-min flex-col bg-zinc-900 transition-all flex items-center justify-end'}>
          <Link href="#agendamento" className='border-t border-white w-full text-center py-2'>Agendamento</Link>
          <Link href="#campos" className='border-t border-white w-full text-center py-2'>Campos</Link>
          <Link href="#valores" className='border-t border-white w-full text-center py-2'>Valores</Link>
          <Link href="#jogo-aberto" className='border-t border-white w-full text-center py-2'>Jogo Aberto</Link>
        </div>
      </div>   
    </>
  )
}



export default Navbar