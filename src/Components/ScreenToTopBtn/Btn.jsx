import React from 'react'

const Btn = () => {
    window.addEventListener("scroll", () => {
        const scroll = window.scrollY;
        console.log(scroll);
        if (scroll > 300) {
            const btn = document.querySelector(".scrollToTopBtn")
            btn.style.display = "block"
        } else {
            const btn = document.querySelector(".scrollToTopBtn")
            btn.style.display = "none"
        }
    })

    const GoTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" })

    }

    return (
        <button onClick={GoTop} className='scrollToTopBtn p-2 rounded-full hover:bg-indigo-800 active:bg-indigo-900 bg-indigo-700 text-white fixed right-6 bottom-6 z-40'>
            <svg xmlns="http://www.w3.org/2000/svg" className="lg:h-8 lg:w-8 w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
            </svg>
        </button>
    )
}

export default Btn