import React from "react";

const JonotarKothaCard = ({ link, image, title, date }) => {
    return (
        <div className="card  py-2 px-2 mx-2 rounded-xl  shadow-xl z-100">
            <div className=" flex gap-3 mb-2">
                <a href="#">
                    <img src="/assets/images/jonotarkotha/facebook.png" className="w-8" alt="fb" />
                </a>
                <a href="#">
                    <img src="/assets/images/jonotarkotha/instagram.png" className="w-8" alt="insta" />
                </a>
                <a href="#">
                    <img src="/assets/images/jonotarkotha/facebook.png" className="w-8" alt="twitter" />
                </a>
            </div>
            <a href={link} target="_blank">
                <div className="relative overflow-hidden z-20">
                    <img
                        src={image}
                        alt="Not found"
                        className="topicCardImage"
                        style={{ width: "100%", height: "250px" }}
                    />
                </div>
            </a>
            <div className=" py-3 space-y-3 px-3 pb-12">
                <p className="text-indigo-500">{title}</p>
                <p className="text-yellow-600  ">{date}</p>
            </div>
        </div>
    );
};

export default JonotarKothaCard;
