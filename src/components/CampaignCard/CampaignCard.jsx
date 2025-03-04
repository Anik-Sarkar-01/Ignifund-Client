import React from 'react';
import { Link } from 'react-router-dom';

const CampaignCard = ({ campaign }) => {
    const {_id, image, title, type, description, deadline, amount } = campaign;
    return (
        <div className="card bg-base-100 w-96 shadow-sm">
            <figure>
                <img
                    src={image}
                    alt="photo of ${title}" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">
                    {title}
                    <div className="text-sm bg-secondary p-1 text-center rounded-sm">{deadline}</div>
                </h2>
                <p className='line-clamp-2'>{description}</p>
                <div className="card-actions ">
                    <div className="badge badge-outline">$ {amount}</div>
                    <div className="badge badge-outline">{type}</div>
                </div>
                <div>
                    <Link to={`campaign/${_id}`} className='btn'>See More</Link>
                </div>
            </div>
        </div>
    );
};

export default CampaignCard;