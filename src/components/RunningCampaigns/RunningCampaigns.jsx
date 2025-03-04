import React from 'react';
import CampaignCard from '../CampaignCard/CampaignCard';

const RunningCampaigns = ({loadedCampaigns}) => {
    return (
        <div>
            <h1 className='text-center'>Running Campaigns</h1>
            <div className='grid grid-cols-3 place-items-center'>
                {
                    loadedCampaigns.map(campaign => <CampaignCard key={campaign._id} campaign={campaign}></CampaignCard>)
                }
            </div>
        </div>
    );
};

export default RunningCampaigns;