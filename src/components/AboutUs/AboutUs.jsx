import React from 'react';
import ceoImage from "../../assets/ceo-photo.jpg";
import signature from "../../assets/signature.png";
import image1 from "../../assets/image-1.jpg";
import image2 from "../../assets/image-2.jpg";

const AboutUs = () => {
    return (
        <div className='bg-[url("/bg-blob.svg")] bg-cover bg-center py-16'>
            <div className="max-w-7xl mx-auto px-16 space-y-14">
                <div className="flex flex-col lg:flex-row justify-between gap-10">
                    <div className="flex-1 space-y-4">
                        <img
                            src={image1}
                            alt=""
                            className="w-full h-72 object-cover rounded-lg"
                        />
                        <h3 className="text-2xl font-bold text-gray-700">Our History</h3>
                        <p className="text-gray-700 text-lg leading-loose text-justify">
                            Founded with the belief that true fulfillment comes from helping others, our journey began with a simple mission: to make a meaningful difference in the lives of those in need. Through acts of kindness and generosity, we’ve strived to create a positive impact, one life at a time.
                        </p>
                    </div>

                    <div className="flex-1 space-y-4">
                        <img
                            src={image2}
                            alt=""
                            className="w-full h-72 object-cover rounded-lg"
                        />
                        <h3 className="text-2xl font-bold text-gray-700">Our Mission</h3>
                        <p className="text-gray-700 text-lg leading-loose text-justify">
                            Our mission is to create a world where kindness and compassion are at the forefront, making a lasting impact on those who need it most. We believe in the power of lifting others up, offering support and resources to help individuals overcome challenges and achieve their full potential.
                        </p>
                    </div>
                </div>

                <div className="flex items-center justify-center">
                    <div className="bg-white rounded-lg p-8 max-w-sm text-center border border-[#F8B864] space-y-3">
                        <img
                            src={ceoImage}
                            alt="Jonathan Smith"
                            className="w-32 h-32 object-cover rounded-full mx-auto  border-[#F8B864]"
                        />
                        <h3 className="text-2xl font-bold text-gray-700">Henry Smith</h3>
                        <p className="text-sm text-gray-500 italic">CEO & Founder of IgniFund</p>
                        <p className="text-gray-700 text-lg leading-relaxed">
                            True happiness is found in lifting others. Never underestimate the power YOU have to change the lives of those who are suffering, forgotten, or in need of help
                        </p>
                        <img
                            src={signature}
                            alt="Signature"
                            className="w-36 mx-auto opacity-80"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;
