import React from 'react';
import Slider from '../../components/Slider/Slider';
import RunningCampaigns from '../../components/RunningCampaigns/RunningCampaigns';
import { useLoaderData } from 'react-router-dom';
import AboutUs from '../../components/AboutUs/AboutUs';
import WhyChooseUs from '../../components/WhyUs/WhyUs';
import Testimonials from '../../components/Testimonials/Testimonials';
import Volunteer from '../../components/Volunteer/Volunteer';

const Home = () => {
    const loadedCampaigns = useLoaderData();
    return (
        <div>

            <div>
                <Slider></Slider>
            </div>
            <div>
                <RunningCampaigns loadedCampaigns={loadedCampaigns}></RunningCampaigns>
            </div>
            <div>
                <WhyChooseUs></WhyChooseUs>
            </div>
            <div >
                <AboutUs></AboutUs>
            </div>
            <div>
                <Volunteer></Volunteer>
            </div>
            <div>
                <Testimonials></Testimonials>
            </div>
        </div>
    );
};

export default Home;