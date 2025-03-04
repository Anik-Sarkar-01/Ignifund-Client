import React from 'react';

const SliderItem = ({ slide }) => {
    const { image, title, description } = slide;
    return (
        <div className='flex flex-row-reverse items-center justify-center gap-5'>
            <div className='w-3/5'>
                <img className="h-full object-cover" src={image} alt="" />
            </div>
            <div className="p-5 space-y-5 w-2/5">
                <h2 className="text-lg font-bold text-white">{title}</h2>
                <p className="text-lg text-white">&ldquo; {description} &rdquo;</p>
                <button className='btn'>Explore More</button>
            </div>
        </div>
    );
};

export default SliderItem;