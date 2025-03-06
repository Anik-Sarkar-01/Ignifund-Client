import React from 'react';
import Slider from '../../components/Slider/Slider';
import RunningCampaigns from '../../components/RunningCampaigns/RunningCampaigns';
import { useLoaderData } from 'react-router-dom';
import AboutUs from '../../components/AboutUs/AboutUs';

const Home = () => {
    const loadedCampaigns = useLoaderData();
    console.log(loadedCampaigns);
    return (
        <div>
            <div>
                <Slider></Slider>
            </div>
            <div className=''>
                <RunningCampaigns loadedCampaigns= {loadedCampaigns}></RunningCampaigns>
                <AboutUs></AboutUs>
            </div>
        </div>
    );
};

export default Home;