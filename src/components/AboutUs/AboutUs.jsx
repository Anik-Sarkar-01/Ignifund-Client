import React from 'react';
import ceoImage from "../../assets/ceo-photo.jpg";
import signature from "../../assets/signature.png";
import image1 from "../../assets/image-1.jpg";
import image2 from "../../assets/image-2.jpg";
import { Fade } from 'react-awesome-reveal';

const AboutUs = () => {
    return (
        <div className='bg-[url("")] bg-cover bg-center space-y-10 py-10'>
            <h1 className='text-3xl font-bold text-center'>About Us</h1>
            <div className="max-w-7xl mx-auto px-5 space-y-14">
                <div className="flex flex-col lg:flex-row justify-between gap-10">
                    <Fade>
                        <div className="flex-1 space-y-4 border border-[#019DBF] p-5 ">
                            <img
                                src={image1}
                                alt=""
                                className="w-full h-72 object-cover "
                            />
                            <h3 className="text-2xl font-bold ">Our History</h3>
                            <p className=" text-lg leading-loose text-justify">
                                Founded with the belief that true fulfillment comes from helping others, our journey began with a simple mission: to make a meaningful difference in the lives of those in need. Through acts of kindness and generosity, we’ve strived to create a positive impact, one life at a time.
                            </p>
                        </div>
                    </Fade>

                    <Fade>
                        <div className="flex-1 space-y-4 border border-[#019DBF] p-5">
                            <img
                                src={image2}
                                alt=""
                                className="w-full h-72 object-cover"
                            />
                            <h3 className="text-2xl font-bold">Our Mission</h3>
                            <p className="text-lg leading-loose text-justify">
                                Our mission is to create a world where kindness and compassion are at the forefront, making a lasting impact on those who need it most. We believe in the power of lifting others up, offering support and resources to help individuals overcome challenges.
                            </p>
                        </div>
                    </Fade>
                </div>

                <div className="flex items-center justify-center">
                    <Fade>
                        <div className="bg-white p-2 max-w-sm text-center hover:scale-110 duration-300">
                            <div className='border border-[#019DBF] p-4 space-y-3'>
                                <img
                                    src={ceoImage}
                                    alt="Jonathan Smith"
                                    className="w-32 h-32 object-cover rounded-full mx-auto border-2  border-[#019DBF]"
                                />
                                <h3 className="text-2xl font-bold text-gray-700">Henry Smith</h3>
                                <p className="text-sm text-gray-500 italic">CEO & Founder of IgniFund</p>
                                <p className="text-gray-700 text-[16px] leading-relaxed">
                                    True happiness is found in lifting others. Never underestimate the power YOU have to change the lives of those who are suffering, forgotten, or in need of help
                                </p>
                                <img
                                    src={signature}
                                    alt="Signature"
                                    className="w-36 mx-auto"
                                />
                            </div>
                        </div>
                    </Fade>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;
