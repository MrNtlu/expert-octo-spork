import React from 'react'
import { IoLogoGithub } from 'react-icons/io'
import { IoLogoGooglePlaystore } from 'react-icons/io5'
import { SiAppstore } from 'react-icons/si'

const ProjectIcons = ({ playstore = null, appstore = null, github = null, iconSize = 35 }) => {
    const _iconSize = iconSize;
    const _color = 'white'
    const _iconDivClass = 'rounded-full p-4 cursor-pointer hover:scale-150 ease-in duration-300'

    return (
        <div className='flex items-center justify-center py-4 gap-4'>
            {
                playstore != null
                    ? <a
                        href={playstore}
                        target='_blank'
                        rel='noreferrer'>
                        <div className={_iconDivClass}>
                            <IoLogoGooglePlaystore size={_iconSize} color={_color} />
                        </div>
                    </a>
                    : null
            }

            {
                appstore != null
                    ? <a
                        href={appstore}
                        target='_blank'
                        rel='noreferrer'>
                        <div className={_iconDivClass}>
                            <SiAppstore size={_iconSize} color={_color} />
                        </div>
                    </a>
                    : null
            }

            {
                github != null
                    ? <a
                        href={github}
                        target='_blank'
                        rel='noreferrer'>
                        <div className={_iconDivClass}>
                            <IoLogoGithub size={_iconSize} color={_color} />
                        </div>
                    </a>
                    : null
            }
        </div>
    )
}

export default ProjectIcons