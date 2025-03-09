import React from 'react';
import { Fade } from 'react-awesome-reveal';
import Swal from 'sweetalert2';

const Volunteer = () => {
    const handleFormSubmit = (e) => {
        e.preventDefault();
        Swal.fire({
            title: "We will Contact You Soon!",
            icon: "success",
        });
    };

    return (
        <Fade>
            <div
                className="hero min-h-screen max-w-7xl mx-auto mt-10 mb-16 "
                style={{
                    backgroundImage: "url(https://i.ibb.co.com/4R3BP0Gh/charity.jpg)",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            >
                <div className="hero-overlay"></div>
                <div className="hero-content flex flex-col items-center text-center text-neutral-content">
                    <h2 className='text-2xl lg:text-4xl font-semibold'>Join Us as a Volunteer</h2>
                    <p className='text-xl'>Help us make a difference in the world by giving your time.</p>
                    <div className="card-body w-full sm:w-3/4 lg:w-11/12">
                        <form
                            onSubmit={handleFormSubmit}
                            className="text-white text-sm"
                        >
                            <label className="block text-left mb-2">First Name</label>
                            <input
                                type="text"
                                required
                                className="input bg-[#019DBF] w-full p-3 rounded-none mb-4"
                                placeholder="First name"
                            />
                            <label className="block text-left mb-2">Last Name</label>
                            <input
                                type="text"
                                required
                                className="input bg-[#019DBF] w-full p-3 rounded-none mb-4"
                                placeholder="Last name"
                            />
                            <div className="flex flex-col sm:flex-row sm:gap-4">
                                <div className="flex flex-col w-full sm:w-1/3">
                                    <label className="block text-left mb-2">Email</label>
                                    <input
                                        type="email"
                                        required
                                        className="input bg-[#019DBF] w-full p-3 rounded-none mb-4"
                                        placeholder="Email"
                                    />
                                </div>
                                <div className="flex flex-col w-full sm:w-1/3">
                                    <label className="block text-left mb-2">Mobile No</label>
                                    <input
                                        type="number"
                                        required
                                        className="input bg-[#019DBF] w-full p-3 rounded-none mb-4"
                                        placeholder="Mobile"
                                    />
                                </div>
                                <div className="flex flex-col w-full sm:w-1/3">
                                    <label className="block text-left mb-2">Address</label>
                                    <input
                                        type="text"
                                        required
                                        className="input rounded-none bg-[#019DBF] w-full mb-4"
                                        placeholder="Address"
                                    />
                                </div>
                            </div>
                            <button
                                type="submit"
                                className="btn w-full mt-4 rounded-none text-lg"
                            >
                                Submit
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </Fade>
    );
};

export default Volunteer;
