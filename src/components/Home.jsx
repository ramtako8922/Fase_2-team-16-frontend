import React from 'react'
import Image from 'next/image'
import Link from 'next/link';
import Logo from '../../public/logo-2.svg';
import Logo2 from '../../public/logo.png';
import {
	RiTeamLine,
    RiLoginCircleLine
} from 'react-icons/ri';

function Home() {
  return (
    <div>
      <nav className='bg-white flex justify-between   w-auto rounded-lg'>
        <div>
        <Image
        src={Logo}
							alt='logo'
							width={100}
							height={100}
                            >
        </Image>
        </div>
        
         <div className=' text-blue-500 gap-2 inline-flex xl:text-sm w-1/12'>
            <Link href={'/auth/login'} className=' flex'><RiLoginCircleLine  className='text-blue-500 xl:text-xl'/>Login</Link>
            <Link href={'/aboutus/Team'} className='flex'><RiTeamLine className='text-blue xl:text-xl'/>Team</Link>
            </div>   
        
      </nav>
      <main className='mt-4 flex h-[500px] '>
        <div className=' text-center text-7xl text-white w-1/2 bg-blue-500'>
            <h1 className='mt-40'>INVENTORY SYSTEM</h1>   
        </div>
        <div className='w-1/2 bg-white align-middle'>
        <Image className='m-auto pt-4 pb-4'
        src={Logo2}
							alt='logo'
							width={250}
							height={250}
                            >
        </Image>

        </div>
      </main>
      <section>
        <div></div>
      </section>
    </div>
  )
}

export default Home
