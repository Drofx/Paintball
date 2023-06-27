import star from   "../public/star.svg"
import Slider from "@/components/Slider"
import Image from 'next/image'
import thumb from '../public/thumb.jpg'
import militaryTexture from '../public/military-texture.jpg'
import Photos from "@/components/Photos"
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
    <header className='w-full h-screen flex flex-col justify-center items-center' >
      <Image src={thumb} className='absolute w-screen h-screen object-cover -z-50 object-top brightness-75' alt={''}></Image>
      <div className=' text-white flex flex-col w-full p-6 ' >
        <h1 className='text-4xl font-semibold'>Procurando um <br /> Campo de Paintball <br /> em para se aventurar?</h1>
        <h2 className='mt-3'>Aqui na Tropa de Choque Paintball Clube, oferecemos todas essas atividades com uma estrutura completa e pensada  para você ter uma experiência inesquecível.</h2>
        <button className='bg-merge text-white-900 p-3 font-semibold shadow-lg w-fit mt-3 '>
          <Link href="#valores">Agende um jogo agora!</Link>  
        </button>
      </div>
    </header>
    <main className="flex flex-col  justify-between text-black  ">
    <section className='flex text-white flex-col gap-6 w-full p-6 items-center relative'>
      <div className="">
        <h2 className='font-bold w-full sm:max-w-96 text-center text-black-300 text-3xl p-1'>SEJA BEM VINDO</h2>
        <p className='w-full lg:w-96 mt-3 text-center'>Entre no campo de batalha definitivo! Somos o destino para guerreiros implacáveis sedentos por adrenalina. Nossos cenários intensos, equipe altamente treinada e ênfase na estratégia e habilidade garantem confrontos épicos. Prepare-se para uma experiência de paintball de tirar o fôlego, onde apenas os mais destemidos sobrevivem. O desafio está lançado - você está pronto para enfrentá-lo?
        </p>
      </div>
      <div className="flex w-full justify-center mt-3">
        <Image src={star} className="w-6" alt={"Foto de estrela"} width={24} height={24} />
        <Image src={star} className="w-6" alt={"Foto de estrela"} width={24} height={24} />
        <Image src={star} className="w-6" alt={"Foto de estrela"} width={24} height={24} />
        <Image src={star} className="w-6" alt={"Foto de estrela"} width={24} height={24} />
        <Image src={star} className="w-6" alt={"Foto de estrela"} width={24} height={24} />
      </div>
      <div className="absolute top-0 left-0 w-full  h-full  -z-50">
        <Image src={militaryTexture} className="w-screen h-screen object-cover" alt={""}  />
      </div>
    </section>
    </main>  
    <section className='flex flex-col w-full p-6 items-center bg-zinc-200 '>
      <div className="bg-zinc-100 shadow-2xl flex items-center gap-3 flex-col">
        <div className="p-6 flex flex-col items-center  gap-3">
          <h2 className='bg-merge font-semibold text-white p-2 rounded-sm w-fit'>Equipamentos</h2>
          <p className="text-center">Com nossos equipamentos de paintball, você tem suporte para jogar com segurança e se divertir. Temos máscaras, marcadores e acessórios de qualidade para uma experiência incrível.</p>
        </div>
        <div className="w-full flex items-center flex-col font-bold gap-3">
          <Image src={arma} className="shadow-lg" alt={"Imagem de arma"}></Image>
        </div>
        <div className="w-full flex items-center flex-col font-bold gap-3">
          <Image src={colete} className="shadow-lg" alt={"Imagem de colete"}></Image>
        </div>
        <div className="w-full flex items-center flex-col font-bold gap-3">
          <Image src={mascara} className="shadow-lg" alt={"Imagem de máscara"}></Image>
        </div>
      </div>
    </section>
    <section className='flex flex-col w-full p-6 items-center bg-zinc-200 '>
      <div className="bg-zinc-100 shadow-2xl flex items-center gap-3 flex-col">
        <div className="p-6 flex flex-col items-center  gap-3">
          <h2 className='bg-merge font-semibold text-white p-2 rounded-sm w-fit'>Nossos Campos</h2>
          <p className="text-center">Possuimos 4 campos a sua escolha, onde você ira poder destruir seus adversarios.</p>
        </div>
        <div className="w-full flex items-center flex-col font-bold gap-3">
          <Slider slides={campo1}></Slider>
        </div>
        <div className="w-full flex items-center flex-col font-bold gap-3">
          <Slider slides={campo2}></Slider>
        </div>
        <div className="w-full flex items-center flex-col font-bold gap-3">
          <Slider slides={campo3}></Slider>
        </div>
        <div className="w-full flex items-center flex-col font-bold gap-3">
          <Slider slides={campo4}></Slider>
        </div>
      </div>
    </section>
    <section className='flex flex-col gap-6 w-full p-6 items-center'>
      <div className="bg-zinc-200 shadow-2xl">
        <div className="p-6 flex flex-col items-center  gap-3">
          <h2 className='font-semibold w-full sm:max-w-96 text-center  text-black-300 text-lg p-1 '>Não possui time para jogar? Venha para o jogo aberto!</h2>
          <p className='w-full lg:w-96 mt-3 text-center'>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio accusamus, incidunt perferendis quam laborum unde temporibus iure odio molestiae reprehenderit ipsa, et, quisquam quod voluptatibus qui 
          </p>
        </div>
        <Photos></Photos>
      </div>
    </section>
    <section id="valores" className="w-full gap-3 flex flex-col p-6"> 
        <h2 className='bold text-2xl font-bold mb-9'>Valores</h2>
        <h3 className="font-bold">Preço por jogo:</h3>
        <div className="flex gap-3 w-full p-6 items-center bg-zinc-200 shadow-lg">
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
    </section>
    <section  className='w-full gap-12 flex flex-col p-6'>
        <h2 className='font-bold text-2xl '>Agende seu jogo agora </h2>
        <Form/>
    </section>
    <footer className="w-full h-64 bg-zinc-300 flex items-center justify-center">
      <p className="text-sm">DEVELOPED BY CONNECT STUDIO</p>
    </footer>
  </>

  )
}
