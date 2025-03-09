import React, { useContext } from 'react';
import Swal from 'sweetalert2'
import { AuthContext } from '../../provider/AuthProvider';

const AddCampaigns = () => {
    const { user } = useContext(AuthContext);
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

        const newCampaign = { image, title, type, description, amount, deadline, email, name };

        fetch('https://ignifund-server.vercel.app/campaigns', {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(newCampaign)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
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
        <div className="hero min-h-screen px-10 py-5 ">
            <div className="bg-base-100 w-full">
                <h2 className='text-3xl font-bold text-center py-5'>Add Campaign</h2>
                <div className="card-body max-w-3xl mx-auto border-2 border-[#019DBF] p-8 border-dotted ">
                    <form onSubmit={handleSubmit} className="fieldset *:w-full *:font-semibold">
                        <label className="fieldset-label">Image URL</label>
                        <input type="text"
                            required
                            name='image'
                            className="input"
                            placeholder="Image URL" />
                        <label className="fieldset-label">Campaign Title</label>
                        <input type="text"
                            name='title'
                            required
                            className="input" placeholder="Campaign Title" />
                        <label className="fieldset-label">Campaign Type</label>
                        <input type="text"
                            name='type'
                            className="input" placeholder="Campaign Type" />
                        <label className="fieldset-label">Description</label>
                        <textarea className="textarea" name='description' placeholder="Description"></textarea>
                        <label className="fieldset-label">Minimum Donation Amount</label>
                        <input type="number"
                            name='amount'
                            required
                            className="input" placeholder="Donation Amount" />
                        <label className="fieldset-label">Deadline</label>
                        <input type="date"
                            name='deadline'
                            required
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
                        <button className="btn bg-[#019DBF] rounded-none mt-4">Add Campaign</button>
                    </form>
                </div>
            </div>

        </div>
    );
};

export default AddCampaigns;