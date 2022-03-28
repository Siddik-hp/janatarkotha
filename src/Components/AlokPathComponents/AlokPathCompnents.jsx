import React, { Component } from "react";
import Slider from "react-slick";
import AkokPathApi from "../../Apis/AlokPathApi";
import AlokPathCard from "./AkokPathCard";

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={`${className}  `}
            style={{ ...style, display: "none" }}
            onClick={onClick}
        />
    );
}
function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "none" }}
            onClick={onClick}
        ></div>
    );
}
export default class AlokPathComponents extends Component {
    constructor(props) {
        super(props);
        this.next = this.next.bind(this);
        this.previous = this.previous.bind(this);
    }
    next() {
        this.slider.slickNext();
    }
    previous() {
        this.slider.slickPrev();
    }
    render() {
        const settings = {
            dots: true,
            infinite: false,
            speed: 500,
            slidesToShow: 6,
            slidesToScroll: 2,
            initialSlide: 0,
            prevArrow: <SamplePrevArrow />,
            NextArrow: <SampleNextArrow />,
            responsive: [
                {
                    breakpoint: 1490,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1,
                        initialSlide: 1,
                        infinite: true,
                        dots: false,
                        speed: 600,
                    },
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                        initialSlide: 2,
                        infinite: true,
                        dots: false,
                        speed: 600,

                    },
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        dots: false,
                        infinite: true,
                        speed: 500,

                    },
                },
            ],
        };

        return (
            <>
                <div className="mt-16 px-4  mb-4 container flex flex-row justify-between items-center">
                    <div>
                        <h1 className="lg:text-4xl text-2xl text-indigo-700">আলোকপাত</h1>
                    </div>
                    <div className="space-x-4 lg:mr-10">
                        <button onClick={this.previous} className="border-2 border-gray-400 rounded-full p-2 active:border-indigo-800">
                            <svg xmlns="http://www.w3.org/2000/svg" className="lg:h-6 lg:w-6 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                            </svg>
                        </button>
                        <button onClick={this.next} className="border-2 border-gray-400 rounded-full p-2 active:border-indigo-800">
                            <svg xmlns="http://www.w3.org/2000/svg" className="lg:h-6 lg:w-6 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                    </div>
                </div>
                <div className=" mb-24  container pt-2 sm:mt-5 lg:mt-0 ">
                    <Slider ref={(c) => (this.slider = c)} {...settings}>
                        {AkokPathApi.map(
                            ({ id, cetagory, image, title1, title2, title3 }) => {
                                return (
                                    <AlokPathCard
                                        key={id}
                                        id={id}
                                        cetagory={cetagory}
                                        image={image}
                                        title1={title1}
                                        title2={title2}
                                        title3={title3}
                                    />
                                );
                            }
                        )}
                    </Slider>
                </div >
            </>

        );
    }
}
