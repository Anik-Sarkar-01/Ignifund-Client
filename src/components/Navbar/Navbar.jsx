import React, { useContext, useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';
import { AiOutlineLogin, AiOutlineLogout } from 'react-icons/ai';

const Navbar = () => {
    const { user, setUser, logOut } = useContext(AuthContext);
    const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
    useEffect(() => {
        localStorage.setItem("theme", theme);
        document.querySelector("html").setAttribute("data-theme", theme);
    }, [theme]);

    const handleThemeToggle = (e) => {
        if (e.target.checked) {
            setTheme("dark");
        } else {
            setTheme("light");
        }
    };

    const handleLogOut = () => {
        logOut()
            .then(() => {
                setUser(null);
            })
    }

    const navItems = <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to='/allCampaigns'>All Campaign</NavLink></li>
        <li><NavLink to='/addCampaigns'>Add New Campaign</NavLink></li>
        <li><NavLink to="/myCampaigns">My Campaign</NavLink></li>
        <li><NavLink to="/myDonations">My Donations</NavLink></li>
    </>
    return (
        <div className="navbar my-5">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost xl:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 rounded-none p-4 shadow font-bold">
                        {navItems}
                    </ul>
                </div>
                <Link to="/" className="btn btn-ghost text-2xl font-extrabold">IgniFund</Link>
            </div>
            <div className="relative z-50 navbar-center hidden xl:flex">
                <ul className="menu gap-3 menu-horizontal bg-[#019DBF] px-1 font-bold text-[16px] ">
                    {navItems}
                </ul>
            </div>
            <div className="navbar-end">

                {
                    user ?
                        <div className='flex items-center gap-3'>
                            <div className="relative group w-12 h-12">

                                <img
                                    className="rounded-full w-full h-full object-cover"
                                    src={user.photoURL}
                                    alt=""
                                />
                                <div className="absolute inset-0 text-center rounded-lg bg-white text-black text-xs flex items-center font-semibold
                                opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    {user.displayName}
                                </div>
                            </div>
                            <Link onClick={handleLogOut} className='btn border-2 border-[rgb(1,157,191)] rounded-none text-[16px] font-bold'> <AiOutlineLogout></AiOutlineLogout> Log Out</Link>
                        </div>
                        :
                        <div className='flex items-center gap-3 lg:*:text-[16px] text-sm *:btn-sm xl:*:btn-lg font-bold'>
                            <Link to="/login" className="border-2 btn border-[#019DBF] rounded-none"><AiOutlineLogin></AiOutlineLogin> Log In</Link>
                            <Link to="/register" className="border-2 btn border-[#019DBF] rounded-none"><AiOutlineLogin /> Register</Link>
                        </div>
                }
                <div className='ps-4'>
                    <label className="swap swap-rotate">
                        <input type="checkbox" onChange={handleThemeToggle} checked={theme === "dark"} className="theme-controller" />
                        <svg
                            className="swap-off h-6 w-6 fill-current"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24">
                            <path
                                d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
                        </svg>
                        <svg
                            className="swap-on h-6 w-6 fill-current"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24">
                            <path
                                d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
                        </svg>
                    </label>
                </div>
            </div>
        </div>
    );
};

export default Navbar;