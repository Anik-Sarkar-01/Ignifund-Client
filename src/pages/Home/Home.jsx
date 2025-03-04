import React from 'react';
import Slider from '../../components/Slider/Slider';
import RunningCampaigns from '../../components/RunningCampaigns/RunningCampaigns';

const Home = () => {
    return (
        <div>
            <div>
                <Slider></Slider>
            </div>
            <div>
                <RunningCampaigns></RunningCampaigns>
            </div>
        </div>
    );
};

export default Home;