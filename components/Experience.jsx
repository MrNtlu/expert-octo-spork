import Image from 'next/image'
import Link from 'next/link';
import React from 'react'
import AboutImg from '../public/assets/about.jpg';
import { PortfolioExperiences } from '../constants/Experiences'

const About = () => {
    return (
        <div id='experience' className='w-full p-2 flex items-center mt-12 pt-24'>
            <div className='max-w-[1240px] m-auto md:grid grid-cols-5 gap-6'>
                <div className='lg:col-span-3 md:col-span-5'>
                    <p className='uppercase text-xl tracking-widest text-[#5651e6]'>Experience</p>

                    <h2 className='py-4'>Work Experience</h2>

                    <div className='flex flex-col gap-y-3 h-screen overflow-scroll w-full'>
                        {PortfolioExperiences.map((value, _) => {

                            return <div key={value.company} className="p-5 bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100">
                                <p className="mb-2 text-lg font-bold text-gray-900">{value.company}</p>

                                <p className='text-black text-lg font-medium'>{value.position} <span className='font-medium'>|</span> {value.start_date} {value.end_date != null ? '- ' + value.end_date : null}</p>

                                <p className="text-gray-700 pt-2">{value.description}</p>
                            </div>
                        })}
                        <Link href='/#projects'>
                            <p className='py-3 font-bold text-gray-600 underline cursor-pointer w-full text-end'>Check out my projects</p>
                        </Link>
                    </div>
                </div>

                <div className='lg:col-span-2 lg:visible md:invisible w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
                    <Image className='rounded-xl' src={AboutImg} alt="/" />
                </div>
            </div>
        </div>
    )
}

export default About