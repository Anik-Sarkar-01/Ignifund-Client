import React from 'react';
import { IoMdArrowForward } from 'react-icons/io';

const SliderItem = ({ slide }) => {
    const { image, title, description } = slide;
    return (
        <div className="relative flex items-center justify-center">
            <div className="w-full h-[calc(100vh-150px)]">
                <img
                    className="w-full h-full  
                    object-cover"
                    src={image}
                    alt={title}
                    o
                />
            </div>

            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-[#019DBF]/20 flex flex-col justify-center pl-10 space-y-5">
                <h2 className="text-5xl font-extrabold text-white leading-relaxed">
                    {title}
                </h2>
                <p className="text-lg text-gray-200 italic max-w-xl leading-relaxed">
                    &ldquo;{description}&rdquo;
                </p>
                <button className="px-6 py-3 btn hover:bg-white w-fit bg-[#019DBF] rounded-none text-[16px] font-semibold">
                    Explore More <IoMdArrowForward />
                </button>
            </div>
        </div>
    );
};

export default SliderItem;
