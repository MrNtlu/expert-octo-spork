import Link from 'next/link'
import React from 'react'
import { AiFillMail } from 'react-icons/ai'
import { BsFillPersonFill } from 'react-icons/bs'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'

const ContactIcons = () => {
    const _iconSize = 27;

    return (
        <>
            <a
                href='https://www.linkedin.com/in/burak-fidan/'
                target='_blank'
                rel='noreferrer'>
                <div className='rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                    <FaLinkedinIn size={_iconSize} />
                </div>
            </a>

            <a
                href='https://github.com/MrNtlu'
                target='_blank'
                rel='noreferrer'>
                <div className='rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                    <FaGithub size={_iconSize} />
                </div>
            </a>

            <a href="mailto:97burakfidan97@gmail.com">
                <div className='rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                    <AiFillMail size={_iconSize} />
                </div>
            </a>

            <Link href='/resume'>
                <a>
                    <div className='rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                        <BsFillPersonFill size={_iconSize} />
                    </div>
                </a>
            </Link>
        </>
    )
}

export default ContactIcons