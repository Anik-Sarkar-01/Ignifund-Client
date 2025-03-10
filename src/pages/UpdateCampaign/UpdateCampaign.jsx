
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const UpdateCampaign = () => {
    const loadedCampaign = useLoaderData();
    const { _id, image, title, type, description, amount, deadline, email, name } = loadedCampaign;

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

        const updatedCampaign = { image, title, type, description, amount, deadline, email, name };

        fetch(`https://ignifund-server.vercel.app/campaign/${_id}`, {
            method: "PUT",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(updatedCampaign)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Good Job!',
                        text: 'Campaign Updated Successfully',
                        icon: 'success',
                        confirmButtonText: 'OK'
                    })
                }
            })
    }
    return (
        <div className="hero min-h-screen px-10 py-5">
            <div className="w-full">
                <h2 className='text-3xl font-bold text-center'>Update Your Campaign</h2>
                <div className="card-body max-w-3xl mx-auto  border-2 border-[#019DBF] border-dotted mt-5">
                    <form onSubmit={handleSubmit} className="fieldset *:w-full *:text-black *:font-semibold">
                        <label className="fieldset-label">Image URL</label>
                        <input type="text"
                            name='image'
                            defaultValue={image}
                            className="input"
                            placeholder="Image URL" />
                        <label className="fieldset-label">Campaign Title</label>
                        <input type="text"
                            name='title'
                            defaultValue={title}
                            className="input" placeholder="Campaign Title" />
                        <label className="fieldset-label">Campaign Type</label>
                        <input type="text"
                            name='type'
                            defaultValue={type}
                            className="input" placeholder="Campaign Type" />
                        <label className="fieldset-label">Description</label>
                        <textarea className="textarea" name='description' defaultValue={description} placeholder="Description"></textarea>
                        <label className="fieldset-label">Minimum Donation Amount</label>
                        <input type="number"
                            name='amount'
                            defaultValue={amount}
                            className="input" placeholder="Donation Amount" />
                        <label className="fieldset-label">Deadline</label>
                        <input type="date"
                            name='deadline'
                            defaultValue={deadline}
                            className="input" placeholder="Deadline" />
                        <label className="fieldset-label">User Email</label>
                        <input type="email"
                            name='email'
                            defaultValue={email}
                            readOnly
                            className="input" placeholder="Email" />
                        <label className="fieldset-label">Name</label>
                        <input type="text"
                            name='name'
                            defaultValue={name}
                            readOnly
                            className="input" placeholder="User Name" />
                        <button className="btn bg-[#019DBF] rounded-none mt-4 ">Update Campaign</button>
                    </form>
                </div>
            </div>

        </div>
    );
};

export default UpdateCampaign;