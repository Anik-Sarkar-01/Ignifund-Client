import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CampaignDetails = () => {
    const loadedCampaign = useLoaderData();
    const {image, title, description} = loadedCampaign;
    return (
        <div className="shadow-sm max-w-2xl mx-auto my-10 space-y-3">
            <figure>
                <img
                    src={image}
                    alt="Movie" />
            </figure>
            <div className='space-y-3'>
                <h2 className="card-title">{title}</h2>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default CampaignDetails;