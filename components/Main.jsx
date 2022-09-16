import React from 'react'
import ContactIcons from './ContactIcons'

const Main = () => {
    return (
        <div className='w-full h-screen text-center'>
            <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
                <div>
                    <p className='uppercase text-sm tracking-widest text-gray-600'>Test example</p>

                    <h1 className='py-4 text-gray-700'>
                        Hi, I'm <span className='text-[#5651e5]'>Burak</span>
                    </h1>

                    <h1 className='py-4 text-gray-700'>
                        A Software Developer
                    </h1>

                    <p className='py-4 text-gray-600 max-w-[70%] m-auto'>
                        I'm a software developer ... bla bla etc etc
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