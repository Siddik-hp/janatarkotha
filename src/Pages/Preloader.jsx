import React from 'react'

const Preloader = () => {
    return (
        <>
            <div className='preloader bg-white fixed top-0 left-0 right-0 w-full h-full flex justify-center items-center'>
                <div className='space-y-4 text-center'>
                    <img src="/assets/images/header/logo.png" alt="preloader" className='w-32 ' />
                    <h1 className='text-xl font-bold'>Loading...</h1>
                </div>
            </div>
        </>
    )
}

export default Preloader