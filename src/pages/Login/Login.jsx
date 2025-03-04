import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';

const Login = () => {
    const [error, setError] = useState("");
    const {logIn} = useContext(AuthContext);

    const handleLogin = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        logIn(email,password)
        .then((res) => {
            setError("");
            const user = res.user;
            console.log(user);
        })
        .catch((error) => {
            setError(error.code)
        })
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
                        <p className='text-red-600'>{error}</p>
                        <button className="btn btn-neutral mt-4">Login</button>
                    </form>
                    <button className='btn btn-primary'>Login With Google</button>
                </div>
            </div>
            <p className='text-center'>Don't have an Account? <Link to="/register"className='btn'>Register</Link></p>
        </div>
    );
};

export default Login;