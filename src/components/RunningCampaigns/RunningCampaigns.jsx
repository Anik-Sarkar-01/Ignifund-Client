import React from 'react';
import CampaignCard from '../CampaignCard/CampaignCard';


const RunningCampaigns = ({ loadedCampaigns }) => {
    return (

        <div className='space-y-10'>
            <div className='max-w-7xl mx-auto py-10 space-y-10'>
                <h1 className='text-center text-4xl font-extrabold'>Running <span className='text-[#019DBF]'>Campaigns</span></h1>
              
                    <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 place-items-center'>
                        {
                            loadedCampaigns.map(campaign => <CampaignCard key={campaign._id} campaign={campaign}></CampaignCard>)
                        }
                    </div>
            </div>
        </div>
    );
};

export default RunningCampaigns;