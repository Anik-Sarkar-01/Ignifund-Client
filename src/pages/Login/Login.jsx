import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';
import { BsGoogle } from 'react-icons/bs';
import { AiOutlineLogin } from 'react-icons/ai';

const Login = () => {
    const [error, setError] = useState("");
    const { logIn, googleLogIn, setUser, toastSuccess, toastError } = useContext(AuthContext);

    const location = useLocation();
    const navigate = useNavigate();


    const handleLogin = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        logIn(email, password)
            .then((res) => {
                setError("");
                const user = res.user;
                setUser(user);
                navigate(location?.state ? location.state : "/");
                toastSuccess("Login Successful!")
            })
            .catch((error) => {
                setError(error.code)
                toastError("Error Occurred.Try Again!")
            })
    }

    const handleGoogleLogIn = () => {
        googleLogIn()
            .then((result) => {
                setError("");
                const user = result.user;
                setUser(user);
                navigate(location?.state ? location.state : "/");
                toastSuccess("Login Successful!")
            })
            .catch((error) => {
                setError(error.code);
                toastError("Error Occurred.Try Again!")
            })
    }


    return (
        <div className='pt-5 space-y-5'>
            <div className="bg-base-200 max-w-xl mx-auto ">
                <div className="card-body">
                    <form onSubmit={handleLogin} className="fieldset *:w-full *:text-[16px] *:font-semibold">
                        <label className="fieldset-label">Email</label>
                        <input type="email" name='email' className="input" placeholder="Email" />
                        <label className="fieldset-label">Password</label>
                        <input type="password" name='password' className="input" placeholder="Password" />
                        <p className='text-red-600'>{error}</p>
                        <button className="btn bg-[#019DBF] mt-4 font-bold text-[16px] rounded-none">  <AiOutlineLogin /> Login</button>
                    </form>
                    <button onClick={handleGoogleLogIn} className='btn bg-[#f26a60] text-white font-bold text-[16px] rounded-none'>
                        <BsGoogle></BsGoogle>
                        Login With Google</button>
                </div>
            </div>
            <p className='text-center font-semibold'>Don't have an Account? <Link to="/register" className='btn text-[16px] font-semibold bg-[#019DBF] rounded-none'> <AiOutlineLogin></AiOutlineLogin> Register</Link></p>
        </div>
    );
};

export default Login;