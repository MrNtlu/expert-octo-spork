import Image from 'next/image'
import Link from 'next/link';
import React from 'react'
import AboutImg from '../public/assets/about.jpg';

const About = () => {
  return (
    <div id='about' className='w-full md:h-screen p-2 flex items-center py-16 mt-12'>
        <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
            <div className='col-span-2'>
                <p className='uppercase text-xl tracking-widest text-[#5651e6]'>About</p>

                <h2 className='py-4'>Who I Am</h2>

                <p className='py-2 text-gray-600'>
                    Personal about text 
                    text
                    text
                </p>

                <Link href='/#projects'>
                    <p className='py-2 text-gray-600 underline cursor-pointer'>Check out my projects.</p>
                </Link>
            </div>

            <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
                <Image className='rounded-xl' src={AboutImg} alt="/" />
            </div>
        </div>
    </div>
  )
}

export default About