import React from 'react'
import { useLocation } from 'react-router-dom';
const TopicPage = () => {
    const Privious = () => {
        window.history.back()
    }
    const location = useLocation();
    return (
        <>
            <div className='py-4 lg:px-10 px-5'>
                <button onClick={Privious} className='bg-orange-500 text-white p-3 rounded-full'>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                    </svg>
                </button>
                <div className='mt-10 mb-10 lg:px-4'>
                    <img src={location.state.image} alt="img" className='w-full' style={{ height: "500px" }} />
                    <div className='mt-10'>
                        <div className="flex justify-between flex-col my-3 text-gray-400  ">
                            <div className=" flex gap-3 mb-2">
                                <a href="#">
                                    <img src="/assets/images/jonotarkotha/facebook.png" className="w-10" alt="fb" />
                                </a>
                                <a href="#">
                                    <img src="/assets/images/jonotarkotha/instagram.png" className="w-10" alt="insta" />
                                </a>
                            </div>
                            <div className='text-gray-900 my-5 space-y-2'>
                                <h1 className='text-2xl text-indigo-900'>{location.state.title1}</h1>
                                <h2 className='text-xl'>{location.state.title2}</h2>
                                <h2 className='text-xl'>{location.state.title3}</h2>
                            </div>
                            <div className='mt-10 text-gray-700 text-justify '>
                                <h1>
                                    {location.state.desc ? location.state.desc : <>
                                        আমরা সবাই জানি, কোভিড 19 সমগ্র বিশ্বকে একটি দুর্বিষহ জায়গা করে তুলেছে। বাংলাদেশ ২০২০ সালের মার্চ থেকে এখন পর্যন্ত কোভিড-১৯ মোকাবেলার জন্য যথাসাধ্য চেষ্টা করছে। আমরা বাংলাদেশের নাগরিকদের সাথে কিছু বুদ্ধিমত্তার ধারণা শেয়ার করতে চাই যা এই গুরুত্বপূর্ণ বিশ্ব মহামারী পরিস্থিতিতে বাংলাদেশের উন্নয়নে প্রভাব তৈরি করতে সাহায্য করবে। আমরা এমন ধারণা খুঁজছি যা বাংলাদেশের জন্য জীবনকে আরও উন্নত করে। "ইনোভেটিভ আইডিয়া শেয়ার কম্পিটিশন: 2021" প্রতিযোগিতার লক্ষ্য হল "ধারণা" তৈরি করা যা আমরা আমাদের সম্প্রদায়ে বাস্তবায়ন করতে পারি যা সম্প্রদায়ের জন্য একটি পার্থক্য তৈরি করবে।</>}
                                </h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TopicPage