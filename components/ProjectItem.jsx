import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Chip from './Chip'
import ProjectIcons from './ProjectIcons'

const ProjectItem = ({ project, backgroundImg }) => {
  return (
    <div className='relative h-full w-full shadow-xl shadow-gray-400 rounded-xl group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff]'>
      <div className='flex flex-col justify-center items-center py-4 px-6 gap-6 group-hover:opacity-5'>
        <Image className='rounded-xl' src={require(`../public/static/assets/projects/${backgroundImg}`)} alt='/' height={120} width={120} />

        <p className='grow w-full text-3xl font-bold'>{project.name}</p>

        <p className='grow text-lg whitespace-pre-line break-words w-full'>{project.description}</p>

        <div className='flex flex-wrap justify-center pt-3 gap-2 w-[90%]'>
          {project.tags.map((value, _) => {
            return <Chip key={value} tag={value} />
          })}
        </div>
      </div>

      <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-full'>
        <ProjectIcons github={project.github} appstore={project.appstore} playstore={project.playstore} iconSize={48} />

        <div className='flex flex-wrap gap-4 justify-center pt-6'>
          {/* <Link href={`project/${project.slug}`}>
            <p className='text-center w-36 py-3 rounded-lg bg-black text-white font-bold text-lg cursor-pointer hover:scale-110 ease-in duration-300'>More Info</p>
          </Link> */}

          {
            project.isLandingPageActive
              ? <Link href={`project/${project.slug}/landingpage`}>
                <p className='text-center w-36 py-3 rounded-lg bg-black text-white font-bold text-lg cursor-pointer hover:scale-110 ease-in duration-300'>Landing Page</p>
              </Link>
              : null
          }
        </div>
      </div>
    </div>
  )
}

export default ProjectItem