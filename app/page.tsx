import star from   "../public/star.svg"
import Camps from "@/components/Camps"
import Image from 'next/image'
import thumb from '../public/thumb.jpg'
import logo from '../public/logo.svg'
import militaryTexture from '../public/military-texture.jpg'
import menu from '../public/menu.svg'
import TextField from '@mui/material/TextField';
import OpenGame from "@/components/OpenGame"
import Form from "@/components/Form"



export default function Home() {
  return (
  <>
  <nav className='absolute top-0 h-20  w-full flex items-center justify-between px-6 left-0 z-50'>
    <div className="flex flex-col text-white">
      <p className=' font-bold text-2xl'>TROPA DE CHOQUE</p>
      <p >Paintball Club</p>
    </div>
    <Image className='w-7 ' alt="" src={menu}></Image>
  </nav>
  <header className='w-full h-screen flex flex-col justify-center items-center' >
    <Image src={thumb} className='absolute w-screen h-screen object-cover -z-50 object-top brightness-75' alt={''}></Image>
    <div className=' text-white flex flex-col w-full p-6 ' >
      <h1 className='text-4xl font-semibold'>Procurando um <br /> Campo de Paintball <br /> ou de Airsoft em <br /> Ribeirão?</h1>
      <h2 className='mt-3'>Aqui na Spider Paintball oferecemos todas essas atividades com uma estrutura completa e pensada  para você ter uma experiência inesquecível.</h2>
      <button className='bg-merge text-white-900 p-3 font-semibold shadow-lg w-fit mt-3 '>Agende um jogo agora!</button>
    </div>
  </header>
  <main className="flex flex-col  justify-between text-black  ">
  <section className='flex text-white flex-col gap-6 w-full p-6 items-center relative'>
    <div className="">
      <h2 className='font-bold w-full sm:max-w-96 text-center text-black-300 text-3xl p-1'>QUEM NÓS SOMOS?</h2>
      <p className='w-full lg:w-96 mt-3 text-center font-semibold text-lg'>Um dos melhores clubes de paintball de Ribeirão e toda sua região, nós somos a Tropa de Choque Paintball Clube
      </p>
      <p className='w-full lg:w-96 mt-3 text-center'>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio accusamus, incidunt perferendis quam laborum unde temporibus iure odio molestiae reprehenderit ipsa, et, quisquam quod voluptatibus qui
      </p>
    </div>
    <div className="flex w-full justify-center mt-3">
      <Image src={star} className="w-6" alt={""} width={24} height={24} />
      <Image src={star} className="w-6" alt={""} width={24} height={24} />
      <Image src={star} className="w-6" alt={""} width={24} height={24} />
      <Image src={star} className="w-6" alt={""} width={24} height={24} />
      <Image src={star} className="w-6" alt={""} width={24} height={24} />
    </div>
    <div className="absolute top-0 left-0 w-full  h-full  -z-50">
      <Image src={militaryTexture} className="w-screen h-screen object-cover" alt={""}  />
    </div>
  </section>
  </main>  
  <section className='flex flex-col w-full p-6 items-center bg-zinc-200 '>
    <div className="bg-zinc-100 shadow-2xl flex items-center  gap-3 flex-col p-6">
      <h2 className='bg-merge font-semibold text-white p-2 rounded-sm w-fit'>Equipamentos</h2>
      <p className="text-center">Lorem ipsum dolor sit, amet consectetur adipisicing elit. At omnis corrupti fugiat, deserunt minus suscipit natus iste reprehenderit aliquam enim itaque .</p>
    </div>
    <Camps></Camps>
  </section>
  <section className='flex flex-col w-full p-6 items-center bg-zinc-200 '>
    <div className="bg-zinc-100 shadow-2xl items-center flex flex-col gap-3 p-6">
      <h2 className='bg-merge  text-white p-2 rounded-sm w-fit font-semibold'>Nossos Campos</h2>
      <p className="text-center">Lorem ipsum dolor sit, amet consectetur adipisicing elit. At omnis corrupti fugiat, deserunt minus suscipit natus iste reprehenderit aliquam enim itaque .</p>
    </div>
    <Camps></Camps>
  </section>
  <section className='flex flex-col gap-6 w-full p-6 items-center'>
    <div className="bg-zinc-200 p-3 shadow-2xl">
      <h2 className='font-semibold w-full sm:max-w-96 text-center  text-black-300 text-lg p-1 '>Não possui com quem jogar? Venha para o jogo aberto!</h2>
      <p className='w-full lg:w-96 mt-3 text-center'>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio accusamus, incidunt perferendis quam laborum unde temporibus iure odio molestiae reprehenderit ipsa, et, quisquam quod voluptatibus qui 
      </p>
    </div>
    <OpenGame></OpenGame>
  </section>
  <Form/>
  <footer className="w-full h-64 bg-zinc-300 flex items-center justify-center">
    <p className="text-sm">DEVELOPED BY CONNECT STUDIO</p>
  </footer>
  </>

  )
}
