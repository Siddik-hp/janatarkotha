import React from "react";
import { Link, useNavigate } from "react-router-dom";

const SelectedMenuCard = ({ id, title, date, subtitle, image }) => {
    const navigate = useNavigate()
    const toComponents = () => {
        navigate(`/fullpage/${id}`, { state: { id: id, title: title, image: image, date: date, subtitle: subtitle } })
    }
    return (
        <div className="card  py-2 px-2 mx-2 rounded-xl  shadow-xl z-100">
            <div className="flex justify-between my-3 text-gray-400  ">
                <div className=" flex gap-3 mb-2">
                    <a href="#">
                        <img src="/assets/images/jonotarkotha/facebook.png" className="w-8" alt="fb" />
                    </a>
                    <a href="#">
                        <img src="/assets/images/jonotarkotha/instagram.png" className="w-8" alt="insta" />
                    </a>
                </div>
                <h1 className="">
                    {" "}
                    স্থিতি :{" "}
                    <span className="bg-indigo-800 text-white px-4 py-1 rounded-md ml-3">
                        সমাপ্ত
                    </span>
                </h1>
            </div>
            <a onClick={() => { toComponents() }} >
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
                <p className="text-indigo-500">{title}</p>
                <p className="text-yellow-600 border-b-2 pb-1">শেষ তারিখ :  {date}</p>
                <p className="text-indigo-500"> {subtitle}</p>
            </div>
        </div>
    );
};

export default SelectedMenuCard;
