"use client"
import Image from 'next/image';
import React, { useState } from 'react'
import Lightbox from "yet-another-react-lightbox";
import Inline from "yet-another-react-lightbox/plugins/inline";
import "yet-another-react-lightbox/styles.css";

function Slider(props:any) {

	const [toggler, setToggler] = useState(false);

  const renderSlide = ({ slide }:any) => (
    <div className=' relative w-full h-full'>
      <div className=' z-50 text-white centered-div absolute inset-0 flex-col flex items-center justify-center'>
        <p>Ver Foto</p>
      </div>
      <img src={slide.src} alt={''} className=' object-cover h-full w-full brightness-50 ' />
    </div>
  );

  return (
    <div className='flex flex-col gap-3 w-full items-center'>
      <Lightbox
        open={true}
        plugins={[Inline]}
        inline={{ style: { width: "100%",height:"100%", maxWidth: "900px", aspectRatio: "3 / 2"} }}
        carousel={{
          padding: 0,
          spacing: 0,
          imageFit: "cover",
        }}
        styles={{ container: { backgroundColor: "rgba(0, 0, 0, .8)" } }}
        slides={props.slides}
        render={{ slide: renderSlide }}
      /> 
    </div>
  )
}

export default Slider