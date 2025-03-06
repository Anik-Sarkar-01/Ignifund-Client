import React from 'react';

const SliderItem = ({ slide }) => {
    const { image, title, description } = slide;
    return (
        <div className="relative flex items-center justify-center">
            <div className="w-full h-lvh">
                <img
                    className="w-full h-full  
                    object-cover"
                    src={image}
                    alt={title}
                    o
                />
            </div>

            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-yellow-50/50 flex flex-col justify-center pl-10 space-y-5">
                <h2 className="text-5xl font-extrabold text-white leading-relaxed">
                    {title}
                </h2>
                <p className="text-lg text-gray-200 italic max-w-xl leading-relaxed">
                    &ldquo;{description}&rdquo;
                </p>
                <button className="px-6 py-3 btn hover:bg-white w-fit bg-[#F8B864] text-black font-semibold rounded-lg ">
                    Explore More
                </button>
            </div>
        </div>
    );
};

export default SliderItem;
