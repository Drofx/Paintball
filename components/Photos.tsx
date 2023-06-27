"use client"
import React from 'react'
import test from '@/public/test.jpg'
import PhotoAlbum, { RenderContainer, RenderPhoto } from 'react-photo-album'

function Photos() {

    const photos:any = [
        
    { id: "8gVv6nxq6gY", width: 1080, height: 800, src:"https://cdn1.yumping.com/emp/fotos/4/9/8/4/8/tm_p-49848-despedida-de-chicos-jugando-al-paintball_14945822183890.jpg" },
    { id: "Dhmn6ete6g8", width: 1080, height: 1620, src: "https://cdn1.yumping.com/emp/fotos/4/9/8/4/8/tm_p-49848-jugadoras-equipadas-para-paintball_1494582219932.jpg" },
    { id: "RkBTPqPEGDo", width: 1080, height: 720, src: "https://pr0.nicelocal.br.com/mGHhObIqumHG9WxSfLXqbg/630x384,q85/4px-BW84_n0QJGVPszge3NRBsKw-2VcOifrJIjPYFYkOtaCZxxXQ2S3CXcX2K5Ia2wdkiuSBtS0bH3A8QMs2ErWcQMX2FAfHiigHDAMnxVJt9Zv7ANoEOA" },
    { id: "Yizrl9N_eDA", width: 1080, height: 721, src: "https://cdn.shopify.com/s/files/1/0870/3392/files/armageddon.jpg?4305755741896503340"},
    { id: "Dhmn6ete6g8", width: 1080, height: 1620, src: "https://lh3.googleusercontent.com/p/AF1QipNfsLgCJ7u-5yok3Vm_yeElU5dBdzWQb-necYUj=s1280-p-no-v1" },
    { id: "Yizrl9N_eDA", width: 1080, height: 721, src: "https://www.paintballgames.co.uk/wp-content/uploads/2017/05/paintballing-team.jpg" },
    ]

    const renderPhoto: RenderPhoto = ({ layout, layoutOptions, imageProps: { alt, style, ...restImageProps } }) => (
      <div
          style={{
              borderRadius: "4px",
              boxSizing: "content-box",
              alignItems: "center",
              width: style?.width,
              paddingBottom: 0,
              objectFit:"cover"
          }}
      >
          <img alt={alt} style={{ ...style, width: "100%", padding: 0, objectFit:"cover",  }} {...restImageProps} />
      </div>
  );
    
  return (
    <div className='w-full'>
      <PhotoAlbum
        layout="rows"
        photos={photos}
        targetRowHeight={150}
        renderPhoto={renderPhoto}
      />
    </div>
  )
}

export default Photos