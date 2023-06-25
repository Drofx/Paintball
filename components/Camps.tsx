"use client"
import Image from 'next/image';
import React, { useState } from 'react'
import Lightbox from "yet-another-react-lightbox";
import Inline from "yet-another-react-lightbox/plugins/inline";
import "yet-another-react-lightbox/styles.css";

function Camps() {

	const [toggler, setToggler] = useState(false);

  const renderSlide = ({ slide }:any) => (
    <div className=' relative'>
      <div className=' z-50 text-white centered-div absolute inset-0 flex-col flex items-center justify-center'>
        <p>Desert</p>
        <p>Ver campo</p>
      </div>
      <img src={slide.src} alt={''} className='w-full object-fit brightness-25 ' />
    </div>
  );

  return (
    <div className='flex flex-col gap-3 w-full items-center'>
      <Lightbox
        open={true}
        plugins={[Inline]}
        inline={{ style: { width: "100%", maxWidth: "900px", aspectRatio: "3 / 2"} }}
        carousel={{
          padding: 0,
          spacing: 0,
          imageFit: "cover",
        }}
        styles={{ container: { backgroundColor: "rgba(0, 0, 0, .8)" } }}
        slides={[
          {src:`https://upload.wikimedia.org/wikipedia/commons/b/b6/Image_created_with_a_mobile_phone.png`},
          {src:`https://upload.wikimedia.org/wikipedia/commons/b/b6/Image_created_with_a_mobile_phone.png`},
          {src:`https://upload.wikimedia.org/wikipedia/commons/b/b6/Image_created_with_a_mobile_phone.png`},
          {src:`https://upload.wikimedia.org/wikipedia/commons/b/b6/Image_created_with_a_mobile_phone.png`}
        ]}
        render={{ slide: renderSlide }}
      /> 
    </div>
  )
}

export default Camps