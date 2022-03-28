import React from 'react'
import informationApi from './../../Apis/infomationApi';

const InformationCard = () => {
    return (
        <div className="container bg-white py-6 border-b-2">
            <div className=" mx-auto">
                <div className=' grid lg:grid-cols-4  px-3 lg:px-0'>
                    {
                        informationApi.map(({ id, image, color, number, title }) => {
                            return (
                                <div key={id} className='hover:shadow-xl hover:rounded-xl lg:px-1 duration-200 py-5 flex justify-center items-center  '>
                                    <img src={image} className='lg:w-28 w-24 ' alt="not found" />
                                    <div className='flex-grow px-3'>
                                        <h1 style={{ color }} className='mb-2 font-semibold text-3xl'>{number}</h1>
                                        <h1 className='text-md'>{title}</h1>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div >
            </div>
        </div >
    )
}

export default InformationCard