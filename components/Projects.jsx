import React from 'react'
import ProjectItem from './ProjectItem';
import { PortfolioProjects } from '../constants/Projects'

const _baseImageDir = '/../public/assets/projects/'

const Projects = () => {
    return (
        <div id='projects' className='w-full'>
            <div className='max-w-[1240px] mx-auto px-2 pt-24'>
                <p className='text-xl tracking-widest uppercase text-[#5651e5]'>Projects</p>

                <h2 className='py-4'>What I&apos;ve Built</h2>

                <div className='grid md:grid-cols-2 gap-8'>
                    {PortfolioProjects.map((value, _) => {
                        let _image = _baseImageDir + value.slug + '.png'
                        return <li key={value.slug} className='list-none'>
                            <ProjectItem
                                project={value}
                                backgroundImg={_image} />
                        </li>
                    })}
                </div>
            </div>
        </div>
    )
}

export default Projects