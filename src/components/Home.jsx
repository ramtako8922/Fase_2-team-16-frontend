import React from 'react'
import Image from 'next/image'
import Link from 'next/link';
import Logo from '../../public/logo-2.svg';
import Logo2 from '../../public/logo.png';
import Icono from '../../public/caja.png';
import Icono2 from '../../public/grafico.png';
import Icono3 from '../../public/user.png';
import {
	RiTeamLine,
    RiLoginCircleLine
} from 'react-icons/ri';

function Home() {
  return (
    <div className='  w-full h-screen flex-col bg-slate-100 shrink-0 '>
      <nav className='bg-blue-500 flex justify-between   w-auto   p-2'>
        <div>
        <Image
        src={Logo}
							alt='logo'
							width={100}
							height={100}
                            >
        </Image>
        </div>
        
         <div className=' text-white gap-2 inline-flex xl:text-xl w-auto'>
            <Link href={'/auth/login'} className=' flex'><RiLoginCircleLine  className='mr-2 text-xl'/>Login</Link>
            <Link href={'/aboutus/Team'} className='flex'><RiTeamLine className=' mr-2 text-xl'/>Team</Link>
            </div>   
        
      </nav>
      <main className='mt-2 w-full  flex flex-wrap h-fit   lg:h-1/2 lg:flex-nowrap  shadow-2xl  '>
        <div className=' text-center text-5xl md:text-7xl text-blue-500 w-full lg:w-1/2 m  bg-white'>
            <h1 className=' mb-40 md:mt-40'>INVENTORY SYSTEM</h1>   
        </div>
        <div className=' w-full h-full lg:w-1/2 bg-blue-500 '>
        <Image className='mt-10 ml-60 pt-4 pb-4'
        src={Logo}
							alt='logo'
							width={250}
							height={250}
                            >
        </Image>

        </div>
      </main>
      <section className=' mt-10 lg:mt-10 w-full  flex flex-wrap    h-auto lg:flex-nowrap gap-3 bg-slate-100 pb-3 ' >
        
        <div className=' flex-col w:fit justify-between  md:flex-row  bg-white lg:w-1/3 gap-2 border-2 border-blue-500 w-full'>
        <div className=' w-full md:w-1/2 md:m-auto '>
        <Image className='m-auto pt-2 '
        src={Icono}
							alt='logo'
							width={150}
							height={150}
                            >
        </Image>

        </div>
        <div className=' text-center text-xl text-blue-500 w-full mr-2 '>
            <p className='mt-5'>Know the quantity of the products enter and leave your invntory  in real time</p>   
        </div>
        
        </div>
        <div className=' flex-col w:fit justify-between  md:flex-row  bg-white lg:w-1/3 gap-2 border-2 border-blue-500 w-full '>
        <div className='w-full md:w-1/2 md:m-auto '>
        <Image className='m-auto pt-2 '
        src={Icono2}
							alt='logo'
							width={150}
							height={150}
                            >
        </Image>

        </div>
        <div className='text-center text-xl text-blue-500 w-full  mr-2 '>
            <p className='mt-5'> Know the report about the products, categories and providers that you invetory contain</p>   
        </div>
        
        </div>
        <div className='  flex-col w:fit justify-between  md:flex-row  bg-white lg:w-1/3 gap-2 border-2 border-blue-500 w-full'>
        <div className='  w-full md:w-1/2 md:m-auto '>
        <Image className='m-auto pt-2 '
        src={Icono3}
							alt='logo'
							width={150}
							height={150}
                            >
        </Image>

        </div>
        <div className=' text-center text-xl text-blue-500 w-full  mr-2'>
            <p className='mt-5'> Take the control about the access of your employes in the inventory</p>   
        </div>
        
        </div>
        
      </section>
      
      <footer className='text-white bg-blue-500 text-center h-20   pt-2  mb-0 ' >
        <p>Todos los dererchos reservados 2023 &#169;Team 16 Devs Latam Try Cach</p> 

      </footer>
      
    </div>
  )
}

export default Home
