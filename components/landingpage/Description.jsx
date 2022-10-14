import React from 'react'
import Feature from './Feature'

function Description({ description, features }) {
    return (
        <div className="flex flex-col items-center justify-start px-[5rem] p-[5rem] relative z-[2] pt-[7rem] bg-[#FFFFFF]">
            <h2 className="pt-10 text-[5rem] text-black">Features</h2>
            <div className="headline flex flex-col text-center items-center text-[1.4rem] mt-8 text-black">
                <span>{description}</span>
            </div>
            <div className="feature mt-[5rem] grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 lg:gap-0 gap-6">
                {features.map((value, _) => {
                    return <Feature key={value.title} icon={value.icon} title={value.title} description={value.description} />
                })}
            </div>
        </div>
    )
}

export default Description