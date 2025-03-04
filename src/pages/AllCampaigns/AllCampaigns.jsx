import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const AllCampaigns = () => {
    const loadedCampaigns = useLoaderData();
    console.log(loadedCampaigns);

    return (
        <div className="overflow-x-auto">
            <table className="table">
                <thead>
                    <tr>
                        <th>Serial</th>
                        <th>Title</th>
                        <th>Campaign Creator</th>
                        <th>Amount & Deadline</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        loadedCampaigns.map((campaign, idx) => <tr key={campaign._id}>
                            <td>
                                {idx + 1}
                            </td>
                            <td>
                                <div className="flex items-center gap-3">
                                    <div className="avatar">
                                        <div className="h-12 w-12 rounded-full">
                                            <img
                                                className="object-cover"
                                                src={campaign.image}
                                                alt="Campaign"
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="font-bold">{campaign.title}</div>
                                        <div className="text-sm opacity-50">{campaign.type}</div>
                                    </div>
                                </div>
                            </td>
                            <td>
                                <div className="font-bold">{campaign.name}</div>
                                <div className="text-sm opacity-50">{campaign.email}</div>
                            </td>
                            <td>
                                <div className="font-bold">Minimum Amount: ${campaign.amount}</div>
                                <div className="text-sm opacity-50">Deadline: {campaign.deadline}</div>
                            </td>
                            <th>
                                <Link to={`/campaign/${campaign._id}`} className="btn">See More</Link>
                            </th>
                        </tr>)
                    }

                </tbody>
            </table>
        </div>
    );
};

export default AllCampaigns;