import React from 'react'

const Loader = () => {
    return (
        <div className='bg-white  h-full w-fit rounded-full p-8   justify-center items-center'>
            <span className="loading text-red-500 loading-dots loading-lg"></span>
        </div>
    )
}

export default Loader