import React, { useState, useEffect } from 'react'
import SelectedMenuCard from '../../Components/SelectedMenu/SelectedMenuCard';
import SelectedMenuCardApi from './../../Apis/SelectedMenuCardApi';

const CardShowing = () => {
    // api
    const [loading, setLoading] = useState(true)
    const [data, setData] = useState(SelectedMenuCardApi)
    const [itemsTitle, SetItemsTitle] = useState('')
    useEffect(() => {
        setData(SelectedMenuCardApi)
        setLoading(false)

    }, [])
    // filterfunction
    const filterResult = (cardItem) => {
        SetItemsTitle(cardItem)
        const updatedItems = SelectedMenuCardApi.filter((elem) => {
            return elem.karjokrom === cardItem;
        })
        setData(updatedItems)
    }

    // filtering
    const filtering = (currentElem) => {
        const updatedItem = SelectedMenuCardApi.filter((elem) => {
            return elem.montronaloy === currentElem
        })
        setData(updatedItem)
    }


    // filterWithOpenEnd 
    const filterWithOpenEnd = (curentElem) => {
        const updatedItem = SelectedMenuCardApi.filter((curelem) => {
            return curelem.sheti === curentElem
        })
        setData(updatedItem)
    }

    // Search Filter
    const [search, setSearchData] = useState('')
    const handleinput = (e) => {
        setSearchData(e.target.value)
    }


    return (
        <>
            <div className='mb-10'>
                {/* selected Card */}
                <div className='grid lg:grid-cols-7 gap-4 px-4 py-6' style={{ background: "#1D3A7C" }}>
                    {/* =========মন্তনালয় /বিভাগ  =======*/}
                    <div>
                        <label htmlFor="countries" className="block mb-2 font-medium text-white lg:text-center text-md">মন্ত্রণালয় / বিভাগ:</label>
                        <select id="countries" className="overflow-y-scroll bg-cyan-500 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 px-4 mt-2 ">
                            <option onClick={() => setData(SelectedMenuCardApi)}>সব</option>
                            <option onClick={() => filtering("কৃষি মন্ত্রণালয়")}>কৃষি মন্ত্রণালয়</option>
                            <option onClick={() => filtering("তথ্য ও যোগাযোগ প্রযুক্তি বিভাগ")}>তথ্য ও যোগাযোগ প্রযুক্তি বিভাগ</option>
                            <option onClick={() => filtering("কারিগরি ও মাদ্রাসা বিভাগ")}>কারিগরি ও মাদ্রাসা বিভাগ</option>
                            <option onClick={() => filtering("স্থানীয় সরকার বিভাগ")}>স্থানীয় সরকার বিভাগ</option>
                            <option onClick={() => filtering("পল্লিউন্নয়ন ও সনবায় বিভাগ")}>পল্লিউন্নয়ন ও সনবায় বিভাগ</option>
                            <option onClick={() => filtering("ডাক ও টেলিযোগাযোগ বিভাগ")}>ডাক ও টেলিযোগাযোগ বিভাগ</option>
                            <option onClick={() => filtering("সাস্থ্য সেবা বিভাগ")}>সাস্থ্য সেবা বিভাগ</option>
                            <option onClick={() => filtering("প্রাথমিক ও গনশিক্ষা মন্ত্রণালয়")}>প্রাথমিক ও গনশিক্ষা মন্ত্রণালয়</option>
                            <option onClick={() => filtering("কৃষি মন্ত্রণালয়")}>মাধ্যমিক ও উচ্চশিক্ষা বিভাগ</option>
                            <option onClick={() => filtering("মাধ্যমিক ও উচ্চশিক্ষা বিভাগ")}>খাদ্য মন্ত্রণালয়</option>
                            <option onClick={() => filtering("সমাজ কল্যাণ মন্ত্রণালয়")}>সমাজ কল্যাণ মন্ত্রণালয়</option>
                            <option onClick={() => filtering("চিকিৎসা শিক্ষা ও পরিবার কল্যাণ বিভাগ")}>চিকিৎসা শিক্ষা ও পরিবার কল্যাণ বিভাগ</option>
                        </select>
                    </div>
                    {/* ============ কার্যকম ======= */}
                    <div>
                        <label htmlFor="countries" className="block mb-2 font-medium text-white lg:text-center text-md">কাযর্কম</label>
                        <select id="countries" className="overflow-y-scroll bg-orange-600 rounded-lg  block w-full p-2.5 px-4 mt-2 ">
                            <option onClick={() => filterResult("জনতার কথা")}>
                                জনতার কথা
                            </option>
                            <option value="/cetagory/1" onClick={() => filterResult("চলুন করি")}> চলুন করি</option>
                            <option value="/cetagory/2" onClick={() => filterResult("মুক্ত সভা")}>মুক্ত সভা</option>
                            <option value="/cetagory/3" onClick={() => filterResult("মত প্রকাশ")}>মত প্রকাশ</option>
                            <option value="/cetagory/4" onClick={() => filterResult("সৃজনশীল কণার")}>সৃজনশীল কণার</option>
                            <option value="/cetagory/5" onClick={() => filterResult("আমাদের ব্লগ")}>আমাদের ব্লগ</option>
                            <option value="/cetagory/6" onClick={() => filterResult("চলুন কথা বলি")}>চলুন কথা বলি</option>
                            <option value="/cetagory/7" onClick={() => filterResult("সাস্থ্য সেবা বিভাগ")}>সাস্থ্য সেবা বিভাগ</option>
                            <option value="/cetagory/8" onClick={() => filterResult("গনমাধ্যম")}>গনমাধ্যম</option>
                        </select>
                    </div>

                    {/* ============ 😘 সৃতি ============== */}
                    <div>
                        <label htmlFor="countries" className="block mb-2 font-medium text-white lg:text-center text-md">স্থিতি</label>
                        <select id="countries" className="bg-white rounded-lg  block w-full p-2.5 px-4 mt-2 ">
                            <option onClick={() => setData(SelectedMenuCardApi)}>সব</option>
                            <option onClick={() => filterWithOpenEnd("চালু")}>চালু</option>
                            <option onClick={() => filterWithOpenEnd("সমাপ্ত")}>সমাপ্ত</option>
                        </select>
                    </div>

                    {/* ============ 😘 Start Date ============== */}
                    <div className='lg:text-center text-white'>
                        <label htmlFor="datepicker ">তারিখ হতে : </label>
                        <div className="relative mt-2">
                            <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                                <svg className="w-5 h-5 text-black " fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"></path></svg>
                            </div>
                            <input type="date" className="bg-gray-50 text-sm block w-full pl-10 p-3 text-gray-800 rounded-md datepicker-input" placeholder="Select stating date" />
                        </div>
                    </div>

                    {/* ============ 😘 End Date ============== */}
                    <div className='lg:text-center text-white'>
                        <label htmlFor="datepicker ">তারিখ পযন্ত : </label>
                        <div className="relative mt-2">
                            <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                                <svg className="w-5 h-5 text-black " fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"></path></svg>
                            </div>
                            <input type="date" className="bg-gray-50 text-sm block w-full pl-10 p-3 text-gray-800 rounded-md datepicker-input" placeholder="Select end date" />
                        </div>
                    </div>

                    {/* ============ 😘 search bar ============== */}
                    <div className='lg:text-center text-white'>
                        <label htmlFor="datepicker ">অনুসন্ধান : </label>
                        <input type="search" value={search} onChange={handleinput} className="bg-gray-50 text-sm block w-full pl-10 p-3 mt-2 text-gray-800 rounded-md outline-none " placeholder="অনুসন্ধান কর" />
                    </div>

                    {/* ============ 😘 কমানুসারে bar ============== */}
                    <div>
                        <label htmlFor="countries" className="block mb-2 font-medium text-white lg:text-center text-md">ক্রমানুসারে : </label>
                        <select id="countries" className="bg-white rounded-lg  block w-full p-2.5 px-4 mt-2 ">
                            <option>সর্বশেষ</option>
                            <option>সবচেয়ে পুরনো</option>
                            <option>সবাধিক মন্তব্য করা হয়েছে</option>
                        </select>
                    </div>

                </div>

                {/* end Selected car */}
                <div className='my-2 lg:px-10'>
                    <div className='px-4'>
                        <h1 className='lg:text-2xl text-xl my-4 font-semibold '><span className='text-indigo-900 text-3xl'>
                            {itemsTitle ? itemsTitle : "জনতার কথা"}   </span>গণপ্রজাতন্ত্রী বাংলাদেশ সরকারের অধীনে</h1>
                    </div>
                    {
                        loading ? <h1>Loading Data</h1> : <>
                            <div className=' grid lg:grid-cols-3 sm:grid-cols-2 xm:grid-cols-1 gap-6 mt-10'>
                                {
                                    data.map(({ id, image, title, subtitle, date }) => {
                                        return (
                                            <>
                                                <SelectedMenuCard id={id} image={image} title={title} date={date} subtitle={subtitle} />
                                            </>
                                        )
                                    })

                                }
                            </div>
                        </>
                    }

                </div>
            </div>
        </>
    )
}

export default CardShowing