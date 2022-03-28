import React, { Component } from "react";
import Slider from "react-slick";
import KarjokromApi from "../../Apis/KarjokromApi";
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={`${className}  `}
            style={{ ...style, display: "none", }}
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
        >
        </div>
    );
}
export default class KarjokromSlider extends Component {


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
                        slidesToShow: 6,
                        slidesToScroll: 2,
                        initialSlide: 2,
                        infinite: false,
                        dots: false,
                        speed: 500,

                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 2,
                        initialSlide: 2,
                        dots: false

                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                        dots: false
                    }
                }
            ]
        };


        return (
            <div className='lg:max-w-4xl pt-2 sm:mt-5 lg:mt-0  relative '>
                <Slider ref={c => (this.slider = c)} {...settings}>
                    {
                        KarjokromApi.map(({ id, image, text, link }) => {
                            return (
                                <div className=" " style={{ width: "148px", outline: "none" }} key={id}>
                                    <div className="" style={{ width: "100%" }}>
                                        <Link to={`${link}`} className="text-white relative cursor-pointer mb-2 flex items-center justify-evenly flex-col gap-1 ">
                                            <figure>
                                                <img src={image} alt="not found" className="w-32 h-24 object-cover object-top rounded-lg" />
                                            </figure>
                                            <div className="text-xs text-center absolute bottom-4 w-28 z-20 ">
                                                {text}
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                            )
                        })
                    }
                </Slider >
                <div className="float-right mb-2 lg:mr-12 mt-4 space-x-4 ">
                    <button onClick={this.previous} className="button rounded-full p-2 border-2 border-cyan-300 active:border-cyan-500" >
                        <svg xmlns="http://www.w3.org/2000/svg" className="lg:w-6 lg:h-6 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>
                    <button onClick={this.next} className="button rounded-full p-2 border-2 border-cyan-300 active:border-cyan-500" >
                        <svg xmlns="http://www.w3.org/2000/svg" className="lg:w-6 lg:h-6 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                        </svg>
                    </button>
                </div>

            </div >
        );
    }
}




// export default KarjokromSlider









{/* <div className='lg:max-w-4xl pt-2  relative ' > */ }
// </div>