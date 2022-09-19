import React from 'react'

const Chip = ({tag}) => {
    return (
        <div className="flex flex-wrap justify-center space-x-2">
            <span
                className="px-4 py-2 rounded-full text-black bg-gray-300 font-semibold text-sm flex align-center w-max cursor-pointer active:bg-gray-300 transition duration-300 ease">
                {tag}
            </span>
        </div>
    )
}

export default Chip