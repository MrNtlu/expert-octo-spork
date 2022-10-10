import React from 'react'
import ContactIcons from './ContactIcons'

const Main = () => {
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

                    <div className='flex items-center justify-between max-w-[330px] m-auto py-4'>
                        <ContactIcons />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main