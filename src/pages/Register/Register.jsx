import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {

    const handleRegister = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const photo = form.photoUrl.value;
        const password = form.password.value;

        console.log(name, email, photo, password);
    }

    return (
        <div className='pt-5 space-y-2'>
            <div className="bg-base-200 max-w-xl mx-auto ">
                <div className="card-body">
                    <form onSubmit={handleRegister} className="fieldset *:w-full">
                        <label className="fieldset-label">Name</label>
                        <input type="text" name='name' className="input" placeholder="Name" />
                        <label className="fieldset-label">Email</label>
                        <input type="email" name='email' className="input" placeholder="Email" />
                        <label className="fieldset-label">Photo URL</label>
                        <input type="text" name='photoUrl' className="input" placeholder="photo URL" />
                        <label className="fieldset-label">Password</label>
                        <input type="password" name='password' className="input" placeholder="Password" />
                        <button className="btn btn-neutral mt-4">Register</button>
                    </form>
                </div>
            </div>
            <p className='text-center'>Already  have an Account? <Link to="/login" className='btn'>Login</Link></p>
        </div>
    );
};

export default Register;