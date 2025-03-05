
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const UpdateCampaign = () => {
    const loadedCampaign = useLoaderData();
    const {_id, image, title, type, description, amount, deadline, email, name} = loadedCampaign;

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

        fetch(`http://localhost:5000/campaign/${_id}`, {
            method: "PUT",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(updatedCampaign)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
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
        <div className="hero bg-base-200 min-h-screen">
            <div className="bg-base-100 w-full shadow-2xl ">
                <div className="card-body max-w-3xl mx-auto">
                    <form onSubmit={handleSubmit} className="fieldset *:w-full">
                        <label className="fieldset-label">Image</label>
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
                        <input type="text"
                            name='description'
                            defaultValue={description}
                            className="input" placeholder="Description" />
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
                        <button className="btn btn-neutral mt-4">Update Campaign</button>
                    </form>
                </div>
            </div>

        </div>
    );
};

export default UpdateCampaign;