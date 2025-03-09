import React, { useContext } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';
import { BiHeart } from 'react-icons/bi';
const CampaignDetails = () => {

    const loadedCampaign = useLoaderData();
    const { user } = useContext(AuthContext);

    const { image, title, description, type, amount, deadline, email, name } = loadedCampaign;

    const currentDate = new Date();
    const campaignDeadline = new Date(deadline);
    const donationDate = currentDate.toDateString().split(" ").slice(0, 4).join(",");

    const campaignData = { image, title, description, type, amount, deadline, email, name, donorName: user.displayName, donorEmail: user.email, donationDate };

    const handleDonate = () => {
        if (currentDate > campaignDeadline) {
            toast.error('Oops! Deadline is over!');
        }
        else {
            fetch("https://ignifund-server.vercel.app/donations", {
                method: "POST",
                headers: {
                    "content-type": "application/json",
                },
                body: JSON.stringify(campaignData)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.insertedId) {
                        toast.success('Donation Successful');
                    }
                })
        }


    }

    return (
        <div className='py-10'>
            <Toaster></Toaster>
            <div className="card lg:card-side bg-base-100 shadow-sm max-w-5xl mx-auto rounded-none border-2 border-[#019DBF] border-dotted p-5">
                <figure>
                    <img
                        src={image}
                        alt="" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title"> {title}</h2>
                    <div className='bg-[#019DBF] w-fit px-3 font-bold'>
                        <p>Deadline: {deadline}</p>
                    </div>
                    <p className='text-justify'><span className='font-semibold'>Details:</span> {description}</p>
                    <p className='text-justify'><span className='font-semibold'>Category:</span> {type}</p>
                    <p className='text-justify'><span className='font-semibold'>Minimum Amount Needed:</span> $ {amount}</p>
                    <p className='text-justify'><span className='font-semibold'>Email:</span> {email}</p>
                    <p className='text-justify'><span className='font-semibold'>Fundraiser Name:</span> {name}</p>
                    <div className="card-actions">
                        <button onClick={handleDonate} className='btn rounded-none text-lg bg-[#019DBF]'> <BiHeart></BiHeart> Donate</button>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default CampaignDetails;