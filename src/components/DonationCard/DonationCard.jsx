import React from 'react';

const DonationCard = ({ donation }) => {
    const { image, title, description, amount, deadline, donationDate } = donation;
    return (
        <div className="card w-96 shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-xl">
            <figure>
                <img
                    src={image}
                    alt={title}
                    className="w-full h-48 object-cover"
                />
            </figure>

            <div className="card-body p-5 space-y-2">
                <p className="mt-2 bg-[#019DBF] text-lg w-fit px-5 py-2">
                    <span className="font-semibold">Donated On: </span>
                    {donationDate}
                </p>

                <h2 className="card-title">
                    {title}
                </h2>

                <p>
                    <span className="font-semibold ">Description: </span>
                    {description}
                </p>
                <p>
                    <span className="font-semibold">Amount: </span>
                    $ {amount}
                </p>

                <p>
                    <span className="font-semibold ">Deadline: </span>
                    {deadline}
                </p>
            </div>
        </div>

    );
};

export default DonationCard;