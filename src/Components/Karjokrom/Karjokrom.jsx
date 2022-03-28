import React from 'react'
import KarjokromSlider from './KarjokromSlider'
const Karjokrom = () => {
    return (
        <div className="">
            <div className=' py-2 px-2 flex lg:flex-row flex-col justify-between text-white ' id='karjokrom'>
                <div className="left_box lg:w-3/12 pr-2 space-y-2  lg:border-r-2 lg:border-gray-300 ">
                    <h1 className='text-2xl'>কার্যক্রম</h1>
                    <h2 className='text-md '>জাতি গঠনে সক্রিয় ভুমিকা পালন করুন, অংশগ্রহণ করুন সম্মিলিত কাজে, ব্লগ, মতপ্রকাশ এবং আলোচনায়।</h2>
                </div>
                {/* KarjokromSlider */}
                <KarjokromSlider />
            </div>
        </div>
    )
}

export default Karjokrom