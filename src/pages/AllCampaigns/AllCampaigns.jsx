import React, { useEffect, useState } from 'react';
import { FaSortAmountDownAlt } from 'react-icons/fa';
import { Link, useLoaderData } from 'react-router-dom';

const AllCampaigns = () => {
    const loadedCampaigns = useLoaderData();
    const [data, setData] = useState(loadedCampaigns);
    const [sortedData, setSortedData] = useState([]);

    useEffect(() => {
        fetch("https://ignifund-server.vercel.app/allCampaignsSorted")
            .then(res => res.json())
            .then(sortedCampaigns => setSortedData(sortedCampaigns))
    }, [])


    const handleSort = () => {
        setData(sortedData);
    }

    return (
        <div className='px-5'>
            <div className="overflow-x-auto border-2 border-[#019DBF] border-dotted p-5 max-w-7xl mx-auto my-10">
                <h1 className='text-3xl font-bold text-center'>All <span className='text-[#019DBF]'>Campaigns</span></h1>
                <div className='flex justify-center pt-5'>
                    <button onClick={handleSort} className='btn rounded-none bg-[#019DBF]'>
                        Sort By Minimum Amount <FaSortAmountDownAlt /></button>
                </div>
                <table className="table-xs lg:table-lg mx-auto">
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
                            data.map((campaign, idx) => <tr key={campaign._id}>
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
                                    <Link to={`/campaign/${campaign._id}`} className="btn bg-[#019DBF] py-7 font-bold">See More</Link>
                                </th>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllCampaigns;