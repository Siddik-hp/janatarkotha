import React from "react";
import RightSideIconApi from './../../Apis/RightSideIconApi';

const RightSideIcon = () => {
    window.addEventListener("scroll", () => {
        console.log("scrolled");
        const scrolled = window.scrollY
        if (scrolled > 500) {
            document.querySelector(".activityCompnent").style.display = "block"
        } else {
            document.querySelector(".activityCompnent").style.display = "none"

        }
    })
    return (
        <>

            <div className="activityCompnent lg:visible invisible  w-50 fixed  right-0  z-20 transition-all " >

                {
                    RightSideIconApi.map(({ id, image, title, link, background }) => {
                        return (
                            <div className="activity" key={id}>
                                <a
                                    className="activity-text-link "
                                    href={link}
                                    style={{ backgroundColor: `${background}` }}
                                >
                                    {title}
                                </a>
                                <div className="activity-image">
                                    <a
                                        className="activity-image-link"
                                        href={link}
                                        style={{ backgroundColor: `${background}` }}


                                    >
                                        <img src={image} alt="Not found" />
                                    </a>
                                </div>
                            </div>
                        )
                    })
                }
            </div>

        </>
    );
};

export default RightSideIcon;
