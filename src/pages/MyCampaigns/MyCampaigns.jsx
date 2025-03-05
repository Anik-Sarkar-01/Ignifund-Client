import React, { useContext, useState } from 'react';
import { AuthContext } from '../../provider/AuthProvider';
import { Link, useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const MyCampaigns = () => {
    const { user } = useContext(AuthContext);
    const email = user.email;

    const loadedCampaigns = useLoaderData();
    const filteredCampaigns = loadedCampaigns.filter(campaign => campaign.email === email);

    const [campaigns, setCampaigns] = useState(filteredCampaigns);

    const handleDelete = id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/campaign/${id}`, {
                    method: "DELETE",
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log("Delete is done", data);
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                            const remaining = campaigns.filter(item => item._id !== id);
                            setCampaigns(remaining);
                        }
                    })
            }
        });
    
    }


    // fetch(`http://localhost:5173/myCampaigns/${email}`, {
    //     method: "GET",
    // })
    // .then((res) => res.json())
    // .then((data) => {
    //     console.log(data);
    // })



    return (
        <div>
            <h2>This is my Campaigns page</h2>
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
                            campaigns.map((campaign, idx) => <tr key={campaign._id}>
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
                                    <Link to={`/updateCampaign/${campaign._id}`} className="btn">Update</Link>
                                    <Link onClick={() => handleDelete(campaign._id)} className="btn">Delete</Link>
                                </th>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyCampaigns;