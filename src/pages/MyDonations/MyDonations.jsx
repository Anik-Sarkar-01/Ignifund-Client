import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../provider/AuthProvider';
import DonationCard from '../../components/DonationCard/DonationCard';

const MyDonations = () => {
    const { user } = useContext(AuthContext);
    const [donations, setDonations] = useState([]);

    useEffect(() => {
        fetch(`https://ignifund-server.vercel.app/donations/${user.email}`)
            .then((res) => res.json())
            .then((data) => {
                setDonations(data)
            })
    }, [user?.email])
    return (
        <div className='px-5'>
            <h1 className='text-3xl font-bold text-center py-10'>My <span className='text-[#019DBF]'>Donations - ({donations.length})</span></h1>
            <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 place-items-center gap-10 max-w-7xl mx-auto pb-10'>

                {
                    donations.map(donation => <DonationCard key={donation._id} donation={donation}></DonationCard>)
                }
            </div>
        </div>
    );
};

export default MyDonations;