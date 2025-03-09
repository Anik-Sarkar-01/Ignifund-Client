import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
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
        modules={[Pagination, Autoplay, EffectFade]}
        effect={'fade'}
        spaceBetween={30}
        slidesPerView={1}
        centeredSlides={true}
        pagination={{ clickable: true }}
        autoplay={{
            delay: 4000,
            disableOnInteraction: false,
        }}
    >
        {slides.map((slide) => (
            <SwiperSlide
                key={slide.id}
            >
                <SliderItem slide={slide}></SliderItem>
            </SwiperSlide>
        ))}
    </Swiper>
    );
};

export default Slider;
