import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../provider/AuthProvider';
import DonationCard from '../../components/DonationCard/DonationCard';

const MyDonations = () => {
    const { user } = useContext(AuthContext);
    const [donations, setDonations] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/donations/${user.email}`)
            .then((res) => res.json())
            .then((data) => {
                setDonations(data)
            })
    }, [user?.email])
    return (
        <div className='grid grid-cols-3'>
           {
            donations.map(donation => <DonationCard key={donation._id} donation={donation}></DonationCard>)
           }
        </div>
    );
};

export default MyDonations;