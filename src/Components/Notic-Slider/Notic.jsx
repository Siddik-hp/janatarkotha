import React from "react";

const Notic = () => {
    return (
        <div className="  bg-red-600 gap-3 pt-3 -mt-2" id="noticBox">
            <div className="container flex gap-4 px-2 py-1 -mt-2 ">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="42"
                    height="42"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#fff"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="transform rotate-45 w-24"
                >
                    <path d="M5 12.55a11 11 0 0 1 14.08 0"></path>
                    <path d="M1.42 9a16 16 0 0 1 21.16 0"></path>
                    <path d="M8.53 16.11a6 6 0 0 1 6.95 0"></path>
                    <line x1="12" y1="20" x2="12.01" y2="20"></line>
                </svg>
                <div className="flex-grow notic">
                    <span className="text-white flex">
                        <a href="#" className="pl-3" target="_blank">
                            হাই-টেক পার্ক স্থাপনে বাংলাদেশকে সহযোগিতা করবে ভারত: জুনাইদ আহমেদ
                            পলক |
                        </a>
                        <a href="#" className="pl-3" target="_blank">
                            বাংলাদেশের সুবর্ণজয়ন্তী ওয়েবসাইট ও অনলাইন কুইজ প্রতিযোগিতার
                            উদ্বোধনী অনুষ্ঠান। |
                        </a>
                        <a href="#" className="pl-3" target="_blank">
                            শুভ জন্মদিন প্রধানমন্ত্রী শেখ হাসিনা
                        </a>
                    </span>
                </div>
            </div>
        </div>
    );
};

export default Notic;
