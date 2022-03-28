import React from 'react'
import JonotarKothaSlider from './JonotarKothaSlider'

const JonotarKothaComponents = () => {
    return (
        <>
            <div className="w-full  pb-3" id='jonotarkotha'>
                <div className=' px-2 py-2' style={{ background: "#1d3a7c" }}>
                    <h1 className='text-4xl text-white mt-2' >
                        জনতার কথা
                    </h1>
                </div>
                <div className='relative'>
                    <a href="#">
                        <img src="assets/images/jonotarkotha/1.jpg" alt="not found" className='' />
                    </a>
                    <div className='w-full mx-auto lg:absolute mt-3 bottom-5 text-center'>
                        <h1 className='lg:text-indigo-800 text-gray-600'>সমসাময়িক গুরুপ্তপূণ বিসয়ে আপনার মতামত</h1>
                        <button className='bg-green-600 px-4 py-2 text-white rounded-lg'>পেইজে প্রবেশ করুন</button>
                    </div>
                </div>
            </div>
            <JonotarKothaSlider />
        </>
    )
}

export default JonotarKothaComponents