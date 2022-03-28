import React from 'react'
import { firstLink, scoundLink } from './../../Apis/MenuLink'
import icons from './../../Apis/Navbar';

const Navbar = () => {

    const ShowMenu = () => {
        const linkBox = document.querySelector(".linkBox")
        const show = document.querySelector(".showIcon")
        const hide = document.querySelector(".hideIcon")
        linkBox.style.display = "block"
        show.style.display = "none"
        hide.style.display = "block"
    }
    const HideMenu = () => {
        const linkBox = document.querySelector(".linkBox")
        const show = document.querySelector(".showIcon")
        const hide = document.querySelector(".hideIcon")
        linkBox.style.display = "none"
        show.style.display = "block"
        hide.style.display = "none"
    }
    const ShowMenuM = () => {
        const linkBox = document.querySelector(".linkBox")
        const show1 = document.querySelector(".showIcon1")
        const hide1 = document.querySelector(".hideIcon1")
        linkBox.style.display = "block"
        show1.style.display = "none"
        hide1.style.display = "block"
    }
    const HideMenuM = () => {
        const linkBox = document.querySelector(".linkBox")
        const show1 = document.querySelector(".showIcon1")
        const hide1 = document.querySelector(".hideIcon1")
        linkBox.style.display = "none"
        show1.style.display = "block"
        hide1.style.display = "none"
    }




    return (
        // ============================ 😘Top home navbar 
        <header className=' px-3 py-2  sticky top-0 left-0 z-50' style={{ background: "#1D3A7C" }}>
            {/* ======================= First  Navbar Start 😊😊😊 ==============================    */}
            <div className='pt-1 pb-2 text-white'>
                {/* Top Nevbar */}
                <div className="container flex items-center mx-auto justify-between">
                    {/* Left Side */}
                    <div className="flex gap-2 items-center">
                        <figure>
                            <img src="/assets/images/header/logo.png" alt="Not found logo" className='' style={{ width: "70px" }} />
                        </figure>
                        <h1 className=' hidden md:block uppercase text-md'>
                            গণপ্রজাতন্ত্রী বাংলাদেশ সরকার
                        </h1>
                    </div>
                    {/* Right Side */}
                    <div className="flex items-center spaces-between">
                        <button className="p-2 mx-2" type='button' data-modal-toggle="authentication-modal">
                            লগইন
                        </button>
                        <div className="h-4 mx-2 bg-white" style={{ width: "1px" }}></div>
                        <button className="p2 mx-2">নিবন্ধন</button>
                    </div>
                </div>

            </div>
            {/* ======================= First  Navbar End 😊😊😊==============================    */}
            {/* ======================= 😊😘😘 Scound Navbar Start ============================ */}
            <div className="py-1">
                <div className="container px-2 mx-auto flex justify-between items-center flex-row pr-4">
                    {/* ==========Left box =========== */}
                    <div className="flex items-center cursor-pointer space-x-4 ">
                        <a href="/">
                            <figure>
                                <img src="/assets/images/header/navbar.png" alt="Navbar log" className=' object-cover' style={{ width: "80px" }} />
                            </figure>
                        </a>
                        <div className="hidden md:block">
                            <h1 className='font-medium text-xl text-white'>
                                জনতার সরকার
                            </h1>
                        </div>
                    </div>

                    {/* Right box  this will be hidden in small diveces*/}
                    <div className="md:flex flex-col items-center gap-4 hidden">
                        <div className="flex items-center gap-2 text-white">
                            <a href="/" target="_blank" rel="noreferrer">
                                <img className="h-12 rounded" src="/assets/images/header/nav-link.png" alt="Not found" />
                            </a>
                            {/* for all socila links */}
                            {
                                icons.map(({ id, image, link }) => {
                                    return <a href={link} target="_blank" rel="noreferrer" key={id}>
                                        <img className="h-8 rounded" src={image} alt="Not found" />
                                    </a>
                                })
                            }
                            <button>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                            </button>
                            <button className='showIcon' onClick={ShowMenu}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
                            </button>
                            <button className='hideIcon' onClick={HideMenu} style={{ display: "none" }}>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 " fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                    </div>
                    {/* This box show in small devices and hide in desktop version */}
                    <div className=" text-white ResponsiveIcon">
                        <button onClick={ShowMenuM} className="showIcon1 ">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
                        </button>
                        <button className='hideIcon1' onClick={HideMenuM} style={{ display: "none" }}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 " fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>

                </div>
            </div>

            {/* nav Link */}
            <div className="linkBox  fixed left-0 top-36 z-30 w-full h-full bg-black bg-opacity-80 transform transition-transform origin-top scale-y-100" style={{ display: "none" }}>
                <div className="lg:px-4 p-8 mx-auto  text-white max-h-full overflow-y-auto relative" style={{ background: "#1D3A7C" }}>
                    <div className="flex lg:flex-row flex-col divide-x-0 lg:divide-x gap-3">
                        <div className='lg:w-2/3 w-full'>
                            <h1 className="text-3xl mb-3 text-cyan-400 font-semibold">
                                প্রধান সূচি
                            </h1>
                            <div className="flex flex-row">
                                <div className="w-1/2">
                                    <div className="flex flex-col gap-1">
                                        {
                                            firstLink.map(({ id, link, text }) => {
                                                return (
                                                    <a href={link} key={id} className="hover:text-cyan-400 transition-all">
                                                        {text}
                                                    </a>
                                                )
                                            })
                                        }

                                    </div>
                                </div>
                                <div className="w-1/2">
                                    <div className="flex flex-col gap-1">
                                        {
                                            scoundLink.map(({ id, link, text }) => {
                                                return (
                                                    <a href={link} key={id} className="hover:text-cyan-400 transition-all">
                                                        {text}
                                                    </a>
                                                )
                                            })
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="lg:w-1/3 lg:px-4 w-full">
                            <h1 className='text-3xl text-cyan-400'>অন্যান্য ফিচার</h1>
                            <div className="flex flex-col gap-4 mt-4 mb-7">
                                <a href="#">
                                    আমাদের চারপাশ
                                </a>
                                <a href="#">
                                    Weather
                                </a>
                                <a href="#">
                                    ক্যালেন্ডার ও  ইভেন্ট
                                </a>
                                <a href="#">
                                    আবহাওয়া
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Navbar