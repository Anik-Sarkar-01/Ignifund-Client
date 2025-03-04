import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    const handleLogin = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
    }
    return (
        <div className='pt-5 space-y-5'>
            <div className="bg-base-200 max-w-xl mx-auto ">

                <div className="card-body">
                    <form onSubmit={handleLogin} className="fieldset *:w-full">
                        <label className="fieldset-label">Email</label>
                        <input type="email" name='email' className="input" placeholder="Email" />
                        <label className="fieldset-label">Password</label>
                        <input type="password" name='password' className="input" placeholder="Password" />
                        <div><a className="link link-hover">Forgot password?</a></div>
                        <button className="btn btn-neutral mt-4">Login</button>
                    </form>
                    <button className='btn'>Login With Google</button>
                </div>
            </div>
            <p className='text-center'>Don't have an Account? <Link to="/register"className='btn'>Register</Link></p>
        </div>
    );
};

export default Login;