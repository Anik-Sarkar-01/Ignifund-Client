import React from 'react';
import { MdAdd, MdOutlineUpdate } from 'react-icons/md';
import { RiCoinsLine } from 'react-icons/ri';
import { Link } from 'react-router-dom';

const CampaignCard = ({ campaign }) => {
    const { _id, image, title, type, description, deadline, amount } = campaign;
    return (
        <div className=" bg-base-100 w-96 shadow-sm">
            <figure className='relative'>
                <img
                    src={image}
                    alt="photo of ${title}" />
                <div className='absolute text-center w-full bottom-0 bg-[#F8B864]/100 px-2'>
                    <div className="text-sm font-semibold"> Category: {type}</div>
                </div>
            </figure>
            <div className="card-body space-y-2 border-2 border-[#F8B864] border-dotted">
                <h2 className="card-title text-xl">
                    {title}
                </h2>

                <h3 className="text-[16px] flex items-center gap-1">  <MdOutlineUpdate className='text-[#F8B864]' />  <span className='font-semibold'>Deadline:</span> {deadline}</h3>
                <div className="flex items-center gap-1 text-[16px]"> <RiCoinsLine className='text-[#F8B864]' />
                    <span className='font-semibold'>Minimum Amount:</span> $ {amount}</div>
                <p className='line-clamp-2'>{description}</p>

                <div>
                    <Link to={`campaign/${_id}`} className='btn text-[16px]'>See More <MdAdd className='text-[#F8B864]'></MdAdd></Link>
                </div>
            </div>
        </div>
    );
};

export default CampaignCard;