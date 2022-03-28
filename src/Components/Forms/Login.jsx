// import React from 'react'

// const Login = () => {

//     return (
//         <>
//             <div id="loginModal" tabindex="-1" aria-hidden="true" class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-full md:h-full justify-center items-center  " >
//                 <div class="relative  p-4 w-full max-w-2xl h-full md:h-auto ">
//                     <div class="relative rounded-lg shadow " style={{ background: "#1D3A7C" }}>
//                         <div className='py-6 px-8'>
//                             <svg data-modal-toggle="loginModal" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white float-right cursor-pointer hover:text-cyan-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
//                                 <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
//                             </svg>
//                             <form className='flex flex-col space-y-6 text-xl mt-10 '>
//                                 <div className='border-b-2 border-gray-100 text-white  flex justify-center items-center'>
//                                     <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
//                                         <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
//                                     </svg>
//                                     {/* <input type="number" required maxLength="11" name="number" id="number" placeholder='018 xxxx xxxx' className='' /> */}
//                                     <input type="number" name="number" id="number" className='' />
//                                 </div>
//                                 <div className='border-b-2 border-gray-100 text-white focus:border-cyan-700 flex justify-center items-center'>
//                                     <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
//                                         <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
//                                     </svg>
//                                     <input type="password" minLength="8" required name="password" id="password" placeholder='xxxxxxx' className='py-2 px-4 bg-transparent outline-none  w-full' />
//                                 </div>
//                                 <h2 className='text-right text-white underline cursor-pointer hover:text-cyan-200'><a href="#">Forgot Password</a></h2>
//                                 <button className=' bg-white text-black lg:w-32 w-full font-semibold py-2 text-xl rounded-xl ml-auto' type="submit" >Login</button>
//                             </form>
//                             <div className='grid lg:grid-cols-3 grid-cols-2 gap-4 mt-4 '>
//                                 <button className='flex justify-center items-center gap-2 bg-white lg:px-4 px-2 py-2 text-xl rounded-md'><img src="/assets/images/google.png" alt="google" className='w-8 h-8' /> Google</button>
//                                 <button className='flex justify-center items-center gap-2 bg-white px-4 py-2 text-xl rounded-md '><img src="/assets/images/facebook.png" alt="google" className='w-8 h-8' /> Facebook</button>
//                                 <button className='flex  justify-center items-center gap-2  lg:px-4 px-2 py-2 text-xl rounded-md bg-white '><img src="/assets/images/gov.png" alt="google" className='w-32 h-8' /> </button>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>

//         </>
//     )
// }

// export default Login



import React from 'react'

const Login = () => {
    return (
        <>
            <div>
                <div id="authentication-modal" tabindex="-1" aria-hidden="true" class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-full md:h-full ">
                    <div class="relative p-4 w-full max-w-md h-full md:h-auto mx-auto my-auto">
                        <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
                            <div class="flex justify-end p-2">
                                <button type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white" data-modal-toggle="authentication-modal">
                                    <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                </button>
                            </div>
                            <form class="px-6 pb-4 space-y-6 lg:px-8 sm:pb-6 xl:pb-8" action="#">
                                <h3 class="text-xl font-medium text-gray-900 dark:text-white">Sign in our website</h3>
                                <div>
                                    <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your email</label>
                                    <input type="email" autoComplete='off' name="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="name@company.com" required />
                                </div>
                                <div>
                                    <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your password</label>
                                    <input type="password" autoComplete='off' name="password" id="password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required />
                                </div>
                                <div class="flex justify-between">
                                    <div class="flex items-start">
                                        <div class="flex items-center h-5">
                                            <input id="remember" aria-describedby="remember" type="checkbox" class="w-4 h-4 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-blue-300 dark:bg-gray-600 dark:border-gray-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800" required />
                                        </div>
                                        <div class="ml-3 text-sm">
                                            <label for="remember" class="font-medium text-gray-900 dark:text-gray-300">Remember me</label>
                                        </div>
                                    </div>
                                    <a href="#" class="text-sm text-blue-700 hover:underline dark:text-blue-500">Lost Password?</a>
                                </div>
                                <button type="submit" class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Login to your account</button>
                                <div class="text-sm font-medium text-gray-500 dark:text-gray-300">
                                    Not registered? <a href="#" class="text-blue-700 hover:underline dark:text-blue-500">Create account</a>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login