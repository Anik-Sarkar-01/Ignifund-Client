import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';

const Navbar = () => {
    const { user, setUser, logOut } = useContext(AuthContext);

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
        <div className="navbar bg-base-100 shadow-sm">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {navItems}
                    </ul>
                </div>
                <Link to="/" className="btn btn-ghost text-xl">IgniFund</Link>
            </div>
            <div className="navbar-center pr-[600px] hidden lg:flex">
                <ul className="menu gap-3 menu-horizontal px-1">
                    {navItems}
                </ul>
            </div>
            <div className="navbar-end">
            
                {
                    user ?
                            <Link onClick={handleLogOut} className='btn'>Log Out</Link>
                        :
                        <div className='flex items-center gap-3'>
                            <Link to="/login" className="btn">LogIn</Link>
                            <Link to="/register" className="btn">Register</Link>
                        </div>
                }
            </div>
        </div>
    );
};

export default Navbar;