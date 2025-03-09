import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../provider/AuthProvider';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const MyCampaigns = () => {
    const { user } = useContext(AuthContext);
    const email = user.email;

    const [campaigns, setCampaigns] = useState([]);

    useEffect(() => {
        fetch(`https://ignifund-server.vercel.app/myCampaigns/${email}`)
            .then(res => res.json())
            .then(data => {
                setCampaigns(data);
            })
    }, [email])


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
                fetch(`https://ignifund-server.vercel.app/campaign/${id}`, {
                    method: "DELETE",
                })
                    .then(res => res.json())
                    .then(data => {
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


    return (
        <div className='border-2 border-[#019DBF] border-dotted p-5 max-w-7xl mx-auto my-10'>
            <h2 className='text-3xl font-bold text-center'>My <span className='text-[#019DBF]'>Campaigns</span></h2>
            <div className="overflow-x-auto">
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
                                    <div className="font-bold">Minimum Amount: $ {campaign.amount}</div>
                                    <div className="text-sm opacity-50">Deadline: {campaign.deadline}</div>
                                </td>
                                <th className='flex items-center gap-2 *:bg-[#019DBF] *:rounded-none'>
                                    <Link to={`/campaign/${campaign._id}`} className="btn ">See More</Link>
                                    <Link to={`/updateCampaign/${campaign._id}`} className="btn ">Update</Link>
                                    <Link onClick={() => handleDelete(campaign._id)} className="btn ">Delete</Link>
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