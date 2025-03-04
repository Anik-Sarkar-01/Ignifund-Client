
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y, Autoplay, Thumbs, EffectCoverflow } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { useEffect, useState } from 'react';
import SliderItem from '../SliderItem/SliderItem';


const Slider = () => {
    const [slides, setSlides] = useState([]);

    useEffect(() => {
        fetch('/slides.json')
            .then(res => res.json())
            .then(data => setSlides(data))
    }, [])

    return (
        <Swiper
            // install Swiper modules
            modules={[Pagination, Scrollbar, Autoplay]}
            spaceBetween={50}
            slidesPerView={1}
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            // autoplay={{
            //     delay: 4000,
            //     disableOnInteraction: false,
            // }}

            className='max-h-[90vh]'
        >
            {slides.map(slide => (
                <SwiperSlide key={slide.id}>
                    <SliderItem slide={slide}></SliderItem>
                </SwiperSlide>
            ))}

        </Swiper>
    );
};

export default Slider;