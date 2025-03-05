import React, { useContext } from 'react';
import Swal from 'sweetalert2'
import { AuthContext } from '../../provider/AuthProvider';

const AddCampaigns = () => {
    const {user} = useContext(AuthContext);
    const handleSubmit = e => {
        e.preventDefault();
        const form = e.target;
        const image = form.image.value;
        const title = form.title.value;
        const type = form.type.value;
        const description = form.description.value;
        const amount = form.amount.value;
        const deadline = form.deadline.value;
        const email = form.email.value;
        const name = form.name.value;

        const newCampaign = {image, title, type, description, amount, deadline, email, name};

        fetch('http://localhost:5000/campaigns', {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(newCampaign)
        })
        .then(res => res.json())
        .then(data => {
           if(data.insertedId){
            Swal.fire({
                icon: "success",
                title: "Your Campaign is Added",
                showConfirmButton: false,
                timer: 1500
              });
           }
        })
    }
    return (
        <div className="hero bg-base-200 min-h-screen">
                <div className="bg-base-100 w-full shadow-2xl ">
                    <div className="card-body max-w-3xl mx-auto">
                        <form onSubmit={handleSubmit} className="fieldset *:w-full">
                            <label className="fieldset-label">Image</label>
                            <input type="text"
                            name='image'
                            className="input" 
                            placeholder="Image URL" />
                            <label className="fieldset-label">Campaign Title</label>
                            <input type="text" 
                            name='title'
                            className="input" placeholder="Campaign Title" />
                            <label className="fieldset-label">Campaign Type</label>
                            <input type="text"
                            name='type'
                            className="input" placeholder="Campaign Type" />
                            <label className="fieldset-label">Description</label>
                            <input type="text" 
                            name='description'
                            className="input" placeholder="Description" />
                            <label className="fieldset-label">Minimum Donation Amount</label>
                            <input type="number" 
                            name='amount'
                            className="input" placeholder="Donation Amount" />
                            <label className="fieldset-label">Deadline</label>
                            <input type="date" 
                            name='deadline'
                            className="input" placeholder="Deadline" />
                            <label className="fieldset-label">User Email</label>
                            <input type="email" 
                            name='email'
                            value={user.email}
                            readOnly
                            className="input" placeholder="Email" />
                            <label className="fieldset-label">Name</label>
                            <input type="text" 
                            name='name'
                            value={user.displayName}
                            readOnly
                            className="input" placeholder="User Name" />
                            <button className="btn btn-neutral mt-4">Add Campaign</button>
                        </form>
                    </div>
                </div>
            
        </div>
    );
};

export default AddCampaigns;