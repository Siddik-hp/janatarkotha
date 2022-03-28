import React, { Component } from "react";
import Slider from "react-slick";
import SliderApi from './../../Apis/SliderApi';

export default class AutoPlayMethods extends Component {
    constructor(props) {
        super(props);
        this.play = this.play.bind(this);
        this.pause = this.pause.bind(this);
    }
    play() {
        this.slider.slickPlay();
    }
    pause() {
        this.slider.slickPause();
    }
    render() {
        const settings = {
            dots: false,
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 1500
        };
        return (
            <div>
                <Slider {...settings}>
                    {SliderApi.map(({ id, image }) => {
                        return (
                            <div key={id} className=' home_slider overflow-x-hidden -mt-4 -mb-4' style={{ outline: "none" }}>
                                <div>
                                    <div className="relative" >
                                        <div className="absolute top-5 left-0 right-0">
                                            <div className="container px-2 mx-auto flex items-center justify-between px-3">
                                                <a href="#">
                                                    <img src="assets/images/slider/topSlider/1.png" alt="mujib 100" className="md:w-28 w-14" />
                                                </a>
                                                <a href="#" >
                                                    <img src="assets/images/slider/topSlider/2.png" alt="mujib 50" className="md:w-28 w-14" />
                                                </a>
                                            </div>
                                        </div>
                                        <img src={image} className="object-cover  lg:h-[calc(100-2rem)] h-full" alt="Not found" />
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </Slider>

            </div>
        );
    }
}