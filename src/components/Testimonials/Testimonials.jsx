import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, EffectCoverflow } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

import 'swiper/css/effect-coverflow';

const testimonials = [
    {
        id: 1,
        name: "Jane Smith",
        feedback: "This crowdfunding platform has exceeded my expectations. The entire process was seamless!",
        avatar: "https://i.ibb.co.com/CsbwWxyn/t3.jpg",
    },
    {   
        id: 2,
        name: "Alex Johnson",
        feedback: "Thanks to the support I received here, I was able to launch my dream project effortlessly.",
        avatar: "https://i.ibb.co.com/4hTd93g/t2.jpg",
    },
    {
        id: 3,
        name: "Emily Davis",
        feedback: "This platform gave me the confidence and resources I needed to bring my vision to life.",
        avatar: "https://i.ibb.co.com/JWLky0Ws/t3.jpg",
    },
];

const TestimonialSlider = () => {
    return (
        <div className='px-5 py-10'>
            <h2 className="text-3xl font-bold text-center pb-5">What Our Users Say</h2>
            <Swiper
                effect="coverflow"
                grabCursor={true}
                centeredSlides={true}
                slidesPerView="auto"
                loop={"true"}
                coverflowEffect={{
                    rotate: 0,
                    stretch: 100,
                    depth: 300,
                    modifier: 1,
                    slideShadows: true,
                }}
                navigation

                modules={[Navigation, EffectCoverflow]}
                className="max-w-3xl mx-auto"
            >
                {testimonials.map((testimonial) => (
                    <SwiperSlide
                        key={testimonial.id}
                        className="bg-base-300 rounded-lg p-6 shadow-lg flex flex-col items-center text-center"
                    >
                        <div className='flex justify-center'>
                            <img
                                src={testimonial.avatar}
                                alt={testimonial.name}
                                className="w-24 h-24 object-cover rounded-full mb-4"
                            />
                        </div>
                        <p className="italic">"{testimonial.feedback}"</p>
                        <h3 className="text-lg font-bold mt-4">
                            - {testimonial.name}
                        </h3>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default TestimonialSlider;
