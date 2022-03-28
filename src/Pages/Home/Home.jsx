import React from 'react'
import Login from '../../Components/Forms/Login'
import HomeSlider from "../../Components/Home-Slider/HomeSlider"
import InformationCard from '../../Components/InformationComponents/InformationCard'
import JonotarKothaComponents from '../../Components/JotarKothaCompnents/JonotarKothaComponents'
import Location from '../../Components/Location/Location'
import Notic from '../../Components/Notic-Slider/Notic'
import RightSideIcon from '../../Components/RightSideIcon/RightSideIcon'
import Karjokrom from './../../Components/Karjokrom/Karjokrom';
import Btn from './../../Components/ScreenToTopBtn/Btn';
import AlokPathComponents from './../../Components/AlokPathComponents/AlokPathCompnents';

const Home = () => {
    return (
        <>
            {/* Home Slider */}
            <HomeSlider />
            {/* Notic Compnents */}
            <Notic />
            {/* Karjokrom Components */}
            <Karjokrom />
            {/* Information Compnents */}
            <InformationCard />

            {/* Right Side Card Component */}
            <RightSideIcon />

            {/*Topic Card  */}
            <AlokPathComponents />

            {/* JonotarKotha Components */}
            <JonotarKothaComponents />

            {/* Location */}
            <Location />
            {/* screen to top button */}
            <Btn />


            {/* login */}
            <Login />
        </>
    )
}

export default Home