import React from "react";

const Location = () => {
    return (
        <>
            <div className="container">

                <div className=" px-2 py-2  lg:mb-10">
                    <h1 className="lg:text-4xl text-2xl text-indigo-900 mt-2">আমাদের চারপাশ দেখুন</h1>
                </div>
                <div className=" px-3 mt-4 my-10">
                    <div className="flex lg:flex-row flex-col gap-4 ">
                        {/* left */}
                        <div className="">
                            <form >
                                <div className="space-x-4 flex ">
                                    <input
                                        className="px-2 py-2 w-full outline-none border-2 rounded-lg"
                                        type="text"
                                        placeholder="Search in Maps"
                                    />
                                    <button type="submit" className="bg-indigo-500 active:bg-indigo-700 px-6 py-2 rounded-lg  ">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                        </svg>
                                    </button>
                                </div>
                            </form>
                            <div className="grid grid-cols-4 gap-2 my-4">

                                <div className="cursor-pointer mx-auto text-center inline-block">
                                    <img src="assets/images/location/hospital.png" alt="hospital" className="w-10" />
                                    <p>Hospital</p>
                                </div>
                                <div className="cursor-pointer mx-auto text-center inline-block">
                                    <img src="assets/images/location/bank.png" alt="hospital" className="w-10" />
                                    <p>Bank</p>
                                </div>
                                <div className="cursor-pointer mx-auto text-center inline-block">
                                    <img src="assets/images/location/cutlery.png" alt="hospital" className="w-10" />
                                    <p>Resturant</p>
                                </div>
                                <div className="cursor-pointer mx-auto text-center inline-block">
                                    <img src="assets/images/location/bus.png" alt="hospital" className="w-10" />
                                    <p>Bus</p>
                                </div>
                            </div>

                        </div>
                        {/* right */}
                        <div className="">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7957.607651326146!2d90.40732382362486!3d23.869074708705156!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c43011f94e7f%3A0xa7643ed1422f32e0!2sKuwait%20Bangladesh%20Friendship%20Government%20Hospital!5e0!3m2!1sen!2sbd!4v1648316050025!5m2!1sen!2sbd"
                                allowFullScreen="on"
                                className="border-none location"
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
};

export default Location;
