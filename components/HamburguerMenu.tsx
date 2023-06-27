import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import menu from '../public/menu.svg';
import x from '../public/x.svg';
import './HamburguerMenu.css'

function HamburguerMenu() {
  const hamburguerMenuRef = useRef<HTMLDivElement>(null);
  const [hamburguerMenu, setHamburguerMenu] = useState(true);
  const [className, setClassName] = useState(true);

  function handleClose() {
    setClassName(!className)
  }

  useEffect(() => {
    hamburguerMenuRef.current?.addEventListener('animationend',()=>{
      if (className===false) {
        setHamburguerMenu(!hamburguerMenu)
        setClassName(!className)
      }
    },{once:true})
  }, [className,setHamburguerMenu])
  

  return (
    <div
      ref={hamburguerMenuRef}
      onClick={handleClose}
      className={className?"openIt":"closeIt"}
    >
      {hamburguerMenu ? (
        <Image className="w-10 cursor-pointer" alt="" src={menu} />
      ) : (
        <Image className="w-10 cursor-pointer" alt="" src={x} />
      )} 
    </div>
  );
}

export default HamburguerMenu;
