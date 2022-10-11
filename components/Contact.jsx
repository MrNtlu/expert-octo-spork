import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { HiOutlineChevronDoubleUp } from 'react-icons/hi';
import ContactImg from '../public/static/assets/contact.jpg'
import ContactIcons from './ContactIcons';

const Contact = () => {
    return (
        <div id='contact' className='w-full lg:h-screen pt-20'>
            <div className='max-w-[1240px] m-auto px-2 py-16 w-full '>
                <p className='text-xl tracking-widest uppercase text-[#5651e5]'>
                    Contact
                </p>
                <h2 className='py-4'>Get In Touch</h2>
                <div className='grid lg:grid-cols-5 gap-8'>

                    {/* left */}
                    <div className='col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4'>
                        <div className='lg:p-4 h-full'>
                            <div>
                                <Image
                                    className='rounded-xl hover:scale-105 ease-in duration-300'
                                    src={ContactImg}
                                    alt='/'
                                />
                            </div>
                            <div>
                                <h2 className='py-2'>Burak Fidan</h2>

                                <p>Software Developer</p>

                                <p className='py-4'>
                                    I am available for freelance or full-time positions. Feel free to contact me.
                                </p>
                            </div>

                            <div>
                                <p className='uppercase pt-8'>Connect With Me</p>

                                <div className='flex items-center justify-between py-4'>
                                    <ContactIcons />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* right */}
                    <div className='col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4'>
                        <div className='p-4'>
                            <form
                                action='https://getform.io/f/420ccfd0-282d-4b18-a59f-300cba147d7d'
                                method='POST'
                                encType='multipart/form-data' >

                                <div className='flex flex-col py-2'>
                                    <label className='uppercase text-sm py-2'>Name</label>
                                    <input
                                        className='border-2 rounded-lg p-3 flex border-gray-300'
                                        type='text'
                                        name='name'
                                    />
                                </div>

                                <div className='flex flex-col py-2'>
                                    <label className='uppercase text-sm py-2'>Email</label>
                                    <input
                                        className='border-2 rounded-lg p-3 flex border-gray-300'
                                        type='email'
                                        name='email'
                                    />
                                </div>

                                <div className='flex flex-col py-2'>
                                    <label className='uppercase text-sm py-2'>Subject</label>
                                    <input
                                        className='border-2 rounded-lg p-3 flex border-gray-300'
                                        type='text'
                                        name='subject'
                                    />
                                </div>

                                <div className='flex flex-col py-2'>
                                    <label className='uppercase text-sm py-2'>Message</label>
                                    <textarea
                                        className='border-2 rounded-lg p-3 border-gray-300'
                                        rows='10'
                                        name='message'
                                    ></textarea>
                                </div>

                                <button className='w-full p-4 text-gray-100 mt-4'>
                                    Send Message
                                </button>
                            </form>
                        </div>
                    </div>
                </div>

                <div className='flex justify-center py-12'>
                    <Link href='/'>
                        <a>
                            <div className='rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                                <HiOutlineChevronDoubleUp
                                    className='text-[#5651e5]'
                                    size={30}
                                />
                            </div>
                        </a>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Contact