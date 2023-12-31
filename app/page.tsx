import star from   "../public/star.svg"
import Slider from "@/components/Slider"
import Image from 'next/image'
import thumb from '../public/thumb.jpg'
import militaryTexture from '../public/military-texture.svg'
import Form from "@/components/Form"
import Navbar from "@/components/Navbar"
import arma from '@/public/equipments/arma.jpg'
import colete from '@/public/equipments/colete.jpg'
import mascara from '@/public/equipments/mascara.jpg'
import Link from "next/link"
import {campo1,campo2,campo3,campo4} from '@/public/index'

export default function Home() {
  return (
  <>
    <Navbar></Navbar>
    <header  className=' w-full h-screen flex flex-col p-6 justify-center items-center' >
      <Image src={thumb} width={1980} height={1080} className='absolute w-screen h-screen object-cover -z-50 object-top brightness-25' alt={''}></Image>
      <div className='max-w-7xl text-white  flex flex-col w-full' >
        <h1 className='text-4xl font-semibold'>Procurando um <br /> Campo de Paintball <br /> em para se aventurar?</h1>
        <h2 className='mt-3 w-2/4'>Aqui na Tropa de Choque Paintball Clube, oferecemos todas essas atividades com uma estrutura completa e pensada  para você ter uma experiência inesquecível.</h2>
        <button className='bg-merge text-white-900 p-3 font-semibold shadow-lg w-fit mt-3 '>
          <Link href="#valores">Agende um jogo agora!</Link>  
        </button>
      </div>
    </header>
    <section  className='flex text-white flex-col gap-6 w-full p-6 items-center relative bg-url'>
      <div className="max-w-4xl">
        <h2 className='font-bold w-full sm:max-w-96 text-center text-black-300 text-3xl p-1'>SEJA BEM VINDO</h2>
        <p className='w-full  mt-3 text-center'>Entre no campo de batalha definitivo! Somos o destino para guerreiros implacáveis sedentos por adrenalina. Nossos cenários intensos, equipe altamente treinada e ênfase na estratégia e habilidade garantem confrontos épicos. Prepare-se para uma experiência de paintball de tirar o fôlego, onde apenas os mais destemidos sobrevivem. O desafio está lançado - você está pronto para enfrentá-lo?
        </p>        
        <div className="flex w-full justify-center mt-3">
          <Image src={star} className="w-6" alt={"Foto de estrela"} width={24} height={24} />
          <Image src={star} className="w-6" alt={"Foto de estrela"} width={24} height={24} />
          <Image src={star} className="w-6" alt={"Foto de estrela"} width={24} height={24} />
          <Image src={star} className="w-6" alt={"Foto de estrela"} width={24} height={24} />
          <Image src={star} className="w-6" alt={"Foto de estrela"} width={24} height={24} />
        </div>
     
      </div>
      <div className="absolute top-0 left-0 w-full h-full -z-50">
        <Image src={militaryTexture} className="w-full h-full object-cover" alt={""}  />
      </div>         
    </section>
    <section className='flex flex-col w-full p-6 items-center bg-zinc-200 '>
      <div className="max-w-7xl bg-zinc-100 w-full shadow-2xl flex items-center gap-3 flex-col">
        <div className="p-6 flex flex-col items-center  gap-3">
          <h2 className='bg-merge font-semibold text-white p-2 rounded-sm w-fit'>Equipamentos</h2>
          <p className="text-center">Com nossos equipamentos de paintball, você tem suporte para jogar com segurança e se divertir. Temos máscaras, marcadores e acessórios de qualidade para uma experiência incrível.</p>
        </div>
        <div className="w-full grid sm:grid-cols-3 gap-3">
          <div className="w-full flex items-center flex-col font-bold gap-3">
            <Image src={arma} className="shadow-lg w-full h-full" alt={"Imagem de arma"}></Image>
          </div>
          <div className="w-full flex items-center flex-col font-bold gap-3">
            <Image src={colete} className="shadow-lg w-full h-full" alt={"Imagem de colete"}></Image>
          </div>
          <div className="w-full flex items-center flex-col font-bold gap-3">
            <Image src={mascara} className="shadow-lg w-full h-full" alt={"Imagem de máscara"}></Image>
          </div>
        </div>
      </div>
    </section>
    <section id="campos" className='flex flex-col w-full p-6 items-center bg-zinc-200 '>
      <div className="max-w-7xl bg-zinc-100 shadow-2xl w-full flex items-center  flex-col">
        <div className="p-6 flex flex-col items-center  gap-3">
          <h2 className='bg-merge font-semibold text-white p-2 rounded-sm w-fit'>Nossos Campos</h2>
          <p className="text-center">Possuimos 4 campos a sua escolha, onde você ira poder destruir seus adversarios.</p>
        </div>
        <div className="w-full grid sm:grid-cols-2 gap-3">
          <div className="w-full relative flex items-center flex-col gap-3">
            <h3 className='bg-zinc-800 w-24 z-10 text-center text-white p-2 rounded-sm absolute top-0 left-0'>Latas </h3>
            <Slider slides={campo1}></Slider>
          </div>
          <div className="w-full relative flex items-center flex-col gap-3">
            <h3 className='bg-zinc-800 w-24 z-10 text-center text-white p-2 rounded-sm absolute top-0 left-0'>Favela</h3>
            <Slider slides={campo2}></Slider>
          </div>
          <div className="w-full relative flex items-center flex-col gap-3">
            <h3 className='bg-zinc-800 w-24 z-10 text-center text-white p-2 rounded-sm absolute top-0 left-0'>Mata</h3>
            <Slider slides={campo3}></Slider>
          </div>
          <div className="w-full relative flex items-center flex-col gap-3">
            <h3 className='bg-zinc-800 w-24 z-10 text-center text-white p-2 rounded-sm absolute top-0 left-0'>Em breve</h3>
            <Slider slides={campo4}></Slider>
          </div>
        </div>
      </div>
    </section>
    <section id="jogo-aberto" className='flex flex-col gap-6 w-full p-6 items-center bg-zinc-200 '>
      <div className="max-w-7xl flex flex-col bg-zinc-100 shadow-2xl md:flex-row">
        <div className="p-6 w-full md:w-2/4 flex flex-col items-center gap-3">
          <h2 className='bg-merge font-semibold text-white p-2 rounded-sm w-fit'>Jogo aberto</h2>
          <p className='w-full mt-3 text-center'>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio accusamus, incidunt perferendis quam laborum unde temporibus iure odio molestiae reprehenderit ipsa, et, quisquam quod voluptatibus qui 
          </p>
        </div>
        <div className="grid gap-3 md:w-2/4 grid-cols-2">
          <Image src={thumb} alt={""}></Image>
          <Image src={thumb} alt={""}></Image>
          <Image src={thumb} alt={""}></Image>
          <Image src={thumb} alt={""}></Image>
        </div>
      </div>
    </section>
    <section id="valores" className="w-full flex justify-center p-6 bg-zinc-200 items-center "> 
      <div className="max-w-7xl w-full flex flex-col  bg-zinc-200 md:flex-row-reverse ">
        <div className=" md:w-2/4 flex flex-col bg-zinc-100  p-6 gap-3">
          <h2 className='bold text-2xl font-bold mb-9'>Valores</h2>
          <div className="flex  w-full p-6 items-center bg-zinc-200 shadow-lg gap-3">
              <p className="font-semibold">R$40:</p>
              <div className="flex-col flex ">
                <p>1 Hora</p>
                <p>150 Bollinhas</p>
              </div>
          </div>
          <h3 className="font-bold" >Recargas:</h3>
          <div className="flex gap-3 w-full p-6 bg-zinc-200 shadow-lg ">
              <p className="font-semibold">R$15:</p>
              <p>50 Bollinhas</p>
          </div>
          <div className="flex gap-3 w-full p-6 bg-zinc-200 shadow-lg ">
              <p className="font-semibold">R$25:</p>
              <p>100 Bollinhas</p>
          </div>
          <div className="flex gap-3 w-full p-6 bg-zinc-200 shadow-lg">
              <p className="font-semibold">R$30:</p>
              <p>150 Bollinhas</p>
          </div>  
        </div>
        <div id="agendamento" className='md:w-2/4 gap-12 flex flex-col p-6 bg-zinc-100 '>
          <h2 className='font-bold text-2xl '>Agende seu jogo agora </h2>
          <Form/>
        </div>      
      </div>
    </section>
    <footer className="w-full h-64 bg-zinc-300 flex items-center justify-center">
    </footer>
  </>
  )
}
