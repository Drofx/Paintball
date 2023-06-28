"use client"
import Image from 'next/image';
import React, { useState } from 'react'
import Lightbox from "yet-another-react-lightbox";
import Inline from "yet-another-react-lightbox/plugins/inline";
import "yet-another-react-lightbox/styles.css";

function Slider(props:any) {

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
        render={{
          slide: ({ slide }) => {
            return <Image className='w-full object-cover h-full' src={slide.src} width={1980} height={1080} alt={''}></Image>;
          }}}
      /> 
    </div>
  )
}

export default Slider