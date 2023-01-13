import React from 'react'
import { AiFillMail, AiOutlineMedium } from 'react-icons/ai'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'
import Link from 'next/link'


const Main = () => {
    const _iconSize = 27;

    return (
        <div className='w-full h-screen text-center'>
            <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
                <div>
                    <p className='uppercase text-sm tracking-widest text-gray-600'>Istanbul - Turkey</p>

                    <h1 className='py-4 text-gray-700'>
                        Hi, I&apos;m <span className='text-[#5651e5]'>Burak</span>
                    </h1>

                    <h1 className='py-4 text-gray-700'>
                        A Software Developer
                    </h1>

                    <p className='py-4 text-gray-600 max-w-[70%] m-auto'>
                        Computer Engineering Student and Developer
                    </p>

                    <div className='flex items-center justify-between max-w-[330px] m-auto py-6'>
                        <div className='flex flex-col gap-4 w-full'>
                            <a
                                href='https://www.linkedin.com/in/burak-fidan/'
                                target='_blank'
                                rel='noreferrer'>
                                <div className='flex flex-row rounded-2xl bg-[#5651e5] py-3 px-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                                    <div className='row-span-2'><FaLinkedinIn color='#FFFFFF' size={_iconSize} /></div>
                                    <div className='w-full text-[1.15rem] font-medium content-center text-[#FFFFFF]'>Linkedin</div>
                                </div>
                            </a>

                            <a
                                href='https://github.com/MrNtlu'
                                target='_blank'
                                rel='noreferrer'>
                                <div className='flex flex-row rounded-2xl bg-[#5651e5] shadow-lg shadow-gray-400 py-3 px-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                                    <div className='row-span-2'><FaGithub color='#FFFFFF' size={_iconSize} /></div>
                                    <div className='w-full text-[1.15rem] font-medium content-center text-[#FFFFFF]'>Github</div>
                                </div>
                            </a>

                            <a href="mailto:97burakfidan97@gmail.com">
                                <div className='flex flex-row rounded-2xl bg-[#5651e5] shadow-lg shadow-gray-400 py-3 px-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                                    <div className='row-span-2'><AiFillMail color='#FFFFFF' size={_iconSize} /></div>
                                    <div className='w-full text-[1.15rem] font-medium content-center text-[#FFFFFF]'>Mail</div>
                                </div>
                            </a>

                            <Link href='https://burakdev.medium.com/'>
                                <a>
                                    <div className='flex flex-row rounded-2xl bg-[#5651e5] shadow-lg shadow-gray-400 py-3 px-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                                        <div className='row-span-2'><AiOutlineMedium color='#FFFFFF' size={_iconSize} /></div>
                                        <div className='w-full text-[1.15rem] font-medium content-center text-[#FFFFFF]'>Medium</div>
                                    </div>
                                </a>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main