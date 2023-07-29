import React from 'react'
import Image from 'next/image'
import picture from '../../public/oig.jpg'
import picture2 from '../../public/rm.jpg'
import picture3 from '../../public/av.jpg'
import picture4 from '../../public/fa.jpg'
import picture5 from '../../public/ff.jpg'
import picture6 from '../../public/jr.jpg'
import Link from 'next/link'
import { motion } from 'framer-motion'
import {
  RiLinkedinFill,
  RiGithubFill
} from 'react-icons/ri';

export default function Team() {
  return (
    <>
    <div>
      <h1 className=' font-medium text-center mt-10 text-2xl'><span className='text-2xl text-purple-500'></span>Team</h1>
      <h2 className='text-center text-2xl mt-4  font-medium '>Team Lead</h2>
      <div className='flex-col  p-4 md:flex md:w-[700px] md:m-auto'>
        <motion.div className=' shadow-xlwhite flex mt-4 gap-4 w-full bg-white'  initial={{opacity:0, scale:0.5}} animate={{opacity:1,scale:1}} transition={{duration:1}}>
          <div className='shrink-0' >
            <Image className='h-full' src={picture4}
              width={250} />

          </div>
          <div className=' inline ' >
            <p className='text-purple-500'>Franklin Andres Rodriguez Gonzalez</p>
            <h4 className='font-medium'>Nacionalidad:<span>Colombia</span></h4>
            <h4 className='font-medium'>Perfil</h4>
            <p className=''>Fundador de TechLeap, Scrum Master en Try Catch.tv</p>
            <h4 className='font-medium'>Redes sociales</h4>
            <div className='inline-flex gap-2'>
              <Link href="https://www.linkedin.com/in/franklin-andres-rodriguez-gonzalez-7b7663272/"><RiLinkedinFill className='text-purple-500 text-2xl' /></Link>
              <Link href="https://github.com/FranklinAndresNegusNet"><RiGithubFill className='text-purple-500 text-2xl' /></Link>
            </div>
            </div>
          </motion.div>
          </div>
        </div>
    

    <h2 className='text-center text-2xl mt-8  font-medium '>Backend Team</h2>
    
    <div className='flex-col w-full gap-4 p-4  md:flex xl:flex-row  '>
        
        <motion.div className=' shadow-xl m-auto flex mt-4 md:w-[700px] xl:w-1/3  bg-white  gap-2'  initial={{opacity:0, scale:0.5}} animate={{opacity:1,scale:1}} transition={{duration:1}}>
          <div className='shrink-0 '>
            <Image className='h-full' src={picture5}
              width={250} />
          </div>
          <div className='w-1/2 inline'>
            <p className='text-purple-500'>Fabrizio Ferroni </p>
            <h4 className='font-medium'>Nacionalidad: <span>Argentina</span></h4>
            <h4 className='font-medium'>Perfil</h4>
            <p className=''>Desarrollador web full stack JR</p>
            <h4 className='font-medium'>Redes sociales</h4>
            <div className='inline-flex gap-2'>
              <Link href="https://www.linkedin.com/in/fabrizio-ferroni/"><RiLinkedinFill className='text-purple-500 text-2xl' /></Link>
              <Link href="https://github.com/FabrizioFerroni"><RiGithubFill className='text-purple-500 text-2xl' /></Link>
            </div>
          </div>
        </motion.div>

        <motion.div className='shadow-xl m-auto bg-white flex mt-4 md:w-[700px] xl:w-1/3    gap-2' initial={{opacity:0, scale:0.5}} animate={{opacity:1,scale:1}} transition={{duration:1}}>
          <div className='shrink-0 '>
            <Image className='object-cover h-full ' src={picture6}
              width={250} />
          </div>
          <div className=' w-1/2 inline'>
            <p className='text-purple-500'>Julio Román </p>
            <h4 className='font-medium'>Nacionalidad: <span>Perú</span></h4>
            <h4 className='font-medium'>Perfil</h4>
            <p >Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <h4 className='font-medium'>Redes sociales</h4>
            <div className='inline-flex gap-2'>
              <Link href="https://github.com/jromanz"><RiGithubFill className='text-purple-500 text-2xl' /></Link>
            </div>
          </div>
        </motion.div>

        <motion.div className='shadow-xl m-auto flex mt-4 md:w-[700px] xl:w-1/3 bg-white   gap-2' initial={{opacity:0, scale:0.5}} animate={{opacity:1,scale:1}} transition={{duration:1}}>
          <div className='shrink-0 '>
            <Image className='object-cover h-full'  src={picture}
             width={250} />
          </div>
          <div className='w-1/2 inline'>
            <p className='text-purple-500'>Kevin JH </p>
            <h4 className='font-medium'>Nacionalidad: <span>Colombia</span></h4>
            <h4 className='font-medium'>Perfil</h4>
            <p className=''>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <h4 className='font-medium'>Redes sociales</h4>
            <div className='inline-flex gap-2'>
              <Link href="#"><RiLinkedinFill className='text-purple-500 text-2xl' /></Link>
              <Link href="#"><RiGithubFill className='text-purple-500 text-2xl' /></Link>
            </div>
          </div>
        </motion.div>
      </div>
      
      <h2 className='text-center text-2xl mt-8 font-medium '>Frontend Team</h2>
      <div className='flex-col w-full gap-4 p-4  md:flex xl:flex-row'>


        <motion.div className=' shadow-xl m-auto flex mt-4 md:w-[700px] xl:w-1/3 bg-white   gap-2' initial={{opacity:0, scale:0.5}} animate={{opacity:1,scale:1}} transition={{duration:1}}>
          <div className='shrink-0'>
            <Image className=' object-cover h-full'  src={picture3}
              width={250} />
          </div>
          <div className='w-1/2 inline'>
            <p className='text-purple-500'>Andres Valencia </p>
            <h4 className='font-medium'>Nacionalidad: <span>Mexico</span></h4>
            <h4 className='font-medium'>Perfil</h4>
            <p className=''>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <h4 className='font-medium'>Redes sociales</h4>
            <div className='inline-flex gap-2'>
              <Link href="https://www.linkedin.com/in/andres-valencia-8b792b103/"><RiLinkedinFill className='text-purple-500 text-2xl' /></Link>
              <Link href="https://github.com/sirandresitog"><RiGithubFill className='text-purple-500 text-2xl' /></Link>
            </div>
          </div>
        </motion.div>

        <motion.div className=' shadow-xl m-auto flex mt-4 md:w-[700px] xl:w-1/3   bg-white gap-2'  initial={{opacity:0, scale:0.5}} animate={{opacity:1,scale:1}} transition={{duration:1}}>
          <div>
            <Image className='shrink-0 h-full' src={picture2}
              width={250} />
          </div>
          <div className='w-1/2 inline'>
            <p className='text-purple-500'>Ricardo Mejía </p>
            <h4 className='font-medium'>Nacionalidad: <span>Colombia</span></h4>
            <h4 className='font-medium'>Perfil</h4>
            <p className=''>JR Full-Stack Developer,REACT JS, JAVA, C#, VUE JS</p>
            <h4 className='font-medium'>Redes sociales</h4>
            <div className='inline-flex gap-2'>
              <Link href="https://www.linkedin.com/in/ricardo-andres-mejia-cordoba/"><RiLinkedinFill className='text-purple-500 text-2xl' /></Link>
              <Link href="https://github.com/ramtako8922"><RiGithubFill className='text-purple-500 text-2xl' /></Link>
            </div>
          </div>
        </motion.div>

      </div>
    
    </>







  )
}


