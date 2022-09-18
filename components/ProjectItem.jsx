import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Chip from './Chip'

const ProjectItem = ({ title, backgroundImg, tags, projectUrl }) => {
  return (
    <div className='relative h-[300px] w-full shadow-xl shadow-gray-400 rounded-xl group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff]'>
      <div className='flex flex-col justify-center items-center py-2 gap-2 group-hover:opacity-10'>
        <Image className='rounded-xl' src={backgroundImg} alt='/' height={120} width={120} />

        <p className='grow w-full text-center text-2xl font-bold'>{title}</p>

        <p className='grow text-lg'>{title}</p>

        <div className='flex gap-x-2 py-4'>
          {tags.map((value, _) => {
            return <Chip tag={value} />
          })}
        </div>
      </div>

      <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
        <h3 className='text-2xl text-white tracking-wider text-center'>{title}</h3>
        <p className='pb-4 pt-2 text-white text-center'>{tags}</p>
        <Link href={`project/${projectUrl}`}>
          <p className='text-center py-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer'>More Info</p>
        </Link>
      </div>
    </div>
  )
}

export default ProjectItem