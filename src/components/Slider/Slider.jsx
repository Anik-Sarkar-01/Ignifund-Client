import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, EffectCoverflow } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-coverflow';
import { useEffect, useState } from 'react';
import SliderItem from '../SliderItem/SliderItem';

const Slider = () => {
    const [slides, setSlides] = useState([]);

    useEffect(() => {
        fetch('/slides.json')
            .then((res) => res.json())
            .then((data) => setSlides(data));
    }, []);

    return (
        <Swiper
            modules={[Pagination, Autoplay, EffectCoverflow]} 
            effect="coverflow" 
            spaceBetween={30} 
            slidesPerView={1}
            centeredSlides={true} 
            coverflowEffect={{
                rotate: 50, 
                stretch: 0, 
                depth: 100, 
                modifier: 1, 
                slideShadows: true, 
            }}
            pagination={{ clickable: true }}
            autoplay={{
                delay: 4000,
                disableOnInteraction: false,
            }}
            
        >
            {slides.map((slide) => (
                <SwiperSlide
                    key={slide.id}
                    style={{ width: "300px" }} 
                >
                    <SliderItem slide={slide}></SliderItem>
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default Slider;
