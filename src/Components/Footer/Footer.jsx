import React from 'react'
import { footerlink1, footerlink2, contactInfo } from './../../Apis/FooterLink';
const Footer = () => {
    return (
        <>
            <footer className='py-4 px-4'>
                {/* Main Box */}
                <div className='mainBox flex gap-x-10  lg:flex-row flex-col  '>
                    {/* left Box */}
                    <div className="left  text-center space-y-3">
                        <img src="/assets/images/footer/logo.png" alt="logo" className='mx-auto w-52' />
                        <h1>
                            সমস্ত কপিরাইট সংরক্ষিত বাংলাদেশ সরকার
                        </h1>
                        <a href="#">
                            <img src="/assets/images/footer/logo2.png" alt="logo2" className="w-80 mx-auto" />
                        </a>
                    </div>
                    {/* Rgith box */}
                    <div className="right lg:w-2/3 w-full">
                        {/* first */}
                        <div className="grid lg:grid-cols-3 grid-cols-2 gap-10 my-10 lg:mt-0 mt-14">
                            <ul className='lg:border-r-2 border-cyan-100'>
                                {
                                    footerlink1.map(({ id, text, link }) => {
                                        return (

                                            <a key={id} href={link} className='hover:text-cyan-400 transition-all mb-3 block'>{text}</a>
                                        )
                                    })
                                }
                            </ul>
                            <ul className='lg:border-r-2 border-cyan-100'>
                                {
                                    footerlink2.map(({ id, text, link }) => {
                                        return (
                                            <>
                                                <a href={link} key={id} className="hover:text-cyan-400 transition-all mb-3 block">{text}</a>
                                            </>
                                        )
                                    })
                                }
                            </ul>
                            <ul>
                                <h1>
                                    আমাদের সাথে সংযোগ করুন
                                </h1>
                                <div className='flex mt-4 space-x-4'>
                                    <a href="#">
                                        <img src="/assets/images/header/nav-icon/fb.png" alt="fb" className='w-10' />
                                    </a>
                                    <a href="#">
                                        <img src="/assets/images/header/nav-icon/insta.png" alt="fb" className='w-10' />
                                    </a>
                                    <a href="#">
                                        <img src="/assets/images/header/nav-icon/twitter.png" alt="fb" className='w-10' />
                                    </a>
                                    <a href="#">
                                        <img src="/assets/images/header/nav-icon/youtube.png" alt="fb" className='w-10' />
                                    </a>
                                </div>
                            </ul>
                        </div>
                        {/* scound */}
                        <div>
                            <h1>গুরুত্বপূর্ণ যোগাযোগ নম্বর</h1>
                            <div className='grid lg:grid-cols-4 grid-cols-2 gap-6 mt-5'>
                                {
                                    contactInfo.map(({ id, text, number, link }) => {
                                        return (
                                            <a href={link}>
                                                <div key={id} className='border-2  rounded-xl border-cyan-400 text-center py-4'>
                                                    <h1 className='text-xl mb-3'>
                                                        {text}
                                                    </h1>
                                                    <h1 className='text-4xl font-semibold text-cyan-500'>
                                                        {number}
                                                    </h1>
                                                </div>
                                            </a>

                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>
                <div className='mt-12 text-center'>
                    <h1 className='text-2xl'>
                        পরিকল্পনা ও বাস্তবায়নে :
                    </h1>
                    <div className='mt-2 flex justify-center flex-wrap items-center space-x-6'>
                        <a href="#">
                            <img src="/assets/images/footer/bcc.png" alt="bcc" className='w-14 ' />
                        </a>
                        <a href="#">
                            <img src="/assets/images/footer/db.png" alt="ict" className='w-32' />
                        </a>
                        <a href="#">
                            <img src="/assets/images/footer/ict.png" alt="ict" className='w-32' />
                        </a>
                        <a href="#">
                            <img src="/assets/images/footer/dsa.png" alt="dsa" className='w-32' />
                        </a>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer