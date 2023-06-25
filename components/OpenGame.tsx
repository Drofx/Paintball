import React from 'react'
import test from '@/public/test.jpg'
import PhotoAlbum from 'react-photo-album'



function OpenGame() {

    const photos:any = [
        
    { id: "8gVv6nxq6gY", width: 1080, height: 800, src: test.src },
    { id: "Dhmn6ete6g8", width: 1080, height: 1620, src: test.src },
    { id: "RkBTPqPEGDo", width: 1080, height: 720, src: test.src },
    { id: "Yizrl9N_eDA", width: 1080, height: 721, src: test.src },
    { id: "Dhmn6ete6g8", width: 1080, height: 1620, src: test.src },
    { id: "Yizrl9N_eDA", width: 1080, height: 721, src: test.src },
    ]

  return (
    <div className='w-full'>
      <PhotoAlbum
        layout="rows"
        photos={photos}
        targetRowHeight={150}
      />
    </div>
  )
}

export default OpenGame