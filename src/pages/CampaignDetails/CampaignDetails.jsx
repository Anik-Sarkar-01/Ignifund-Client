import React, { useContext } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';
const CampaignDetails = () => {

    const loadedCampaign = useLoaderData();
    const { user } = useContext(AuthContext);

    const { image, title, description, type, amount, deadline, email, name } = loadedCampaign;

    const campaignData = { image, title, description, type, amount, deadline, email, name, donorName: user.displayName, donorEmail: user.email };

    const handleDonate = () => {
        fetch("http://localhost:5000/donations", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(campaignData)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    toast.success('Donation Successful');
                }
            })
    }

    return (
        <div className="shadow-sm max-w-2xl mx-auto my-10 space-y-3">
            <Toaster></Toaster>
            <figure>
                <img
                    src={image}
                    alt="Movie" />
            </figure>
            <div className='space-y-3'>
                <h2 className="card-title">{title}</h2>
                <p>{description}</p>
                <button onClick={handleDonate} className='btn btn-primary'>Donate</button>
            </div>
        </div>
    );
};

export default CampaignDetails;