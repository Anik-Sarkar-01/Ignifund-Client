import React from 'react';
import { FaPhoneAlt } from 'react-icons/fa';
import { FaLocationDot } from 'react-icons/fa6';
import { MdEmail, MdMarkEmailRead } from 'react-icons/md';
import logo from "../../assets/logo.png";
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <section className='bg-base-200 p-10 space-y-20'>
            <div className='flex flex-col lg:flex-row justify-center gap-10'>
                <div className='flex flex-col items-center gap-3'>
                    <div className='bg-gradient-to-r from-[#13cbf5] h-10 w-10 to-[#41eadc] rounded-full flex items-center justify-center'>
                        <FaPhoneAlt></FaPhoneAlt>
                    </div>
                    <p>(+00)12345678</p>
                </div>
                <div className='flex flex-col items-center gap-3'>
                    <div className='bg-gradient-to-r from-[#13cbf5] h-10 w-10 to-[#41eadc] rounded-full flex items-center justify-center'>
                        <MdEmail></MdEmail>
                    </div>
                    <p>info@gmail.com</p>
                </div>
                <div className='flex flex-col items-center gap-3'>
                    <div className='bg-gradient-to-r from-[#13cbf5] h-10 w-10 to-[#41eadc] rounded-full flex items-center justify-center'>
                        <FaLocationDot></FaLocationDot>
                    </div>
                    <p>Dhaka, Bangladesh</p>
                </div>
            </div>
            <div className="footer footer-vertical lg:footer-horizontal justify-around items-center text-base-content">
                <aside className='flex flex-col lg:flex-row justify-center items-center gap-5 text-center lg:text-start'>
                    <img src={logo} className='w-24' alt="" />
                    <p className='leading-loose '>
                       <span className='text-lg font-semibold'>IgniFund Ltd.</span>
                        <br />
                        Providing crowd funding solution since 2025
                    </p>
                </aside>
                <nav className='w-full flex flex-col items-center lg:items-baseline'>
                    <h6 className="footer-title">Community</h6>
                    <Link className="link link-hover">Blogs</Link>
                    <Link className="link link-hover">Success Stories</Link>
                    <Link className="link link-hover">Partner With Us</Link>
                    <Link className="link link-hover">Volunteer Opportunities</Link>
                </nav>
                <nav className='w-full flex  flex-col items-center lg:items-baseline'>
                    <h6 className="footer-title">About</h6>
                    <Link className="link link-hover">About Us</Link>
                    <Link className="link link-hover">Contact Us</Link>
                    <Link className="link link-hover">Careers</Link>
                    <Link className="link link-hover">Press kit</Link>
                </nav>
            </div>
            <div className='flex flex-col justify-center items-center gap-3 bg-[#09a7ca] max-w-3xl mx-auto py-10'>
                <div className='flex items-center gap-3'>
                    <MdMarkEmailRead />
                    <h3 className='text-lg font-semibold text-gray-700'>Subscribe to Our Newsletter
                    </h3>
                </div>
                <div className="join">
                    <input className="input join-item text-gray-600 bg-gray-200 border-none" placeholder="Email" />
                    <button className="btn shadow-none join-item border-none">Subscribe</button>
                </div>
            </div>
        </section>
    );
};

export default Footer;