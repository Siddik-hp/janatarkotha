import React from "react";

const AlokPathCard = ({ id, cetagory, title1, title2, title3, image }) => {
    return (
        <div className="card  py-2 px-2 mx-2 rounded-xl  shadow-xl z-100">
            <div className="flex justify-between my-3 text-gray-400  ">
                <h1>{cetagory}</h1>
                <h1 className="">
                    {" "}
                    স্থিতি :{" "}
                    <span className="bg-indigo-800 text-white px-4 py-1 rounded-md ml-3">
                        সমাপ্ত
                    </span>
                </h1>
            </div>
            <a href={`topic/${id}`}>
                <div className="relative overflow-hidden z-20">
                    <img
                        src={image}
                        alt="Not found"
                        className="topicCardImage"
                        style={{ width: "100%", height: "240px" }}
                    />
                    <div
                        className="absolute w-full bottom-0 text-center pt-4 pb-2 left-0 "
                        style={{ background: `rgba(0,0,0,.3)` }}
                    >
                        <button className="bg-indigo-800 text-white px-6 py-2  rounded-full">
                            দেখুন
                        </button>
                    </div>
                </div>
            </a>
            <div className=" py-3 space-y-3 px-3 pb-12">
                <p className="text-indigo-500">{title1}</p>
                <p className="text-yellow-600 border-b-2 pb-1">{title2}</p>
                <p className="text-indigo-500"> {title3}</p>
            </div>
        </div>
    );
};

export default AlokPathCard;
