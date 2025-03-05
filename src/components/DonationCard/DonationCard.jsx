import React from 'react';

const DonationCard = ({donation}) => {
    const {image, title, description, amount, deadline} = donation;
    return (
        <div className="card bg-base-100 w-96 shadow-sm">
            <figure>
                <img
                    src={image}
                    alt="" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>{description}</p>
                <p>$ {amount}</p>
                <p>{deadline}</p>
            </div>
        </div>
    );
};

export default DonationCard;