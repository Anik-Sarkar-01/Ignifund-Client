import React from 'react';
import Slider from '../../components/Slider/Slider';
import RunningCampaigns from '../../components/RunningCampaigns/RunningCampaigns';
import { useLoaderData } from 'react-router-dom';

const Home = () => {
    const loadedCampaigns = useLoaderData();
    console.log(loadedCampaigns);
    return (
        <div>
            <div>
                <Slider></Slider>
            </div>
            <div>
                <RunningCampaigns loadedCampaigns= {loadedCampaigns}></RunningCampaigns>
            </div>
        </div>
    );
};

export default Home;